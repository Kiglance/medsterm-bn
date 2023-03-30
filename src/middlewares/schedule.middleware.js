import 'dotenv/config';
import { Op } from 'sequelize';
import { Schedule } from '../database/models';
import ScheduleService from '../services/schedule.service';
import { compareDates, checkEquality } from '../utils/compareDates';

export const validateScheduleTime = async (req, res, next) => {
  try {
    const { start_date, end_date, doctor_id } = req.body;
    const schedules = await Schedule.findAll({ where: { doctor_id } });

    const mapps = schedules?.map((values, idx) => {
      return { start: values.start_date, end: values.end_date };
    });

    let thatDate = '';
    let first = '';
    let last = '';

    function compareDates(start_date, end_date) {
      for (let i = 0; i < mapps.length; i++) {
        if (mapps[i].start <= start_date && mapps[i].end >= end_date) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 1';
          break;
        }
        if (mapps[i].start >= start_date && mapps[i].end <= end_date) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 2';
          break;
        }
        if (
          mapps[i].start >= start_date &&
          mapps[i].start <= end_date &&
          mapps[i].end >= end_date
        ) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 3';
          break;
        }
        if (
          mapps[i].start <= start_date &&
          mapps[i].end >= start_date &&
          mapps[i].end <= end_date
        ) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 4';
          break;
        }
      }
    }

    const fx = compareDates(new Date(start_date), new Date(end_date));
    const equal = checkEquality(new Date(start_date), new Date(end_date));

    console.log({
      fx,
      equal,
      start_date,
      end_date,
      thatDate
    });

    if (thatDate === 'CASE 1' && !equal) {
      return res.status(400).json({
        message: `You cant't create a schedule inside another schedule.`
      });
    } else if (thatDate === 'CASE 1' && equal) {
      return next();
    }
    if (!fx && thatDate === 'CASE 2') {
      return res.status(400).json({
        message: `You cant't create a schedule inside another schedule.`
      });
    }
    if (!fx && thatDate === 'CASE 3') {
      return res.status(400).json({
        message: `You cant't create a schedule inside another schedule.`
      });
    }
    if (!fx && thatDate === 'CASE 4') {
      return res.status(400).json({
        message: `You cant't create a schedule inside another schedule.`
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkScheduleInterval = async (req, res, next) => {
  try {
    const { start_date, end_date } = req.body;

    const result = compareDates(start_date, end_date);

    if (!result) {
      return res.status(400).json({
        message: `The starting date can't be greater than or equal to the ending date.`
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkScheduleExist = async (req, res, next) => {
  try {
    const { schedule_id } = req.body;
    const schedule = await Schedule.findByPk(schedule_id, {});
    if (!schedule) {
      return res.status(400).json({
        message: `Schedule with id "${schedule_id}" doesn't exist`
      });
    }
    req.schedule = schedule;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};
