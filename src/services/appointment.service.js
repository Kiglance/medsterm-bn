/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Appointment } from '../database/models';

export default class AppointmentService {
  async makeAppointment(data) {
    const newAppointment = await Appointment.create(data);
    return newAppointment;
  }

  async getAllAppointments() {
    const appointments = await Appointment.findAll({});
    return appointments;
  }

  async getAppointment(id) {
    return Appointment.findByPk(id, {});
  }

  async updateAppointmentParts(updates, where) {
    return Appointment.update(updates, where);
  }
}
