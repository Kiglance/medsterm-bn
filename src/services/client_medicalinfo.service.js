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
    const newInfo = await Client_MedicalInfo.create(data);
    return newInfo;
  }

  async getAllClientMedicalInfo() {
    const infos = await Client_MedicalInfo.findAll({});
    return infos;
  }
}
