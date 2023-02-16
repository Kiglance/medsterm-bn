import express from 'express';
import VacationController from '../../controllers/vacation.controller';
import {
  checkDoctorExist,
  checkLoggedIn,
  checkIsAdmin
} from '../../middlewares/user.middleware';

const routes = express.Router();

routes.post(
  '/',
  checkDoctorExist,
  checkLoggedIn,
  checkIsAdmin,
  async (req, res) => {
    await new VacationController().makeVacation(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new VacationController().getVacations(req, res);
});

export default routes;
