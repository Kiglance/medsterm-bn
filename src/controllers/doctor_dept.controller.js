import WorkDayService from '../services/work_day.service';
import DocDeptService from '../services/doctor_dept.service';
import UserService from '../services/user.service';
import { Doctor_Dept, User, Department } from '../database/models';

export default class DoctorDeptController {
  constructor() {
    this.dptService = new DocDeptService();
    this.userService = new UserService();
  }

  async createDocDept(req, res) {
    try {
      const existingDoctor = await User.findOne({
        where: {
          doctor_id: req.body.doctor_id
        }
      });
      if (!existingDoctor) {
        return res.status(404).send({
          error: "The Doctor you are trying assign doesn't exist."
        });
      }

      const myTuts = req.body.department_id.split(', ');

      var checker = [];
      var makeup = [];
      for (let i = 0; i < myTuts.length; i++) {
        const existingProduct = await Department.findOne({
          where: {
            department_id: myTuts[i]
          }
        });

        const existingRelation = await Doctor_Dept.findOne({
          where: { doctor_id: req.body.doctor_id, department_id: myTuts[i] }
        }).catch((err) => {
          console.log(`${err}`);
        });
        console.log(existingRelation, '*11111111111111*');
        if (!existingRelation && existingProduct) {
          makeup.push(i);
        }
        checker.push(existingRelation);
      }
      console.log(checker, '*CHECKER*');
      console.log(makeup, '*MAKEUP*');

      if (makeup == '') {
        return res.status(404).send({
          error: 'All these relations have already been made.'
        });
      }

      const getBulkArr = (myTuts) => {
        var arr = [];
        var newArr = [];
        for (let i = 0; i < myTuts.length; i++) {
          var obj = {};
          obj['doctor_id'] = req.body.doctor_id;
          obj['department_id'] = myTuts[i];

          arr.push(obj);
        }
        console.log(arr, '*2222222222222*');

        for (let i = 0; i < arr.length; i++) {
          if (makeup.includes(i)) {
            newArr.push(arr[i]);
          }
        }
        console.log(newArr, '*252525*');
        return newArr;
      };

      console.log(getBulkArr(myTuts), '*333333333333333*');

      await Doctor_Dept.bulkCreate(getBulkArr(myTuts))
        .then((data) => {
          return res.status(200).send({
            message: 'Link made between the doc and dept successfully.',
            data
          });
        })
        .catch((err) => {
          return res.status(400).send(err);
        });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a doc dept.',
        error: error.message
      });
    }
  }

  async getDocDepts(req, res) {
    try {
      const days = await new DocDeptService().getDocDepts();
      return res.status(200).json({
        message: 'Retrieved all doc depts successfully',
        data: days
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching days',
        error: error.message
      });
    }
  }

  async updateDocDpt(req, res) {
    try {
      const { status, from, to } = req.body;

      const { id } = req.params;

      const newDay = await this.dptService.updateDocDpt(req.body, {
        status,
        from,
        to,
        where: {
          _id: id
        }
      });
      return res.status(201).json({
        status: 201,
        message: 'Work day has been updated successfully.',
        data: newDay
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to update doc dept.',
        error: error.message
      });
    }
  }

  async deleteDocDepts(req, res) {
    try {
      const days = await this.dptService.deleteDocDepts({
        where: {}
      });
      return res.status(200).json({
        message: 'Deleted all doc depts successfully'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting doc depts',
        error: error.message
      });
    }
  }
}
