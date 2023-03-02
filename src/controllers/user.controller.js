import UserService from '../services/user.service';
ClientInfoService;
import { imageUpload } from '../helpers/fileUpload';
import {
  hashPassword,
  comparePassword,
  decodeToken,
  generateToken
} from '../helpers/user.helper';
import sendEmail from '../helpers/nodemailer';
import { verifyToken } from '../helpers/user.helper';
import DocDeptService from '../services/doctor_dept.service';
import MedicalInfoService from '../services/medical_info.service';
import {
  Doctor_Dept,
  Doctor,
  Department,
  Medical_Info
} from '../database/models';
import ClientInfoService from '../services/client_medicalinfo.service';

export default class userController {
  constructor() {
    this.userService = new UserService();
    this.docdeptService = new DocDeptService();
    this.clientMedicalInfoService = new ClientInfoService();
    this.medicalInfoService = new MedicalInfoService();
  }

  async createDoctor(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        gender,
        phone_number,
        id_number,
        birth_date,
        marital_status,
        experience_years,
        cost_per_appointment,
        salary,
        education,
        about
      } = req.body;

      if (req.file) {
        req.body.picture = await imageUpload(req);
      } else {
        if (gender === 'female') {
          req.body.picture =
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png';
        }
        req.body.picture =
          'https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png';
      }

      const newUser = await this.userService
        .createDoctor(
          {
            role_id: 2,
            first_name,
            last_name,
            email,
            password: hashPassword(password),
            picture: req.body.picture,
            phone_number,
            id_number,
            gender,
            birth_date,
            marital_status,
            experience_years,
            cost_per_appointment,
            salary,
            education,
            about
          },
          res
        )
        .catch((error) => {
          return res.status(500).json({
            message: 'Error occured while creating a user',
            error: error.message
          });
        });

      const doctor_id = newUser.doctor_id;

      const existingDoctor = await Doctor.findOne({
        where: {
          doctor_id: doctor_id
        }
      });
      if (!existingDoctor) {
        return res.status(404).send({
          error: "The Doctor you are trying assign doesn't exist."
        });
      }

      const deptIdsArr = req.body.department_id.split(', ');

      var lastArray = [];
      var usableIndices = [];
      for (let i = 0; i < deptIdsArr.length; i++) {
        const existingDept = await Department.findOne({
          where: {
            department_id: deptIdsArr[i]
          }
        });

        const existingRelation = await Doctor_Dept.findOne({
          where: { doctor_id: doctor_id, department_id: deptIdsArr[i] }
        }).catch((error) => {
          return res.status(404).send({
            error: error.message
          });
        });
        if (!existingRelation && existingDept) {
          usableIndices.push(i);
        }
        lastArray.push(existingRelation);
      }

      if (usableIndices == '') {
        return res.status(404).json({
          error: 'All these relations have already been made.'
        });
      }

      const getBulkArr = (deptIdsArr) => {
        var arr = [];
        var newArr = [];
        for (let i = 0; i < deptIdsArr.length; i++) {
          var obj = {};
          obj['doctor_id'] = doctor_id;
          obj['department_id'] = deptIdsArr[i];

          arr.push(obj);
        }

        for (let i = 0; i < arr.length; i++) {
          if (usableIndices.includes(i)) {
            newArr.push(arr[i]);
          }
        }
        return newArr;
      };

      await this.docdeptService.createDocDept(getBulkArr(deptIdsArr), res);

      const token = generateToken({ id: doctor_id }, '1d');
      const message = `
         <h1><strong>Activate your account.</strong></h1>
      <p>
        You were successfully registered to MedStem. Activate your account by
        clicking the button below.
      </p>
      <a
        href="${process.env.FRONTEND_URL}/verify?token=${token}"
        target="_blank"
      >
        <button
          style="
            border: none;
            border-radius: 3px;
            background: #003e6b;
            color: #ffffff;
            padding: 10px 5px;
            width: fit-content;
            margin: auto;
          "
        >
          Verify email
        </button>
      </a> 
            `;
      const subject = `Your account was successfully created!`;
      await sendEmail(subject, message, newUser.email);
      return res.status(201).json({
        status: 201,
        message:
          'User registered successfully! Please check your email for verification.',
        token
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a user',
        error: error.message
      });
    }
  }

  async registerClient(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        gender,
        phone_number,
        id_number,
        birth_date,
        marital_status,
        country,
        address_1,
        address_2
      } = req.body;

      if (req.file) {
        req.body.picture = await imageUpload(req);
      } else {
        if (gender === 'female') {
          req.body.picture =
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png';
        }
        req.body.picture =
          'http s://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png';
      }

      const newUser = await this.userService.createUser(
        {
          role_id: 3,
          first_name,
          last_name,
          email,
          password: hashPassword(password),
          picture: req.body.picture,
          phone_number,
          id_number,
          gender,
          birth_date,
          marital_status,
          country,
          address_1,
          address_2
        },
        res
      );

      // Array to pass in body
      const str = req.body.arr;
      // const first_arr = [
      //   {
      //     info_id,
      //     description
      //   },
      //   {
      //     info_id,
      //     description
      //   },
      //   {
      //     info_id,
      //     description
      //   }
      // ];

      const new_arr = str.split('#&#&');

      function getAnyt(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
          const obj = {};
          obj['info_id'] = arr[i].split('#%#%')[0];
          obj['description'] = arr[i].split('#%#%')[1];
          newArr.push(obj);
        }
        return newArr;
      }

      const first_arr = getAnyt(new_arr);
      let final_arr = [];

      for (let i = 0; i < first_arr.length; i++) {
        let obj = {};
        obj['client_id'] = newUser.client_id;
        obj['info_id'] = first_arr[i].info_id;
        obj['description'] = first_arr[i].description;

        // const existingInfo = await Medical_Info.findOne({
        //   where: {
        //     info_id: first_arr[i]
        //   }
        // });
        const id = first_arr[i].info_id;
        const existingInfo = await this.medicalInfoService.getSingleMedicalInfo(
          id
        );
        if (existingInfo) {
          final_arr.push(obj);
        }
      }

      if (final_arr == '') {
        return res.status(500).json({
          message: 'Final array is empty',
          error: error.message
        });
      }

      // let array = [
      //   {
      //     client_id: newUser.client_id,
      //     info_id,
      //     description
      //   },
      //   {
      //     client_id: newUser.client_id,
      //     info_id,
      //     description
      //   },
      //   {
      //     client_id: newUser.client_id,
      //     info_id,
      //     description
      //   }
      // ];

      const newInfo =
        await this.clientMedicalInfoService.createClientMedicalInfo(
          final_arr,
          res
        );

      console.log({ newUser });
      console.log({ newInfo });
      console.log({ first_arr });

      // const token = generateToken({ id: newUser.client_id }, '1d');
      // const message = `
      //    <h1><strong>Activate your account.</strong></h1>
      // <p>
      //   You were successfully registered to MedStem. Activate your account by
      //   clicking the button below.
      // </p>
      // <a
      //   href="${process.env.FRONTEND_URL}/verify?token=${token}"
      //   target="_blank"
      // >
      //   <button
      //     style="
      //       border: none;
      //       border-radius: 3px;
      //       background: #003e6b;
      //       color: #ffffff;
      //       padding: 10px 5px;
      //       width: fit-content;
      //       margin: auto;
      //     "
      //   >
      //     Verify email
      //   </button>
      // </a>
      //       `;
      // const subject = `Your account was successfully created!`;
      // await sendEmail(subject, message, newUser.email);
      return res.status(201).json({
        status: 201,
        message:
          'User registered successfully! Please check your email for verification.'
        // token
      });
    } catch (error) {
      console.log(error, '*****');
      return res.status(500).json({
        message: 'Error occured while creating a user',
        error: error.message
      });
    }
  }

  async verifyUser(req, res) {
    try {
      const { token } = req.params;

      let userData;
      try {
        userData = verifyToken(token);
      } catch (error) {
        return res.status(400).json({
          message: 'Invalid Token'
        });
      }

      const user = await this.userService.getUser(userData.doctor_id);

      await this.userService.updateUserParts(
        { isVerified: true },
        { where: { id: user.user_id } }
      );

      return res.status(200).send('<h1>Email successfully verified</h1>');
    } catch (error) {
      return res.status(500).json({
        message: 'An Unexpected error occurred',
        error
      });
    }
  }

  async clientLogin(req, res) {
    try {
      const user = await this.userService.clientLogin(req.body.email);
      const validation = comparePassword(req.body.password, user.password);
      if (validation) {
        const token = generateToken(
          {
            id: user.client_id
          },
          '7d'
        );
        return res.status(201).header('authenticate', token).json({
          message: 'Logged in successfully',
          data: { token, user }
        });
      }
      return res.status(400).json({ message: 'Invalid credentials' });
    } catch (error) {
      return res.status(500).json({
        message: 'An Unexpected error occurred',
        error
      });
    }
  }

  async doctorLogin(req, res) {
    try {
      const user = await this.userService.doctorLogin(req.body.email);
      const validation = comparePassword(req.body.password, user.password);
      if (validation) {
        const token = generateToken(
          {
            id: user.doctor_id
          },
          '7d'
        );
        return res.status(201).header('authenticate', token).json({
          message: 'Logged in successfully',
          data: { token, user }
        });
      }
      return res.status(400).json({ message: 'Invalid credentials' });
    } catch (error) {
      return res.status(500).json({
        message: 'An Unexpected error occurred',
        error
      });
    }
  }

  async getDoctors(req, res) {
    try {
      const users = await new UserService().getDoctors();
      return res.status(200).json({
        message: 'Retrieved all users successfully',
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching users',
        error: error.message
      });
    }
  }

  async getClients(req, res) {
    try {
      const users = await new UserService().getClients();
      return res.status(200).json({
        message: 'Retrieved all clients successfully',
        data: users
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching users',
        error: error.message
      });
    }
  }

  async getClient(req, res) {
    try {
      const { id } = req.params;
      const result = await this.userService.getClient(id);
      return res.status(200).json({
        message: 'Retrieved one client successfully',
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching users',
        error: error.message
      });
    }
  }

  async getDoctor(req, res) {
    try {
      const { id } = req.params;
      const result = await this.userService.getUser(id);
      return res.status(200).json({
        message: 'Retrieved one doctor successfully',
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching doctor',
        error: error.message
      });
    }
  }

  async updateDoctor(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        gender,
        phone_number,
        id_number,
        birth_date,
        marital_status,
        experience_years,
        cost_per_appointment,
        salary,
        education,
        about
      } = req.body;

      const id = req.params.id;

      if (req.file) {
        req.body.picture = await imageUpload(req);
      } else {
        if (gender === 'female') {
          req.body.picture =
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png';
        }
        req.body.picture =
          'https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png';
      }

      const newUser = await this.userService.updateDoctor(req.body, {
        role_id: 2,
        first_name,
        last_name,
        email,
        password: hashPassword(password),
        picture: req.body.picture,
        phone_number,
        id_number,
        gender,
        birth_date,
        marital_status,
        experience_years,
        cost_per_appointment,
        salary,
        education,
        about,
        where: {
          user_id: id
        }
      });
      return res.status(201).json({
        status: 201,
        message: 'Doctor updated successfully.',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to update doctor info.',
        error: error.message
      });
    }
  }
}
