import express from 'express';
import DayoffController from '../../controllers/dayoff.controller';
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
    await new DayoffController().makeDayoff(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new DayoffController().getDayoffs(req, res);
});

routes.get('/:id', async (req, res) => {
  await new DayoffController().getSingleDayoff(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new DayoffController().updateDayoff(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new DayoffController().deleteDayoff(req, res);
});

routes.delete('/', async (req, res) => {
  await new DayoffController().deleteAllDayoffs(req, res);
});

export default routes;
