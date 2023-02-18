/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Work_Day } from '../database/models';

export default class WorkDayService {
  async getWorkDays() {
    const infos = await Work_Day.findAll({});
    return infos;
  }

  async deleteWorkDays(req) {
    const { id } = req.params;
    const infos = await Work_Day.destroy({ where: { schedule_id: id } });
    return infos;
  }

  async updateWorkDay(data, where) {
    const newDay = await Work_Day.update(data, where);
    return newDay;
  }

  async deleteDays({ where }) {
    const infos = await Work_Day.destroy({ where });
    return infos;
  }
}
