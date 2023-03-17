/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Medical_Info, Client } from '../database/models';

export default class MedicalInfoService {
  async createMedicalInfo(data) {
    const result = await Medical_Info.create(data);
    return result;
  }

  async getAllMedicalInfo() {
    const result = await Medical_Info.findAll({
      include: [
        {
          model: Client,
          as: 'patients'
        }
      ]
    });
    return result;
  }

  async getSingleMedicalInfo(id) {
    return Medical_Info.findByPk(id, {});
  }

  async updateMedicalInfo(data, where) {
    const result = await Medical_Info.update(data, where);
    return result;
  }

  async deleteOneMedicalInfo(where) {
    const result = await Medical_Info.destroy(where);
    return result;
  }

  async deleteMedicalInfos({ where }) {
    const result = await Medical_Info.destroy({ where });
    return result;
  }
}
