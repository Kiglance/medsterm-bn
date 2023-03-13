/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Work_Day, Schedule, Appointment, Doctor } from '../database/models';
import { startOfMonth, endOfMonth } from 'date-fns';
import { Op } from 'sequelize';

export default class WorkDayService {
  async createWorkDay(data) {
    const result = await Work_Day.create(data);
    return result;
  }

  async createWorkDayArr(data) {
    const result = await Work_Day.bulkCreate(data);
    return result;
  }

  async getWorkDay(id) {
    return Work_Day.findByPk(id, {});
  }

  async getWorkDays() {
    const result = await Work_Day.findAll({
      // include: [
      //   {
      //     model: Schedule,
      //     attributes: ['schedule_id'],
      //     as: 'schedule',
      //     include: [
      //       {
      //         model: Doctor,
      //         attributes: ['doctor_id'],
      //         as: 'doctor'
      //       }
      //     ]
      //   }
      // ]
    });
    return result;
  }

  async getWorkDaysByDoctorId({ id, month, year }) {
    const where = {};
    if (month && year) {
      const start = startOfMonth(new Date(year, month - 1));
      const end = endOfMonth(new Date(year, month - 1));
      where.date = { [Op.between]: [start, end] };
    } else if (month) {
      const start = startOfMonth(new Date().setMonth(month - 1));
      const end = endOfMonth(new Date().setMonth(month - 1));
      where.date = { [Op.between]: [start, end] };
    } else if (year) {
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      where.date = { [Op.between]: [start, end] };
    }

    const result = await Work_Day.findAll({
      where: { doctor_id: id, ...where },
      include: [
        {
          model: Schedule,
          as: 'schedule',
          attributes: ['appointment_duration'],
          required: true,
          include: [
            {
              model: Appointment,
              as: 'appointments',
              attributes: ['is_canceled'],
              required: true,
              include: [
                {
                  model: Work_Day,
                  as: 'work_day',
                  attributes: ['from', 'to'],
                  where: {
                    _id: {
                      [Op.col]: 'Work_Day._id'
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    });
    return result;
  }

  async getWorkDaysByScheduleId(where) {
    const result = await Work_Day.findAll(where);
    return result;
  }

  async deleteWorkDays(req) {
    const { id } = req.params;
    const result = await Work_Day.destroy({
      where: { schedule_id: id }
    });
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
