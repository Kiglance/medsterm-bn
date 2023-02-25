/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Day } from '../database/models';

export default class DayService {
  async createDay(data) {
    const result = await Day.create(data);
    return result;
  }

  async getDays() {
    const result = await Day.findAll({});
    return result;
  }

  async getOneDay({ where }) {
    const result = await Day.findOne({ where });
    return result;
  }

  async deleteDays({ where }) {
    const result = await Day.destroy({ where });
    return result;
  }
}
