/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Department, Doctor } from '../database/models';

export default class DepartmentService {
  async makeDepartment(data) {
    const result = await Department.create(data);
    return result;
  }

  async getDepartments() {
    const result = await Department.findAll({
      include: [{ model: Doctor, as: 'doctors', attributes: ['email'] }]
    });
    return result;
  }

  async getSingleDepartment(id) {
    return Department.findByPk(id, {});
  }

  async updateDepartment(data, where) {
    const result = await Department.update(data, where);
    return result;
  }

  async deleteOneDepartment(where) {
    const result = await Department.destroy(where);
    return result;
  }

  async deleteDepartments({ where }) {
    const result = await Department.destroy({ where });
    return result;
  }
}
