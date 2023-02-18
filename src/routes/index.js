import express from 'express';
import userRoutes from './api/user.route';
import appointmentRoutes from './api/appointment.route';
import vacationRoutes from './api/vacation.route';
import medicalInfoRoutes from './api/medical_info.route';
import clientMedicalInfoRoutes from './api/client_medicalinfo.route';
import scheduleRoutes from './api/schedule.route';
import workDayRoutes from './api/work_day.route';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/appointments', appointmentRoutes);
routes.use('/vacations', vacationRoutes);
routes.use('/medical_info', medicalInfoRoutes);
routes.use('/client_medicalinfo', clientMedicalInfoRoutes);
routes.use('/schedule', scheduleRoutes);
routes.use('/work_days', workDayRoutes);

export default routes;
