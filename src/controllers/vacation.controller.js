import VacationService from '../services/vacation.service';
import UserService from '../services/user.service';
import {
  hashPassword,
  comparePassword,
  decodeToken,
  generateToken
} from '../helpers/user.helper';
import sendEmail from '../helpers/nodemailer';
import { verifyToken } from '../helpers/user.helper';
import checkToken from '../helpers/checkToken';
import { Doctor, Client, Vacation } from '../database/models';
import { date } from 'joi';

export default class userController {
  constructor() {
    this.vacationService = new VacationService();
    this.userService = new UserService();
  }

  async makeVacation(req, res) {
    try {
      const { doctor_id, from_date, to_date } = req.body;

      const newVacation = await this.vacationService.makeVacation(
        {
          doctor_id,
          from_date,
          to_date
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Vacation creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making an appointment.',
        error: error.message
      });
    }
  }

  async getVacations(req, res) {
    try {
      const vacations = await this.vacationService.getVacations();
      return res.status(200).json({
        message: 'Retrieved all vacations successfully',
        data: vacations
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching vacations',
        error: error.message
      });
    }
  }
}
