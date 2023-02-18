/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Medical_Info } from '../database/models';

export default class MedicalInfoService {
  async createMedicalInfo(data) {
    const newInfo = await Medical_Info.create(data);
    return newInfo;
  }

  async getAllMedicalInfo() {
    const infos = await Medical_Info.findAll({});
    return infos;
  }
}
