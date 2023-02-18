import ScheduleService from '../services/schedule.service';
import WorkDayService from '../services/work_day.service';
import UserService from '../services/user.service';
import { decodeToken, verifyToken } from '../helpers/user.helper';
import checkToken from '../helpers/checkToken';
import { Schedule, Work_Day, Doctor } from '../database/models';

export default class scheduleController {
  constructor() {
    this.scheduleService = new ScheduleService();
    this.workDayService = new WorkDayService();
    this.userService = new UserService();
  }

  async createSchedule(req, res) {
    try {
      const { start_date, end_date, days } = req.body;
      const token = checkToken(req);
      const decoded = decodeToken(token);

      const doctor = await this.userService.getUser(decoded.id);
      const dayee = days.split(', ');

      function getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());

        const dates = [];

        while (date <= endDate) {
          dates.push(new Date(date).toDateString());
          date.setDate(date.getDate() + 1);
        }

        return dates;
      }
      const d1 = new Date(start_date);
      const d2 = new Date(end_date);

      const newSchedule = await Schedule.create({
        doctor_id: decoded.id,
        start_date,
        end_date
      }).catch((error) => {
        console.log({
          error: error,
          number: 1
        });
        return res.status(500).json({
          message: 'Error one occured!!!',
          error: error.message
        });
      });

      function makeArr(arr) {
        var value = [];

        for (let i = 0; i < arr.length; i++) {
          var obj = {};
          obj['day'] = arr[i].split(' ')[0];
          obj['date'] = new Date(
            new Date(arr[i]).setDate(new Date(arr[i]).getDate() + 1)
          ).toISOString();
          obj['schedule_id'] = newSchedule.schedule_id;

          if (dayee.includes(arr[i].split(' ')[0])) {
            obj['status'] = 'active';
          }

          value.push(obj);
        }

        return value;
      }

      const newWorkDay = await Work_Day.bulkCreate(
        makeArr(getDatesInRange(d1, d2))
      )
        .then((data) => {
          return res.status(200).send({
            message: 'work day and schedule created successfullly.'
          });
        })
        .catch((error) => {
          return res.status(500).json({
            message: 'Error occured while creating schedule',
            error: error.message
          });
        });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a Schedule.',
        error: error.message
      });
    }
  }

  async getSchedules(req, res) {
    try {
      const schedules = await this.scheduleService.getSchedules();
      return res.status(200).json({
        message: 'Retrieved all schedules successfully',
        data: schedules
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching schedules',
        error: error.message
      });
    }
  }

  async deleteSchedules(req, res) {
    try {
      const schedules = await this.scheduleService.deleteSchedules({
        where: {}
      });
      return res.status(200).json({
        message: 'Deleted all schedules successfully'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting schedules',
        error: error.message
      });
    }
  }

  async deleteOneSchedule(req, res) {
    try {
      const schedules = await this.scheduleService.deleteOneSchedule(req);
      const days = await this.workDayService.deleteWorkDays(req);
      return res.status(200).json({
        message: 'Deleted one schedule successfully'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting schedule',
        error: error.message
      });
    }
  }
}
