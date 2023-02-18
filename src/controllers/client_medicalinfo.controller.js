import { Client, Client_MedicalInfo, Medical_Info } from '../database/models';
import ClientInfoService from '../services/client_medicalinfo.service';
import UserService from '../services/user.service';

export default class ClientMedicalInfoController {
  constructor() {
    this.clientMedicalInfoService = new ClientInfoService();
    this.userService = new UserService();
  }

  async createClientMedicalInfo(req, res) {
    try {
      const { client_id, info_id } = req.body;

      const newInfo =
        await this.clientMedicalInfoService.createClientMedicalInfo(
          {
            client_id,
            info_id
          },
          res
        );

      return res.status(201).json({
        status: 201,
        message: 'Medical info creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a medical info.',
        error: error.message
      });
    }
  }

  async getAllMedicalInfo(req, res) {
    try {
      const infos =
        await this.clientMedicalInfoService.getAllClientMedicalInfo();
      return res.status(200).json({
        message: 'Retrieved all infos successfully',
        data: infos
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching infos',
        error: error.message
      });
    }
  }

  async assignInfo(req, res) {
    try {
      const existingClient = await Client.findOne({
        where: {
          client_id: req.body.client_id
        }
      });
      if (!existingClient) {
        return res.status(404).json({
          error: "The Client you are trying assign doesn't exist."
        });
      }

      const myTuts = req.body.info_id.split(', ');

      var checker = [];
      var makeup = [];
      for (let i = 0; i < myTuts.length; i++) {
        const existingInfo = await Medical_Info.findOne({
          where: {
            info_id: myTuts[i]
          }
        });

        const existingRelation = await Client_MedicalInfo.findOne({
          where: { client_id: req.body.client_id, info_id: myTuts[i] }
        }).catch((err) => {});
        if (!existingRelation && existingInfo) {
          makeup.push(i);
        }
        checker.push(existingRelation);
      }

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
          obj['client_id'] = req.body.client_id;
          obj['info_id'] = myTuts[i];

          arr.push(obj);
        }

        for (let i = 0; i < arr.length; i++) {
          if (makeup.includes(i)) {
            newArr.push(arr[i]);
          }
        }
        return newArr;
      };

      await Client_MedicalInfo.bulkCreate(getBulkArr(myTuts))
        .then((data) => {
          return res.status(200).send({
            message: "Medical info added to patient'n data successfully.",
            data
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: 'Error occured while creating med. infos',
            error: error.message
          });
        });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating med. infos',
        error: error.message
      });
    }
  }
}
