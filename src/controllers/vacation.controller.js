import VacationService from '../services/vacation.service';
import UserService from '../services/user.service';

export default class vacationController {
  constructor() {
    this.vacationService = new VacationService();
    this.userService = new UserService();
  }

  async makeVacation(req, res) {
    try {
      const { doctor_id, from_date, to_date } = req.body;

      const newVacation = await this.vacationService.makeVacation(
        {
          doctor_id,
          from_date,
          to_date
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Vacation creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a vacation.',
        error: error.message
      });
    }
  }

  async getVacations(req, res) {
    try {
      const vacations = await this.vacationService.getVacations();
      return res.status(200).json({
        message: 'Retrieved all vacations successfully',
        data: vacations
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching vacations',
        error: error.message
      });
    }
  }

  async getSingleVacation(req, res) {
    try {
      const { id } = req.params;
      const vacation = await this.vacationService.getSingleVacation(id);
      return res.status(200).json({
        message: 'Retrieved one vacation successfully',
        data: vacation
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching vacation',
        error: error.message
      });
    }
  }

  async updateVacation(req, res) {
    try {
      const { doctor_id, from_date, to_date } = req.body;
      const { id } = req.params;

      await this.vacationService.updateVacation(req.body, {
        doctor_id,
        from_date,
        to_date,
        where: {
          vacation_id: id
        }
      });

      return res.status(201).json({
        status: 200,
        message: 'Vacation update successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while updating vacation.',
        error: error.message
      });
    }
  }

  async deleteVacation(req, res) {
    try {
      const { id } = req.params;

      await this.vacationService.deleteOnevacation({
        where: {
          vacation_id: id
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'Vacation deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting vacation.',
        error: error.message
      });
    }
  }

  async deleteAllVacations(req, res) {
    try {
      await this.vacationService.deleteVacations({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'Vacations deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting vacations.',
        error: error.message
      });
    }
  }
}
