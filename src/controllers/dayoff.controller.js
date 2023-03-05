import DayoffService from '../services/dayoff.service';
import UserService from '../services/user.service';

export default class DayoffController {
  constructor() {
    this.dayoffService = new DayoffService();
    this.userService = new UserService();
  }

  async makeDayoff(req, res) {
    try {
      const { doctor_id, dayoff_date } = req.body;

      await this.dayoffService.makeDayoff(
        {
          doctor_id,
          dayoff_date
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Dayoff creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a Dayoff.',
        error: error.message
      });
    }
  }

  async getDayoffs(req, res) {
    try {
      const dayoffs = await this.dayoffService.getDayoffs();
      return res.status(200).json({
        message: 'Retrieved all dayoffs successfully',
        data: dayoffs
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching dayoffs',
        error: error.message
      });
    }
  }

  async getSingleDayoff(req, res) {
    try {
      const { id } = req.params;
      const result = await this.dayoffService.getSingleDayoff({
        where: { dayoff_id: id }
      });
      return res.status(200).json({
        message: 'Retrieved one dayoff successfully',
        data: result
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching dayoff',
        error: error.message
      });
    }
  }

  async updateDayoff(req, res) {
    try {
      const { doctor_id, dayoff_date } = req.body;
      const { id } = req.params;

      await this.dayoffService.updateDayoff(req.body, {
        doctor_id,
        dayoff_date,
        where: {
          dayoff_id: id
        }
      });

      return res.status(201).json({
        status: 200,
        message: 'Dayoff update successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while updating dayoff.',
        error: error.message
      });
    }
  }

  async deleteDayoff(req, res) {
    try {
      const { id } = req.params;

      await this.dayoffService.deleteOneDayoff({
        where: {
          dayoff_id: id
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'Dayoff deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting dayoff.',
        error: error.message
      });
    }
  }

  async deleteAllDayoffs(req, res) {
    try {
      await this.dayoffService.deleteDayoffs({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'Dayoffs deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting dayoffs.',
        error: error.message
      });
    }
  }
}
