import MedicalInfoService from '../services/medical_info.service';
import UserService from '../services/user.service';

export default class MedicalInfoController {
  constructor() {
    this.medicalInfoService = new MedicalInfoService();
    this.userService = new UserService();
  }

  async createMedicalInfo(req, res) {
    try {
      const { info_name, info_description } = req.body;

      await this.medicalInfoService.createMedicalInfo(
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

  async getAllMedicalInfoByClient(req, res) {
    try {
      const { id } = req.params;
      const infos = await this.medicalInfoService.getAllMedicalInfoByClient({
        id
      });
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

  async getSingleMedicalInfo(req, res) {
    try {
      const { id } = req.params;
      const result = await this.medicalInfoService.getSingleMedicalInfo(id);
      return res.status(200).json({
        message: 'Retrieved one info successfully',
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching MedicalInfo',
        error: error.message
      });
    }
  }

  async updateMedicalInfo(req, res) {
    try {
      const { info_name, info_description } = req.body;
      const { id } = req.params;

      await this.medicalInfoService.updateMedicalInfo(req.body, {
        info_name,
        info_description,
        where: {
          info_id: id
        }
      });

      return res.status(201).json({
        status: 200,
        message: 'MedicalInfo update successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while updating MedicalInfo.',
        error: error.message
      });
    }
  }

  async deleteMedicalInfo(req, res) {
    try {
      const { id } = req.params;

      await this.medicalInfoService.deleteOneMedicalInfo({
        where: {
          info_id: id
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'MedicalInfo deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting MedicalInfo.',
        error: error.message
      });
    }
  }

  async deleteAllMedicalInfos(req, res) {
    try {
      await this.medicalInfoService.deleteMedicalInfos({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'MedicalInfos deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting MedicalInfos.',
        error: error.message
      });
    }
  }
}
