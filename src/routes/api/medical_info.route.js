import express from 'express';
import medicalInfoController from '../../controllers/medical_info.controller';
import { checkLoggedIn, checkIsAdmin } from '../../middlewares/user.middleware';

const routes = express.Router();

routes.post('/', checkLoggedIn, checkIsAdmin, async (req, res) => {
  await new medicalInfoController().createMedicalInfo(req, res);
});

routes.get('/', async (req, res) => {
  await new medicalInfoController().getAllMedicalInfo(req, res);
});

export default routes;
