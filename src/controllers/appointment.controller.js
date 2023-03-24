import AppointmentService from '../services/appointment.service';
import UserService from '../services/user.service';
import { imageUpload } from '../helpers/fileUpload';
import {
  hashPassword,
  comparePassword,
  decodeToken,
  generateToken
} from '../helpers/user.helper';
import sendEmail from '../helpers/nodemailer';
import { verifyToken } from '../helpers/user.helper';
import checkToken from '../helpers/checkToken';
import {
  Doctor,
  Client,
  Work_Day,
  Department,
  Appointment
} from '../database/models';
import { date } from 'joi';
import WorkDayService from '../services/work_day.service';

export default class userController {
  constructor() {
    this.appointmentService = new AppointmentService();
    this.userService = new UserService();
    this.workdayService = new WorkDayService();
  }

  async makeAppointment(req, res) {
    try {
      const {
        appointment_period,
        doctor_id,
        _id,
        schedule_id,
        department_id,
        client_id
      } = req.body;

      const doctor = await this.userService.getUser(doctor_id);
      const token = checkToken(req);
      const variable = decodeToken(token);
      // const client_id = variable.id;
      const user = await Client.findByPk(client_id, {});
      const work_day = await Work_Day.findByPk(_id, {});

      const newAppointment = await this.appointmentService.makeAppointment(
        {
          appointment_period,
          client_id,
          doctor_id,
          _id,
          schedule_id,
          department_id
        },
        res
      );

      console.log({ newAppointment });
      console.log({ user });

      // const message = `
      // <h1><strong>Appointment notification.</strong></h1>
      // <p>A client "${user.first_name} ${user.last_name}" just requested an appointment with you on <span style="color: #797979">${work_day?.date}</span>.</p>
      // <a
      //   href="${process.env.FRONTEND_URL}/verify?token=${token}"
      //   target="_blank"
      // >
      //   <button
      //     style="
      //       border: none;
      //       border-radius: 3px;
      //       background: #003e6b;
      //       color: #ffffff;
      //       padding: 10px 5px;
      //       width: fit-content;
      //       margin: auto;
      //     "
      //   >
      //     Check appointment
      //   </button>
      // </a>
      //       `;
      // const subject = `You were requested for an appointment!`;
      // await sendEmail(subject, message, doctor.email);
      return res.status(201).json({
        status: 201,
        message: 'Appointment creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making an appointment.',
        error: error.message
      });
    }
  }

  async getAppointments(req, res) {
    try {
      const { month, year } = req.query;

      const appointments = await new AppointmentService().getAllAppointments({
        month,
        year
      });
      return res.status(200).json({
        message: 'Retrieved all appointments successfully',
        data: appointments
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching appointments',
        error: error.message
      });
    }
  }

  async getAppointment(req, res) {
    try {
      const { id } = req.params;
      const appointment = await Appointment.findOne({
        where: { appointment_id: id },
        include: [
          {
            model: Doctor,
            as: 'doctor',
            required: true
          },
          {
            model: Client,
            as: 'client',
            required: true
          },
          {
            model: Work_Day,
            as: 'work_day',
            required: true
          }
        ]
      });
      return res.status(200).json({
        message: 'Fetched appointment successfully',
        data: appointment
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching appointment',
        error: error.message
      });
    }
  }

  async getAppointmentsByWorkDay(req, res) {
    try {
      const { id } = req.params;
      const day = await this.workdayService.getWorkDay(id);
      const appointments =
        await new AppointmentService().getAppointmentsByParam({
          where: {
            _id: id
          }
        });
      return res.status(200).json({
        message: `Retrieved all appointments successfully of work day on ${
          day.day
        } ${new Date(
          new Date(day.date).setDate(new Date(day.date).getDate())
        ).toDateString()}`,
        data: appointments
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching doctor appointments',
        error: error.message
      });
    }
  }

  async getAppointmentsByDoctor(req, res) {
    try {
      const { id } = req.params;
      const doctor = await this.userService.getUser(id);
      const appointments =
        await new AppointmentService().getAppointmentsByParam({
          where: {
            doctor_id: id
          }
        });
      return res.status(200).json({
        message: `Retrieved all appointments successfully of Dr. ${doctor.first_name} ${doctor.last_name}`,
        data: appointments
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching doctor appointments',
        error: error.message
      });
    }
  }

  async getAppointmentsByClient(req, res) {
    try {
      const { id } = req.params;
      const patient = await this.userService.getClient(id);
      const appointments =
        await new AppointmentService().getAppointmentsByParam({
          where: {
            client_id: id
          },

          include: [
            {
              model: Doctor,
              as: 'doctor',
              include: [
                {
                  model: Department,
                  as: 'departments'
                }
              ]
            },
            {
              model: Work_Day,
              as: 'work_day'
            }
          ]
        });
      return res.status(200).json({
        message: `Retrieved all appointments successfully of Patient. ${patient.first_name} ${patient.last_name}`,
        data: appointments
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching client appointments',
        error: error.message
      });
    }
  }

  async checkAppointment(req, res) {
    try {
      const { id } = req.params;
      const appointment = await this.appointmentService.getAppointmentId(id);
      const token = checkToken(req);
      const doctor_data = decodeToken(token);
      const user = await Doctor.findByPk(doctor_data.id, {});
      const client = await Client.findByPk(appointment.client_id, {});

      await this.appointmentService.updateAppointmentParts(
        { is_approved: true, status: 'approved' },
        { where: { appointment_id: appointment.appointment_id } }
      );

      const message = `
    <h1><strong>Appointment notification.</strong></h1>
    <p>Your appointment was approved by Dr. ${user.first_name} ${user.last_name}</p> 
      
    <p>You are scheduled to meet on: <em style="color: #797979">${appointment.appointment_date}</em>.</p>
    <p>
      <a
      href="#"
      target="_blank"
      >
        Add to calendar
    </a> 
    </p>
    <p>
      <a
      href="#"
      target="_blank"
      style="color: #ff0000"
      >
        Cancel meeting.
      </a> 
    </p>
      `;
      const subject = `Your appointment was approved by doctor!`;
      await sendEmail(subject, message, client.email);

      return res.status(200).json('Appointment checked successfully!');
    } catch (error) {
      return res.status(500).json({
        message: 'An Unexpected error occurred',
        error: error.message
      });
    }
  }

  async cancelAppointment(req, res) {
    try {
      const { id } = req.params;
      const { cancel_reason } = req.body;
      const cancel_date = new Date();
      const appointment = await this.appointmentService.getAppointmentId(id);
      const user = await Client.findByPk(appointment.client_id, {});
      const doctor = await Doctor.findByPk(appointment.doctor_id, {});

      await this.appointmentService.updateAppointmentParts(
        { is_canceled: true, cancel_date },
        { where: { appointment_id: appointment.appointment_id } }
      );

      const message = `
    <h1><strong>Appointment notification.</strong></h1>
    <p>Hello Dr. ${doctor.first_name} ${doctor.last_name}, your appointment with the patient ${user.first_name} ${user.last_name} that was due: ${appointment.appointment_date} was canceled on ${cancel_date}.</p> 
    `;
      const subject = `Your appointment was cancelled!`;
      await sendEmail(subject, message, user.email);

      return res.status(200).json('Appointment cancelled successfully!');
    } catch (error) {
      return res.status(500).json({
        message: 'An Unexpected error occurred',
        error: error.message
      });
    }
  }

  async updateAppointment(req, res) {
    try {
      const id = req.params.id;

      const appointment = await Appointment.findByPk(id, {});

      const bodyRecommendations = req.body.recommendations;
      const bodyDrugs = req.body.drugs;

      console.log(bodyDrugs, '***********');

      let previousRecommendations = !appointment.recommendations[0]
        ? appointment.recommendations
        : JSON.parse(appointment.recommendations);
      let previousDrugs = !appointment.drugs[0]
        ? appointment.drugs
        : JSON.parse(appointment.drugs);

      for (let i = 0; i < bodyRecommendations?.length; i++) {
        if (bodyRecommendations) {
          previousRecommendations.push(bodyRecommendations[i]);
        }
      }
      for (let i = 0; i < bodyDrugs?.length; i++) {
        if (bodyDrugs) {
          previousDrugs.push(bodyDrugs[i]);
        }
      }

      const newUser = await this.appointmentService.updateAppointmentParts(
        {
          ...req.body,
          // complaints: req.body.complaints,
          // diagnosis: req.body.diagnosis,
          drugs: JSON.stringify(previousDrugs),
          recommendations: JSON.stringify(previousRecommendations)
        },
        {
          // complaints: req.body.complaints,
          // diagnosis: req.body.diagnosis,
          drugs: JSON.stringify(previousDrugs),
          recommendations: JSON.stringify(previousRecommendations),
          where: {
            appointment_id: id
          }
        }
      );
      console.log(req.body.complaints, '&&&');
      return res.status(201).json({
        status: 201,
        message: 'Appointment updated successfully.',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed to update appointment info.',
        error: error.message
      });
    }
  }

  async removeRecommendation(req, res) {
    try {
      const id = req.params.id;
      const index = req.params.index;

      console.log(id, '################');
      console.log(index, '################');

      const appointment = await Appointment.findByPk(id, {});

      let previousRecommendations = JSON.parse(appointment.recommendations);
      previousRecommendations.splice(index, 1);

      const newUser = await this.appointmentService.updateAppointmentParts(
        {
          recommendations: JSON.stringify(previousRecommendations)
        },
        {
          recommendations: JSON.stringify(previousRecommendations),
          where: {
            appointment_id: id
          }
        }
      );

      return res.status(201).json({
        status: 201,
        message: 'Recommendation successfully.',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed toremove recommendation.',
        error: error.message
      });
    }
  }

  async removeDrug(req, res) {
    try {
      const id = req.params.id;
      const index = req.params.index;

      const appointment = await Appointment.findByPk(id, {});

      let previousDrugs = JSON.parse(appointment.drugs);
      previousDrugs.splice(index, 1);

      const newUser = await this.appointmentService.updateAppointmentParts(
        {
          drugs: JSON.stringify(previousDrugs)
        },
        {
          drugs: JSON.stringify(previousDrugs),
          where: {
            appointment_id: id
          }
        }
      );

      return res.status(201).json({
        status: 201,
        message: 'Recommendation successfully.',
        data: newUser
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Failed toremove recommendation.',
        error: error.message
      });
    }
  }

  async deleteteAppointments(req, res) {
    try {
      await this.appointmentService.deleteteAppointments({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'appointments deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting appointments.',
        error: error.message
      });
    }
  }
}
