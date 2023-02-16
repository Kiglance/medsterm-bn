import express from 'express';
import userRoutes from './api/user.route';
import appointmentRoutes from './api/appointment.route';
import vacationRoutes from './api/vacation.route';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/appointments', appointmentRoutes);
routes.use('/vacations', vacationRoutes);

export default routes;
