import express from 'express';
import userRoutes from './api/user.route';
import appointmentRoutes from './api/appointment.route';

const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/appointments', appointmentRoutes);

export default routes;
