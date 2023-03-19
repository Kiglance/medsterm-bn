import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendEmail = async (subject, message, toEmail) => {
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.SENDER_EMAIL,
  //     pass: process.env.SENDER_PASSWORD
  //   }
  // });
  // const mailOptions = {
  //   from: {
  //     name: 'MedStem',
  //     address: process.env.SENDER_EMAIL
  //   },
  //   to: toEmail,
  //   subject: subject,
  //   html: message
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     return console.log(error);
  //   }

  //   res.render('contact', { msg: 'Email successfully sent!' });
  // });

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRETE
    }
  });

  const info = await transporter
    .sendMail({
      from: {
        name: 'MedStem',
        address: process.env.SENDER_EMAIL
      },
      to: toEmail,
      subject: subject,
      html: message,
      auth: {
        user: process.env.SENDER_EMAIL,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: process.env.GMAIL_ACCESS_TOKEN,
        expires: 1484314697598
      }
    })
    .catch((error) => {
      throw Error(error);
    });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  return info;
};

export default sendEmail;
