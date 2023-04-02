import express from 'express';
import { checkAppointmentExist } from '../../middlewares/appointment.middleware';
import DrugController from '../../controllers/drug.controller';
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
    await new DrugController().makeDrug(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new DrugController().getDrugs(req, res);
});

// routes.get('/:id', async (req, res) => {
//   await new DrugController().getSingleDrug(req, res);
// });

routes.patch('/:id', async (req, res) => {
  await new DrugController().updateDrug(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new DrugController().deleteDrug(req, res);
});

// routes.delete('/', async (req, res) => {
//   await new DrugController().deleteAllDrugs(req, res);
// });

export default routes;
