import express from 'express';
import UserController from '../../controllers/user.controller';
import upload from '../../helpers/multer';
import {
  checkDoctorEmailExist,
  checkClientEmailExist,
  checkLoggedIn,
  checkVerifiedDoctor,
  checkVerifiedClient,
  isDoctor,
  isLoginClient,
  isLoginDoctor,
  checkIsAdmin
} from '../../middlewares/user.middleware';
import {
  loginUserValidation,
  registerUserValidation
} from '../../validations/user.validation';
const routes = express.Router();

routes.post(
  '/doctor/register',
  upload.single('picture'),
  // registerUserValidation,
  checkDoctorEmailExist,
  // checkIsAdmin,
  async (req, res) => {
    await new UserController().createDoctor(req, res);
  }
);

routes.post(
  '/client/register',
  upload.single('picture'),
  registerUserValidation,
  checkClientEmailExist,
  async (req, res) => {
    await new UserController().registerClient(req, res);
  }
);

routes.post(
  '/doctor/login',
  isLoginDoctor,
  loginUserValidation,
  checkVerifiedDoctor,
  async (req, res) => {
    await new UserController().doctorLogin(req, res);
  }
);

routes.post(
  '/client/login',
  isLoginClient,
  loginUserValidation,
  checkVerifiedClient,
  async (req, res) => {
    await new UserController().clientLogin(req, res);
  }
);

routes.get('/doctors', async (req, res) => {
  await new UserController().getDoctors(req, res);
});

routes.get('/clients', async (req, res) => {
  await new UserController().getClients(req, res);
});

routes.get('/verify/:token', async (req, res) => {
  await new UserController().verifyUser(req, res);
});

routes.patch(
  '/doctor/:id',
  upload.single('picture'),
  checkLoggedIn,
  isDoctor,
  checkDoctorEmailExist,
  async (req, res) => {
    await new UserController().updateDoctor(req, res);
  }
);

export default routes;
