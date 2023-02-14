import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendEmail = async (subject, message, toEmail) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD
    }
  });
  const mailOptions = {
    from: {
      name: 'MedStem',
      address: process.env.SENDER_EMAIL
    },
    to: toEmail,
    subject: subject,
    html: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }

    res.render('contact', { msg: 'Email successfully sent!' });
  });
};

export default sendEmail;
