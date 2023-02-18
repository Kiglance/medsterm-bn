import MedicalInfoService from '../services/medical_info.service';
import UserService from '../services/user.service';

export default class medicalInfoController {
  constructor() {
    this.medicalInfoService = new MedicalInfoService();
    this.userService = new UserService();
  }

  async createMedicalInfo(req, res) {
    try {
      const { info_name, info_description } = req.body;

      const newInfo = await this.medicalInfoService.createMedicalInfo(
        {
          info_name,
          info_description
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Medical info creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while creating a medical info.',
        error: error.message
      });
    }
  }

  async getAllMedicalInfo(req, res) {
    try {
      const infos = await this.medicalInfoService.getAllMedicalInfo();
      return res.status(200).json({
        message: 'Retrieved all infos successfully',
        data: infos
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching infos',
        error: error.message
      });
    }
  }
}
