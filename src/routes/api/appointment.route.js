import express from 'express';
import AppointmentController from '../../controllers/appointment.controller';
import {
  checkLoggedIn,
  checkDoctorExist,
  checkClientExist,
  checkLoginDoctorExist
} from '../../middlewares/user.middleware';
import {
  checkAppointmentExist,
  checkAppointmentIsTaken,
  checkDoctorScheduleDayExist,
  checkDoctorDepartmentExist
} from '../../middlewares/appointment.middleware';
import { appointmentValidation } from '../../validations/appointment.validation';

const routes = express.Router();

routes.post(
  '/',
  checkLoggedIn,
  checkDoctorExist,
  checkClientExist,
  checkAppointmentIsTaken,
  checkDoctorScheduleDayExist,
  appointmentValidation,
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

routes.get(
  '/cancel/:id',
  checkAppointmentExist,
  checkLoggedIn,
  checkClientExist,
  async (req, res) => {
    await new AppointmentController().cancelAppointment(req, res);
  }
);

export default routes;
