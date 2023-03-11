import 'dotenv/config';
import { Vacation } from '../database/models';

export const checkVacationInterval = async (req, res, next) => {
  try {
    const { from_date, to_date } = req.body;

    if (from_date > to_date) {
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
