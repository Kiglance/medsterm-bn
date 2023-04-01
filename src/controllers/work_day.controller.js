import WorkDayService from '../services/work_day.service';
import UserService from '../services/user.service';
import { Work_Day } from '../database/models';

export default class WorkDayController {
  constructor() {
    this.dayService = new WorkDayService();
    this.userService = new UserService();
  }

  async createWorkDay(req, res) {
    try {
      const { day, date, schedule_id, doctor_id } = req.body;

      const newDay = await this.dayService.createWorkDay(
        {
          schedule_id,
          doctor_id,
          day,
          date,
          status: 'active'
        },
        res
      );

      return res.status(201).json({
        status: 201,
        message: 'Work day creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a work day.',
        error: error.message
      });
    }
  }

  async getWorkDays(req, res) {
    try {
      const days = await new WorkDayService().getWorkDays();
      return res.status(200).json({
        message: 'Retrieved all workdays successfully',
        data: days
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching days',
        error: error.message
      });
    }
  }

  async getWorkDaysByDoctorId(req, res) {
    try {
      const { id } = req.params;
      const { month, year } = req.query;

      const days = await new WorkDayService().getWorkDaysByDoctorId({
        id,
        month,
        year
      });
      return res.status(200).json({
        message: `Retrieved all workdays of doctor ${req.user.first_name}  ${req.user.last_name} successfully`,
        data: days
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching days',
        error: error.message
      });
    }
  }

  async getWorkDaysByScheduleId(req, res) {
    try {
      const { id } = req.params;
      const days = await new WorkDayService().getWorkDaysByScheduleId({
        where: { schedule_id: id }
      });
      return res.status(200).json({
        message: 'Retrieved all workdays of scchedule successfully',
        data: days
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching days',
        error: error.message
      });
    }
  }

  async updateWorkDay(req, res) {
    try {
      const { status, from, to } = req.body;

      const { id } = req.params;

      const newDay = await this.dayService.updateWorkDay(req.body, {
        status,
        from,
        to,
        where: {
          _id: id
        }
      });
      return res.status(201).json({
        status: 201,
        message: 'Work day has been updated successfully.',
        data: newDay
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to update work day.',
        error: error.message
      });
    }
  }

  async updateWorkDaysByScheduleId(req, res) {
    try {
      const { from, to } = req.body;

      const { id } = req.params;

      const workDays = await Work_Day.findAll({
        where: { schedule_id: id }
      });

      const workDaysArray = workDays?.map((value) => {
        return {
          _id: value._id,
          from,
          to
        };
      });

      console.log({ workDaysArray });

      const newDay = await Work_Day.bulkCreate(workDaysArray, {
        updateOnDuplicate: ['from', 'to']
      });
      return res.status(201).json({
        status: 201,
        message: 'Work day has been updated successfully.',
        data: newDay
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to update work day.',
        error: error.message
      });
    }
  }

  async deleteDays(req, res) {
    try {
      const days = await this.dayService.deleteDays({
        where: {}
      });
      return res.status(200).json({
        message: 'Deleted all days successfully'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting days',
        error: error.message
      });
    }
  }
}
