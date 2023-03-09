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
  checkIsAdmin,
  isLoginUser,
  checkVerifiedUser
} from '../../middlewares/user.middleware';
import { checkIfInfoExist } from '../../middlewares/info.middleware';
import {
  loginUserValidation,
  registerUserValidation
} from '../../validations/user.validation';
import { checkDepartmentExist } from '../../middlewares/department.middleware';
const routes = express.Router();

routes.post(
  '/doctor/register',
  upload.single('picture'),
  // checkDepartmentExist,
  checkDoctorEmailExist,
  // checkIsAdmin,
  async (req, res) => {
    await new UserController().createDoctor(req, res);
  }
);

routes.post(
  '/client/register',
  upload.single('picture'),
  // registerUserValidation,
  checkIfInfoExist,
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
  '/login',
  isLoginUser,
  loginUserValidation,
  checkVerifiedUser,
  async (req, res) => {
    await new UserController().userLogin(req, res);
  }
);

routes.get('/doctors', async (req, res) => {
  await new UserController().getDoctors(req, res);
});

routes.get('/doctors/:id', async (req, res) => {
  await new UserController().getDoctor(req, res);
});

routes.get('/clients', async (req, res) => {
  await new UserController().getClients(req, res);
});

routes.get('/clients/:id', async (req, res) => {
  await new UserController().getClient(req, res);
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

routes.delete(
  '/doctor/:id',
  //  checkLoggedIn, checkIsAdmins,
  async (req, res) => {
    await new UserController().deleteOneDoctor(req, res);
  }
);

export default routes;
