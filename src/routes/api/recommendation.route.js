import express from 'express';
import { checkAppointmentExist } from '../../middlewares/appointment.middleware';
import RecommandationController from '../../controllers/recommandation.controller';
import {
  checkLoggedIn,
  checkLoginDoctorExist
} from '../../middlewares/user.middleware';

const routes = express.Router();

routes.post(
  '/:id',
  checkLoggedIn,
  checkLoginDoctorExist,
  checkAppointmentExist,
  async (req, res) => {
    await new RecommandationController().makeRecommandation(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new RecommandationController().getRecommandations(req, res);
});

routes.get('/:id', async (req, res) => {
  await new RecommandationController().getSingleRecommandation(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new RecommandationController().updateRecommandation(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new RecommandationController().deleteRecommandation(req, res);
});

routes.delete('/', async (req, res) => {
  await new RecommandationController().deleteAllRecommandations(req, res);
});

export default routes;
