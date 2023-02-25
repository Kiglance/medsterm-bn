/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Doctor_Dept, Doctor, Department } from '../database/models';

export default class DocDeptService {
  async createDocDept(data) {
    const result = await Doctor_Dept.bulkCreate(data);
    return result;
  }

  async getDocDepts() {
    const result = await Doctor_Dept.findAll({});
    return result;
  }

  async getDocDept(id) {
    return Doctor_Dept.findByPk(id, {});
  }

  async deleteDocDepts(req) {
    const result = await Doctor_Dept.destroy({ where });
    return result;
  }

  async updateDocDpt(data, where) {
    const result = await Doctor_Dept.update(data, where);
    return result;
  }

  async deleteDocDept({ where }) {
    const result = await Doctor_Dept.destroy({ where });
    return result;
  }
}
