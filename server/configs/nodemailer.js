// nodemailer.js
// import dotenv from 'dotenv';
// dotenv.config();
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.USER_PASS,
  },
})


export default transporter;