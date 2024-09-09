
const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Setup email data
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'cnwaemesi@gmail.com', // Replace with the recipient's email
  subject: 'Hello from Node.js',
  text: 'This email was sent using Node.js!'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});