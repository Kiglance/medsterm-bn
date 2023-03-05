/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Work_Day } from '../database/models';

export default class WorkDayService {
  async createWorkDay(data) {
    const result = await Work_Day.create(data);
    return result;
  }

  async createWorkDayArr(data) {
    const result = await Work_Day.bulkCreate(data);
    return result;
  }

  async getWorkDays() {
    const result = await Work_Day.findAll({});
    return result;
  }

  async deleteWorkDays(req) {
    const { id } = req.params;
    const result = await Work_Day.destroy({ where: { schedule_id: id } });
    return result;
  }

  async updateWorkDay(data, where) {
    const result = await Work_Day.update(data, where);
    return result;
  }

  async deleteDays({ where }) {
    const result = await Work_Day.destroy({ where });
    return result;
  }
}
