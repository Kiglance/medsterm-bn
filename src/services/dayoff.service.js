/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Dayoff } from '../database/models';

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
