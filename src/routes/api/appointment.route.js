import express from 'express';
import AppointmentController from '../../controllers/appointment.controller';
import {
  checkLoggedIn,
  checkDoctorExist,
  checkClientExist,
  checkLoginDoctorExist
} from '../../middlewares/user.middleware';
import { checkAppointmentExist } from '../../middlewares/appointment.middleware';

const routes = express.Router();

routes.post(
  '/',
  checkLoggedIn,
  checkDoctorExist,
  checkClientExist,
  async (req, res) => {
    await new AppointmentController().makeAppointment(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new AppointmentController().getAppointments(req, res);
});

routes.get(
  '/approve/:id',
  checkAppointmentExist,
  checkLoggedIn,
  checkLoginDoctorExist,
  async (req, res) => {
    await new AppointmentController().checkAppointment(req, res);
  }
);

export default routes;
