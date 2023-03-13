/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import {
  Doctor,
  Client,
  Vacation,
  Appointment,
  Department,
  Dayoff,
  Role,
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
        },
        {
          model: Role,
          as: 'Role'
        }
      ]
    });
    return users;
  }

  async getClients() {
    const users = await Client.findAll({
      include: [
        {
          model: Role,
          as: 'Role'
        }
      ]
    });
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
      where: { email },
      include: [
        {
          model: Role,
          as: 'Role'
        }
      ]
    });
  }

  async clientLogin(email) {
    return Client.findOne({
      where: { email },
      include: [
        {
          model: Role,
          as: 'Role'
        }
      ]
    });
  }

  async updateUserParts(updates, where) {
    return Doctor.update(updates, where);
  }

  async getUser(id) {
    return Doctor.findByPk(id, {
      include: [
        {
          model: Department,
          attributes: ['department_id', 'department_name', 'speciality_name'],
          as: 'departments'
        },
        {
          model: Vacation,
          attributes: ['vacation_id', 'from_date', 'to_date'],
          as: 'vacations'
        },
        {
          model: Dayoff,
          attributes: ['dayoff_id', 'dayoff_date'],
          as: 'dayoffs'
        },
        {
          model: Role,
          attributes: ['role_id', 'role'],
          as: 'Role'
        }
      ]
    });
  }

  async getClient(id) {
    return Client.findByPk(id, {
      include: [
        { model: Medical_Info, as: 'medical_info' },
        {
          model: Role,
          as: 'Role'
        },
        {
          model: Appointment,
          as: 'appointments'
        }
      ]
    });
  }

  async updateDoctor(data, where) {
    const newUser = await Doctor.update(data, where);
    return newUser;
  }

  async updateClient(data, where) {
    const newUser = await Client.update(data, where);
    return newUser;
  }

  async updateClientPassword(data, where) {
    const newUser = await Client.update(data, where);
    return newUser;
  }

  async updateDoctorPassword(data, where) {
    const newUser = await Doctor.update(data, where);
    return newUser;
  }

  async deleteOneDoctor(where) {
    const data = await Doctor.destroy(where);
    return data;
  }
}
