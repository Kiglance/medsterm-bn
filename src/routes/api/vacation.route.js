import express from 'express';
import VacationController from '../../controllers/vacation.controller';
import {
  checkDoctorExist,
  checkLoggedIn,
  checkIsAdmin
} from '../../middlewares/user.middleware';
import { checkVacationInterval } from '../../middlewares/vacation.middleware';

const routes = express.Router();

routes.post(
  '/',
  checkDoctorExist,
  checkLoggedIn,
  checkIsAdmin,
  checkVacationInterval,
  async (req, res) => {
    await new VacationController().makeVacation(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new VacationController().getVacations(req, res);
});

routes.get('/:id', async (req, res) => {
  await new VacationController().getSingleVacation(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new VacationController().updateVacation(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new VacationController().deleteVacation(req, res);
});

routes.delete('/', async (req, res) => {
  await new VacationController().deleteAllVacations(req, res);
});

export default routes;
