import 'dotenv/config';
import { Appointment } from '../database/models';

export const checkAppointmentExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findByPk(id, {});

    if (!appointment) {
      return res.status(400).json({
        message: `Appointment with id "${id}" doesn't exist`
      });
    }
    req.appointment = appointment;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};
