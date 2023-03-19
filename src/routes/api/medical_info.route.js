import express from 'express';
import MedicalInfoController from '../../controllers/medical_info.controller';
import { checkLoggedIn, checkIsAdmin } from '../../middlewares/user.middleware';

const routes = express.Router();

routes.post('/', checkLoggedIn, checkIsAdmin, async (req, res) => {
  await new MedicalInfoController().createMedicalInfo(req, res);
});

routes.get('/', async (req, res) => {
  await new MedicalInfoController().getAllMedicalInfo(req, res);
});
routes.get('/client/:id', async (req, res) => {
  await new MedicalInfoController().getAllMedicalInfoByClient(req, res);
});

routes.get('/:id', async (req, res) => {
  await new MedicalInfoController().getSingleMedicalInfo(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new MedicalInfoController().updateMedicalInfo(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new MedicalInfoController().deleteMedicalInfo(req, res);
});

routes.delete('/', async (req, res) => {
  await new MedicalInfoController().deleteAllMedicalInfos(req, res);
});

export default routes;
