/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Vacation } from '../database/models';

export default class VacationService {
  async makeVacation(data) {
    const newVacation = await Vacation.create(data);
    return newVacation;
  }

  async getVacations() {
    const vacations = await Vacation.findAll({});
    return vacations;
  }
}
