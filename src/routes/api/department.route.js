import express from 'express';
import DepartmentController from '../../controllers/department.controller';
import { checkLoggedIn, checkIsAdmin } from '../../middlewares/user.middleware';

const routes = express.Router();

routes.post('/', checkLoggedIn, checkIsAdmin, async (req, res) => {
  await new DepartmentController().makeDepartment(req, res);
});

routes.get('/', async (req, res) => {
  await new DepartmentController().getDepartments(req, res);
});

routes.get('/:id', async (req, res) => {
  await new DepartmentController().getSingleDepartment(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new DepartmentController().updateDepartment(req, res);
});

routes.delete('/:id', async (req, res) => {
  await new DepartmentController().deleteDepartment(req, res);
});

routes.delete('/', async (req, res) => {
  await new DepartmentController().deleteAllDepartments(req, res);
});

export default routes;
