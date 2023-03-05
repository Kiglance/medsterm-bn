import express from 'express';
import userRoutes from './api/user.route';
import appointmentRoutes from './api/appointment.route';
import vacationRoutes from './api/vacation.route';
import dayoffRoutes from './api/dayoff.route';
import medicalInfoRoutes from './api/medical_info.route';
import clientMedicalInfoRoutes from './api/client_medicalinfo.route';
import scheduleRoutes from './api/schedule.route';
import workDayRoutes from './api/work_day.route';
import docDptRoutes from './api/doctor_dept.route';
import departmentRoutes from './api/department.route';
import drugRoutes from './api/drug.route';
import recommendationRoutes from './api/recommendation.route';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/department', departmentRoutes);
routes.use('/appointments', appointmentRoutes);
routes.use('/vacations', vacationRoutes);
routes.use('/dayoffs', dayoffRoutes);
routes.use('/medical_info', medicalInfoRoutes);
routes.use('/client_medicalinfo', clientMedicalInfoRoutes);
routes.use('/schedule', scheduleRoutes);
routes.use('/work_days', workDayRoutes);
routes.use('/doc_dept', docDptRoutes);
routes.use('/drug', drugRoutes);
routes.use('/recommendation', recommendationRoutes);

export default routes;
