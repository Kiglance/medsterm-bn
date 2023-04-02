import express from 'express';
import DepartmentController from '../../controllers/department.controller';
import { checkLoggedIn, checkIsAdmin } from '../../middlewares/user.middleware';
import upload from '../../helpers/multer';

const routes = express.Router();

routes.post(
  '/',
  upload.single('picture'),
  checkLoggedIn,
  checkIsAdmin,
  async (req, res) => {
    await new DepartmentController().makeDepartment(req, res);
  }
);

routes.get('/', async (req, res) => {
  await new DepartmentController().getDepartments(req, res);
});

routes.get('/:id', async (req, res) => {
  await new DepartmentController().getSingleDepartment(req, res);
});

// routes.patch('/:id', upload.single('picture'), async (req, res) => {
//   await new DepartmentController().updateDepartment(req, res);
// });

// routes.delete('/:id', async (req, res) => {
//   await new DepartmentController().deleteDepartment(req, res);
// });

// routes.delete('/', async (req, res) => {
//   await new DepartmentController().deleteAllDepartments(req, res);
// });

export default routes;
