import { Client, Client_MedicalInfo, Medical_Info } from '../database/models';
import ClientInfoService from '../services/client_medicalinfo.service';
import MedicalInfoService from '../services/medical_info.service';
import UserService from '../services/user.service';

export default class ClientMedicalInfoController {
  constructor() {
    this.clientMedicalInfoService = new ClientInfoService();
    this.medicalInfoService = new MedicalInfoService();
    this.userService = new UserService();
  }

  async createClientMedicalInfo(req, res) {
    try {
      const existingClient = await Client.findOne({
        where: {
          client_id: req.body[0]?.client_id
        }
      });
      if (!existingClient) {
        return res.status(404).json({
          error: "The Client you are trying assign doesn't exist."
        });
      }

      let array = [
        {
          client_id: '',
          info_id,
          description
        },
        {
          client_id: '',
          info_id,
          description
        },
        {
          client_id: '',
          info_id,
          description
        }
      ];

      const newInfo =
        await this.clientMedicalInfoService.createClientMedicalInfo(
          req.body,
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
      const client_id = req.body.client_id;
      const existingClient = await Client.findOne({
        where: {
          client_id
        }
      });

      if (!existingClient) {
        return res.status(404).json({
          error: "The Client you are trying assign doesn't exist."
        });
      }

      const str = req.body.info_id;

      if (str !== '' && str !== undefined) {
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
          obj['client_id'] = existingClient.client_id;
          obj['info_id'] = first_arr[i].info_id;
          obj['description'] = first_arr[i].description;
          const id = first_arr[i].info_id;
          const existingInfo =
            await this.medicalInfoService.getSingleMedicalInfo(id);
          if (existingInfo) {
            final_arr.push(obj);
          } else {
            return res.status(500).json({
              message: 'None of these medical info were saved.'
            });
          }
        }

        if (final_arr == '') {
          return res.status(500).json({
            message: 'No medical info was selected to be added to history'
          });
        }
        console.log('*****fINAL ATR******');
        console.log(final_arr);
        console.log('*****FINAL******');
        const newInfo =
          await this.clientMedicalInfoService.createClientMedicalInfo(
            final_arr,
            res
          );

        return res.status(201).json({
          status: 201,
          message: "Medical info added to patient's data successfully."
        });
      }

      // const myTuts = req.body.info_id.split(', ');

      // var checker = [];
      // var makeup = [];
      // for (let i = 0; i < myTuts.length; i++) {
      //   const existingInfo = await Medical_Info.findOne({
      //     where: {
      //       info_id: myTuts[i]
      //     }
      //   });

      //   const existingRelation = await Client_MedicalInfo.findOne({
      //     where: { client_id: req.body.client_id, info_id: myTuts[i] }
      //   }).catch((err) => {});
      //   if (!existingRelation && existingInfo) {
      //     makeup.push(i);
      //   }
      //   checker.push(existingRelation);
      // }

      // if (makeup == '') {
      //   return res.status(404).send({
      //     error: 'All these relations have already been made.'
      //   });
      // }

      // const getBulkArr = (myTuts) => {
      //   var arr = [];
      //   var newArr = [];
      //   for (let i = 0; i < myTuts.length; i++) {
      //     var obj = {};
      //     obj['client_id'] = req.body.client_id;
      //     obj['info_id'] = myTuts[i];

      //     arr.push(obj);
      //   }

      //   for (let i = 0; i < arr.length; i++) {
      //     if (makeup.includes(i)) {
      //       newArr.push(arr[i]);
      //     }
      //   }
      //   return newArr;
      // };

      // await this.clientMedicalInfoService.createClientMedicalInfoArr(
      //   getBulkArr(myTuts),
      //   res
      // );

      // return res.status(201).send({
      //   message: "Medical info added to patient'n data successfully.",
      //   data
      // });

      // await Client_MedicalInfo.bulkCreate(getBulkArr(myTuts))
      //   .then((data) => {
      //     return res.status(200).send({
      //       message: "Medical info added to patient'n data successfully.",
      //       data
      //     });
      //   })
      //   .catch((error) => {
      //     return res.status(500).json({
      //       message: 'Error occured while creating med. infos',
      //       error: error.message
      //     });
      //   });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating med. infos',
        error: error.message
      });
    }
  }

  // async assignInfo(req, res) {
  //   try {
  //     const existingClient = await Client.findOne({
  //       where: {
  //         client_id: req.body.client_id
  //       }
  //     });
  //     if (!existingClient) {
  //       return res.status(404).json({
  //         error: "The Client you are trying assign doesn't exist."
  //       });
  //     }

  //     const myTuts = req.body.info_id.split(', ');

  //     var checker = [];
  //     var makeup = [];
  //     for (let i = 0; i < myTuts.length; i++) {
  //       const existingInfo = await Medical_Info.findOne({
  //         where: {
  //           info_id: myTuts[i]
  //         }
  //       });

  //       const existingRelation = await Client_MedicalInfo.findOne({
  //         where: { client_id: req.body.client_id, info_id: myTuts[i] }
  //       }).catch((err) => {});
  //       if (!existingRelation && existingInfo) {
  //         makeup.push(i);
  //       }
  //       checker.push(existingRelation);
  //     }

  //     if (makeup == '') {
  //       return res.status(404).send({
  //         error: 'All these relations have already been made.'
  //       });
  //     }

  //     const getBulkArr = (myTuts) => {
  //       var arr = [];
  //       var newArr = [];
  //       for (let i = 0; i < myTuts.length; i++) {
  //         var obj = {};
  //         obj['client_id'] = req.body.client_id;
  //         obj['info_id'] = myTuts[i];

  //         arr.push(obj);
  //       }

  //       for (let i = 0; i < arr.length; i++) {
  //         if (makeup.includes(i)) {
  //           newArr.push(arr[i]);
  //         }
  //       }
  //       return newArr;
  //     };

  //     await this.clientMedicalInfoService.createClientMedicalInfoArr(
  //       getBulkArr(myTuts),
  //       res
  //     );

  //     return res.status(201).send({
  //       message: "Medical info added to patient'n data successfully.",
  //       data
  //     });

  //     // await Client_MedicalInfo.bulkCreate(getBulkArr(myTuts))
  //     //   .then((data) => {
  //     //     return res.status(200).send({
  //     //       message: "Medical info added to patient'n data successfully.",
  //     //       data
  //     //     });
  //     //   })
  //     //   .catch((error) => {
  //     //     return res.status(500).json({
  //     //       message: 'Error occured while creating med. infos',
  //     //       error: error.message
  //     //     });
  //     //   });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: 'Error occured while creating med. infos',
  //       error: error.message
  //     });
  //   }
  // }
}
