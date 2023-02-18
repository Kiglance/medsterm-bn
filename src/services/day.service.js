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
    const newDay = await Day.create(data);
    return newDay;
  }

  async getDays() {
    const days = await Day.findAll({});
    return days;
  }

  async getOneDay({ where }) {
    const day = await Day.findOne({ where });
    return day;
  }

  async deleteDays({ where }) {
    const infos = await Day.destroy({ where });
    return infos;
  }
}
