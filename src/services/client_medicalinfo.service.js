/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Client_MedicalInfo } from '../database/models';

export default class ClientInfoService {
  async createClientMedicalInfo(data) {
    await Client_MedicalInfo.destroy({
      where: {},
      truncate: true
    });
    const result = await Client_MedicalInfo.bulkCreate(data);
    return result;
  }

  async createClientMedicalInfoArr(data) {
    const result = await Client_MedicalInfo.bulkCreate(data);
    return result;
  }

  async getAllClientMedicalInfo() {
    const result = await Client_MedicalInfo.findAll({});
    return result;
  }
}
