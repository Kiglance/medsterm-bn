import express from 'express';
import DoctorDeptController from '../../controllers/doctor_dept.controller';
import { checkDoctorExist } from '../../middlewares/user.middleware';
import { checkDepartmentExist } from '../../middlewares/department.middleware';
const routes = express.Router();

routes.post('/', checkDoctorExist, async (req, res) => {
  await new DoctorDeptController().createDocDept(req, res);
});

// routes.get('/', async (req, res) => {
//   await new DoctorDeptController().getDocDepts(req, res);
// });

// routes.get('/:id', async (req, res) => {
//   await new DoctorDeptController().getDocDept(req, res);
// });

// routes.patch('/:id', async (req, res) => {
//   await new DoctorDeptController().updateDocDpt(req, res);
// });

// routes.delete('/:id', async (req, res) => {
//   await new DoctorDeptController().removeDocFromDept(req, res);
// });

// routes.delete('/', async (req, res) => {
//   await new DoctorDeptController().deleteDocDepts(req, res);
// });

export default routes;
