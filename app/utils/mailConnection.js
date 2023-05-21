const nodemailer = require('nodemailer');

// Create a transporter object with SMTP details
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// Define the email options
const mailOptions = {
  from: 'your-email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
