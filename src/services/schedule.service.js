/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Schedule, Work_Day } from '../database/models';

export default class ScheduleService {
  async createSchedule(data) {
    const newSchedule = await Schedule.create(data);
    return newSchedule;
  }

  async createWorkDay(data) {
    const wokDay = await Work_Day.bulkCreate(data);
    return wokDay;
  }

  async getSchedules() {
    const infos = await Schedule.findAll({
      // include: [
      //   {
      //     model: Work_Day,
      //     as: 'work_days',
      //     order: [['date', 'ASC']]
      //   }
      // ]
    });
    return infos;
  }

  async deleteSchedules({ where }) {
    const infos = await Schedule.destroy({ where });
    return infos;
  }

  async deleteOneSchedule(req) {
    const { id } = req.params;
    const infos = await Schedule.destroy({ where: { schedule_id: id } });
    return infos;
  }
}
