const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  secure: "true",
  auth: {
    user: process.env.HOTEL_EMAIL,
    pass: process.env.MAIL_APP,
  },
});
