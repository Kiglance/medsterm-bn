import DepartmentService from '../services/department.service';
import UserService from '../services/user.service';
import { imageUpload } from '../helpers/fileUpload';

export default class DepartmentController {
  constructor() {
    this.dptService = new DepartmentService();
    this.userService = new UserService();
  }

  async makeDepartment(req, res) {
    try {
      const { department_name, speciality_name } = req.body;

      if (req.file) {
        req.body.picture = await imageUpload(req);
      } else {
        req.body.picture =
          'https://www.pngkit.com/png/detail/135-1357744_medical-report-healthcare-description-policy-graph-medical-report.png';
      }

      await this.dptService.makeDepartment(
        {
          department_name,
          speciality_name,
          picture: req.body.picture
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Department creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a Department.',
        error: error.message
      });
    }
  }

  async getDepartments(req, res) {
    try {
      const Departments = await this.dptService.getDepartments();
      return res.status(200).json({
        message: 'Retrieved all Departments successfully',
        data: Departments
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching Departments',
        error: error.message
      });
    }
  }

  async getSingleDepartment(req, res) {
    try {
      const { id } = req.params;
      const result = await this.dptService.getSingleDepartment({
        where: { department_id: id }
      });
      return res.status(200).json({
        message: 'Retrieved one Department successfully',
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching Department',
        error: error.message
      });
    }
  }

  async updateDepartment(req, res) {
    try {
      const { department_name, speciality_name } = req.body;
      const { id } = req.params;

      await this.dptService.updateDepartment(req.body, {
        department_name,
        speciality_name,
        where: {
          department_id: id
        }
      });

      return res.status(201).json({
        status: 200,
        message: 'Department update successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while updating Department.',
        error: error.message
      });
    }
  }

  async deleteDepartment(req, res) {
    try {
      const { id } = req.params;

      await this.dptService.deleteOneDepartment({
        where: {
          department_id: id
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'Department deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting Department.',
        error: error.message
      });
    }
  }

  async deleteAllDepartments(req, res) {
    try {
      await this.dptService.deleteDepartments({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'Departments deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting Departments.',
        error: error.message
      });
    }
  }
}
