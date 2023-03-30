/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Dayoff } from '../database/models';
import { startOfMonth, endOfMonth } from 'date-fns';
import { Op } from 'sequelize';

export default class DayoffService {
  async makeDayoff(data) {
    const result = await Dayoff.create(data);
    return result;
  }

  async getDayoffs() {
    const result = await Dayoff.findAll({});
    return result;
  }

  async getSingleDayoff(id) {
    return Dayoff.findByPk(id, {});
  }

  async getDayoffsByDoctorId({ id, month, year }) {
    const where = {};
    if (month && year) {
      const start = startOfMonth(new Date(year, month - 1));
      const end = endOfMonth(new Date(year, month - 1));
      where.dayoff_date = { [Op.between]: [start, end] };
    } else if (month) {
      const start = startOfMonth(new Date().setMonth(month - 1));
      const end = endOfMonth(new Date().setMonth(month - 1));
      where.dayoff_date = { [Op.between]: [start, end] };
    } else if (year) {
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      where.dayoff_date = { [Op.between]: [start, end] };
    }

    const result = await Dayoff.findAll({
      where: { doctor_id: id, ...where }
    });
    return result;
  }

  async updateDayoff(data, where) {
    const result = await Dayoff.update(data, where);
    return result;
  }

  async deleteOneDayoff(where) {
    const result = await Dayoff.destroy(where);
    return result;
  }

  async deleteDayoffs({ where }) {
    const result = await Dayoff.destroy({ where });
    return result;
  }
}
