import express from 'express';
import ClientMedicalInfoController from '../../controllers/client_medicalinfo.controller';
import { checkLoggedIn, checkIsAdmin } from '../../middlewares/user.middleware';

const routes = express.Router();

routes.post('/', async (req, res) => {
  await new ClientMedicalInfoController().assignInfo(req, res);
});

routes.get('/', async (req, res) => {
  await new ClientMedicalInfoController().getAllMedicalInfo(req, res);
});

export default routes;
