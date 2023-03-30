/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Vacation } from '../database/models';
import { startOfMonth, endOfMonth } from 'date-fns';
import { Op } from 'sequelize';

export default class VacationService {
  async makeVacation(data) {
    const newVacation = await Vacation.create(data);
    return newVacation;
  }

  async getVacations() {
    const vacations = await Vacation.findAll({});
    return vacations;
  }

  async getSingleVacation(id) {
    return Vacation.findByPk(id, {});
  }

  async getVacationsByDoctorId({ id, month, year }) {
    const where = {};
    if (month && year) {
      const start = startOfMonth(new Date(year, month - 1));
      const end = endOfMonth(new Date(year, month - 1));
      where.from_date = { [Op.between]: [start, end] };
    } else if (month) {
      const start = startOfMonth(new Date().setMonth(month - 1));
      const end = endOfMonth(new Date().setMonth(month - 1));
      where.from_date = { [Op.between]: [start, end] };
    } else if (year) {
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      where.from_date = { [Op.between]: [start, end] };
    }

    const result = await Vacation.findAll({
      where: { doctor_id: id, ...where }
    });
    return result;
  }

  async updateVacation(data, where) {
    const newVac = await Vacation.update(data, where);
    return newVac;
  }

  async deleteOnevacation(where) {
    const data = await Vacation.destroy(where);
    return data;
  }

  async deleteVacations({ where }) {
    const data = await Vacation.destroy({ where });
    return data;
  }
}
