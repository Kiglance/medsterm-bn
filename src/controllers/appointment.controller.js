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
import { Doctor, Client } from '../database/models';

export default class userController {
  constructor() {
    this.appointmentService = new AppointmentService();
    this.userService = new UserService();
  }

  async makeAppointment(req, res) {
    try {
      const { appointment_date, doctor_id } = req.body;
      const doctor = await this.userService.getUser(doctor_id);
      const token = checkToken(req);
      const variable = decodeToken(token);
      const client_id = variable.client_id;
      const user = await this.userService.getClient(client_id);

      const newAppointment = await this.appointmentService.makeAppointment(
        {
          appointment_date,
          client_id,
          doctor_id
        },
        res
      );

      console.log('************************');
      console.log(newAppointment);
      console.log('************************');
      console.log(variable.aud);
      console.log('************************');
      const message = `
      <h1><strong>Appointment notification.</strong></h1>
      <p>A client "${user.first_name} ${user.last_name}" just requested an appointment with you on <span style="color: #797979">${appointment_date}</span>.</p> 
      <a
        href="${process.env.FRONTEND_URL}/verify?token=${token}"
        target="_blank"
      >
        <button
          style="
            border: none;
            border-radius: 3px;
            background: #003e6b;
            color: #ffffff;
            padding: 10px 5px;
            width: fit-content;
            margin: auto;
          "
        >
          Check appointment
        </button>
      </a>  
            `;
      const subject = `You were requested for an appointment!`;
      await sendEmail(subject, message, doctor.email);
      return res.status(201).json({
        status: 201,
        message: 'Appointment creation was successfull.'
      });
    } catch (error) {
      const { appointment_date, doctor_id } = req.body;
      const doctor = await this.userService.getUser(doctor_id);
      const token = checkToken(req);
      const variable = decodeToken(token);

      return res.status(500).json({
        message: 'Error occured while making an appointment.',
        error: error.message
      });
    }
  }

  async getAppointments(req, res) {
    try {
      const appointments = await new AppointmentService().getAllAppointments();
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

  async checkAppointment(req, res) {
    try {
      const { id } = req.params;
      const appointment = await this.appointmentService.getAppointment(id);
      const token = checkToken(req);
      const doctor_data = decodeToken(token);
      const user = await Doctor.findByPk(doctor_data.id, {});
      const client = await Client.findByPk(appointment.client_id, {});

      await this.appointmentService.updateAppointmentParts(
        { is_checked: true },
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
}
