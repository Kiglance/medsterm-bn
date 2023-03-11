import express from 'express';
import scheduleController from '../../controllers/schedule.controller';
import {
  checkIsDoneByAdmin,
  checkLoggedIn,
  checkDoctorExist
} from '../../middlewares/user.middleware';
import {
  checkScheduleInterval,
  validateScheduleTime
} from '../../middlewares/schedule.middleware';

const routes = express.Router();

routes.post(
  '/',
  checkLoggedIn,
  checkDoctorExist,
  checkIsDoneByAdmin,
  checkScheduleInterval,
  validateScheduleTime,
  async (req, res) => {
    await new scheduleController().createSchedule(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new scheduleController().getSchedules(req, res);
});

routes.delete('/', async (req, res) => {
  await new scheduleController().deleteSchedules(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new scheduleController().deleteOneSchedule(req, res);
});

export default routes;
