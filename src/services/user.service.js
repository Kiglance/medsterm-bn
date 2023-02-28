/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { name } from 'ejs';
import {
  Doctor,
  Client,
  Vacation,
  Appointment,
  Department,
  Medical_Info
} from '../database/models';

export default class UserService {
  async getDoctors() {
    const users = await Doctor.findAll({
      where: { role_id: 2 },
      include: [
        {
          model: Vacation,
          as: 'vacations'
        },
        {
          model: Department,
          as: 'departments'
        }
      ]
    });
    return users;
  }

  async getClients() {
    const users = await Client.findAll({});
    return users;
  }

  async createDoctor(data) {
    const newUser = await Doctor.create(data);
    return newUser;
  }

  async createUser(data) {
    const newUser = await Client.create(data);
    return newUser;
  }

  async doctorLogin(email) {
    return Doctor.findOne({
      where: { email }
    });
  }

  async clientLogin(email) {
    return Client.findOne({
      where: { email }
    });
  }

  async updateUserParts(updates, where) {
    return Doctor.update(updates, where);
  }

  async getUser(id) {
    return Doctor.findByPk(id, {});
  }

  async getClient(id) {
    return Client.findByPk(id, {
      include: [{ model: Medical_Info, as: 'medical_info' }]
    });
  }

  async updateDoctor(data, where) {
    const newUser = await Doctor.update(data, where);
    return newUser;
  }
}
