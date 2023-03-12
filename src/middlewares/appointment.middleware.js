import 'dotenv/config';
import {
  Appointment,
  Work_Day,
  Schedule,
  Doctor,
  Client,
  Doctor_Dept
} from '../database/models';

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

export const checkAppointmentIsTaken = async (req, res, next) => {
  try {
    const { appointment_period, _id } = req.body;
    const appointment = await Appointment.findOne({
      where: {
        appointment_period,
        _id
      }
    });
    // const work_day = await Work_Day.findByPk(_id, {});

    if (appointment) {
      return res.status(400).json({
        message: `This slot "${appointment_period}" is taken!`
      });
    }
    console.log({ appointment });
    req.appointment = appointment;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred888',
      error: error.message
    });
  }
};

export const checkDoctorDepartmentExist = async (req, res, next) => {
  try {
    const { client_id, _id, doctor_id, schedule_id, department_id } = req.body;
    const work_day = await Work_Day.findByPk(_id, {});
    const doctor = await Doctor.findByPk(doctor_id, {});
    const schedule = await Schedule.findByPk(schedule_id, {});
    const client = await Client.findByPk(client_id, {});
    const department = await Doctor_Dept.findOne({
      where: { department_id, doctor_id }
    });

    if (!department) {
      return res.status(404).json({
        message: `This doctor is not in the provided department!!`
      });
    }

    console.log({ department });

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkDoctorScheduleDayExist = async (req, res, next) => {
  try {
    const { client_id, _id, doctor_id, schedule_id } = req.body;
    const work_day = await Work_Day.findByPk(_id, {});
    const doctor = await Doctor.findByPk(doctor_id, {});
    const schedule = await Schedule.findByPk(schedule_id, {});
    const client = await Client.findByPk(client_id, {});

    if (!work_day) {
      return res.status(404).json({
        message: `This work day does not exist!!`
      });
    }
    if (!doctor) {
      return res.status(404).json({
        message: `This doctor does not exist!!`
      });
    }
    if (!schedule) {
      return res.status(404).json({
        message: `This schedule does not exist!!`
      });
    }
    if (!client) {
      return res.status(404).json({
        message: `This client does not exist!!`
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

export const checkCancelAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { client_id, doctor_id } = req.body;
    const appointment = await Appointment.findByPk(id, {});
    const doctor = await Doctor.findByPk(doctor_id, {});
    const client = await Client.findByPk(client_id, {});

    if (appointment.doctor_id !== doctor_id) {
      return res.status(500).json({
        message: "You can not cancel an other doctor's appointment",
        error: error.message
      });
    }

    if (appointment.client_id !== client_id) {
      return res.status(500).json({
        message: "You can not cancel an other client's appointment",
        error: error.message
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
