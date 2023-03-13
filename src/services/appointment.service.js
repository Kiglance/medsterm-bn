/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { startOfMonth, endOfMonth } from 'date-fns';
import { Appointment, Work_Day, Schedule } from '../database/models';
import { Op } from 'sequelize';

export default class AppointmentService {
  async makeAppointment(data) {
    const result = await Appointment.create(data);
    return result;
  }

  async getAllAppointments({ month, year }) {
    const workDayWhere = {};
    if (month && year) {
      const start = startOfMonth(new Date(year, month - 1));
      const end = endOfMonth(new Date(year, month - 1));
      workDayWhere.date = { [Op.between]: [start, end] };
    } else if (month) {
      const start = startOfMonth(new Date().setMonth(month - 1));
      const end = endOfMonth(new Date().setMonth(month - 1));
      workDayWhere.date = { [Op.between]: [start, end] };
    } else if (year) {
      const start = new Date(year, 0, 1);
      const end = new Date(year, 11, 31);
      workDayWhere.date = { [Op.between]: [start, end] };
    }

    console.log(
      year,
      month,
      workDayWhere,
      'year, month ......................'
    );

    const result = await Appointment.findAll({
      include: [
        {
          model: Schedule,
          as: 'schedule',
          attributes: ['appointment_duration'],
          required: true
        },
        {
          model: Work_Day,
          as: 'work_day',
          where: workDayWhere,
          attributes: ['day', 'date', 'from', 'to'],
          required: true
        }
      ]
    });
    return result;
  }

  async getAppointmentsByDoctor(where) {
    const result = await Appointment.findAll(where);
    return result;
  }

  async getAppointmentsByClient(where) {
    const result = await Appointment.findAll(where);
    return result;
  }

  async getAppointment(id) {
    return Appointment.findByPk(id, {});
  }

  async updateAppointmentParts(updates, where) {
    return Appointment.update(updates, where);
  }
}
