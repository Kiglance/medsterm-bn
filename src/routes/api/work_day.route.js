import express from 'express';
import WorkDayController from '../../controllers/work_day.controller';
import {
  checkDoctorExistParam,
  checkDoctorExist,
  checkScheduleExistParam
} from '../../middlewares/user.middleware';
import { checkScheduleExist } from '../../middlewares/schedule.middleware';
const routes = express.Router();

routes.post('/', checkDoctorExist, checkScheduleExist, async (req, res) => {
  await new WorkDayController().createWorkDay(req, res);
});

routes.get('/', async (req, res) => {
  await new WorkDayController().getWorkDays(req, res);
});

routes.get('/doctor/:id', checkDoctorExistParam, async (req, res) => {
  await new WorkDayController().getWorkDaysByDoctorId(req, res);
});

routes.get('/schedule/:id', checkScheduleExistParam, async (req, res) => {
  await new WorkDayController().getWorkDaysByScheduleId(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new WorkDayController().updateWorkDay(req, res);
});

routes.delete('/', async (req, res) => {
  await new WorkDayController().deleteDays(req, res);
});

export default routes;
