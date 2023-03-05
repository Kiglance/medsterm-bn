import DrugService from '../services/drug.service';
import UserService from '../services/user.service';

export default class DrugController {
  constructor() {
    this.drugService = new DrugService();
    this.userService = new UserService();
  }

  async makeDrug(req, res) {
    try {
      const { appointment_id } = req.params;
      const {
        drug_name,
        dosage,
        frequency_per_week,
        frequency_per_day,
        duration,
        start_date,
        end_date,
        explanation
      } = req.body;

      const newDrug = await this.drugService.makeDrug(
        {
          appointment_id,
          drug_name,
          dosage,
          frequency_per_week,
          frequency_per_day,
          duration,
          start_date,
          end_date,
          explanation
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Drug creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a Drug.',
        error: error.message
      });
    }
  }

  async getDrugs(req, res) {
    try {
      const Drugs = await this.drugService.getDrugs();
      return res.status(200).json({
        message: 'Retrieved all Drugs successfully',
        data: Drugs
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching Drugs',
        error: error.message
      });
    }
  }

  async getSingleDrug(req, res) {
    try {
      const Drug = await this.drugService.getSingleDrug();
      return res.status(200).json({
        message: 'Retrieved one Drug successfully',
        data: Drug
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching Drug',
        error: error.message
      });
    }
  }

  async updateDrug(req, res) {
    try {
      const {
        drug_name,
        dosage,
        frequency_per_week,
        frequency_per_day,
        duration,
        start_date,
        end_date,
        explanation
      } = req.body;
      const { id } = req.params;

      await this.drugService.updateDrug(req.body, {
        drug_name,
        dosage,
        frequency_per_week,
        frequency_per_day,
        duration,
        start_date,
        end_date,
        explanation,
        where: {
          drug_id: id
        }
      });

      return res.status(201).json({
        status: 200,
        message: 'Drug update successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while updating Drug.',
        error: error.message
      });
    }
  }

  async deleteDrug(req, res) {
    try {
      const { id } = req.params;

      await this.drugService.deleteOneDrug({
        where: {
          drug_id: id
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'Drug deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting Drug.',
        error: error.message
      });
    }
  }

  async deleteAllDrugs(req, res) {
    try {
      await this.drugService.deleteDrugs({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'Drugs deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting Drugs.',
        error: error.message
      });
    }
  }
}
