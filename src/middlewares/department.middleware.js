import { Department } from '../database/models';

export const checkDepartmentExist = async (req, res, next) => {
  try {
    const { department_id } = req.body;
    const department = await Department.findByPk(department_id, {});
    if (!department) {
      return res.status(400).json({
        message: `Department with id "${department_id}" doesn't exist`
      });
    }
    req.department = department;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};
