import express from 'express';
import DoctorDeptController from '../../controllers/doctor_dept.controller';
const routes = express.Router();

routes.post('/', async (req, res) => {
  await new DoctorDeptController().createDocDept(req, res);
});

routes.get('/', async (req, res) => {
  await new DoctorDeptController().getDocDepts(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new DoctorDeptController().updateDocDpt(req, res);
});

routes.delete('/', async (req, res) => {
  await new DoctorDeptController().deleteDocDepts(req, res);
});

export default routes;
