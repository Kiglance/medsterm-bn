import express from 'express';
import scheduleController from '../../controllers/schedule.controller';
import {
  checkIsDoneByAdmin,
  checkLoggedIn,
  checkDoctorExist,
  checkDoctorExistParam
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

routes.get(
  '/doctor/:id',
  // checkLoggedIn,
  checkDoctorExistParam,
  async (req, res) => {
    await new scheduleController().getSchedulesByDoctorId(req, res);
  }
);

routes.get('/:id', async (req, res) => {
  // id = Month number
  await new scheduleController().getSchedulesInMonth(req, res);
});

routes.delete('/', async (req, res) => {
  await new scheduleController().deleteSchedules(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new scheduleController().deleteOneSchedule(req, res);
});

export default routes;
