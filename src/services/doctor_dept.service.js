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
    const newData = await Doctor_Dept.bulkCreate(data);
    return newData;
  }

  async getDocDepts() {
    const infos = await Doctor_Dept.findAll({});
    return infos;
  }

  async deleteDocDepts(req) {
    const { id } = req.params;
    const infos = await Doctor_Dept.destroy({ where: { schedule_id: id } });
    return infos;
  }

  async updateDocDpt(data, where) {
    const newDocDpt = await Doctor_Dept.update(data, where);
    return newDocDpt;
  }

  async deleteDocDept({ where }) {
    const infos = await Doctor_Dept.destroy({ where });
    return infos;
  }
}
