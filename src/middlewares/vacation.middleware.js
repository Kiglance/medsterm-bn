import 'dotenv/config';
import { Vacation } from '../database/models';
import { compareDates, checkEquality } from '../utils/compareDates';

export const validateVacationTime = async (req, res, next) => {
  try {
    const { from_date, to_date, doctor_id } = req.body;
    const vacations = await Vacation.findAll({ where: { doctor_id } });

    const mapps = vacations?.map((values, idx) => {
      return { start: values.from_date, end: values.to_date };
    });

    let thatDate = '';
    let first = '';
    let last = '';

    function compareDates(from_date, to_date) {
      for (let i = 0; i < mapps.length; i++) {
        if (mapps[i].start <= from_date && mapps[i].end >= to_date) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 1';
          break;
        }
        if (mapps[i].start >= from_date && mapps[i].end <= to_date) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 2';
          break;
        }
        if (
          mapps[i].start >= from_date &&
          mapps[i].start <= to_date &&
          mapps[i].end >= to_date
        ) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 3';
          break;
        }
        if (
          mapps[i].start <= from_date &&
          mapps[i].end >= from_date &&
          mapps[i].end <= to_date
        ) {
          first = mapps[i].start;
          last = mapps[i].end;
          thatDate = 'CASE 4';
          break;
        }
      }
    }

    const fx = compareDates(new Date(from_date), new Date(to_date));
    const equal = checkEquality(new Date(from_date), new Date(to_date));

    console.log({
      equal,
      from_date,
      to_date,
      thatDate
    });

    if (thatDate === 'CASE 1' && !equal) {
      return res.status(400).json({
        message: `You cant't create a vavation inside another vavation.`
      });
    } else if (thatDate === 'CASE 1' && equal) {
      return next();
    }
    if (!fx && thatDate === 'CASE 2') {
      return res.status(400).json({
        message: `You cant't create a vavation inside another vavation.`
      });
    }
    if (!fx && thatDate === 'CASE 3') {
      return res.status(400).json({
        message: `You cant't create a vavation inside another vavation.`
      });
    }
    if (!fx && thatDate === 'CASE 4') {
      return res.status(400).json({
        message: `You cant't create a vavation inside another vavation.`
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

export const checkVacationInterval = async (req, res, next) => {
  try {
    const { from_date, to_date } = req.body;

    const result = compareDates(from_date, to_date);

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
