require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (name, email, subject, message) => {
  try {
    // validate input
    if (!name || !email || !subject || !message) {
      throw new Error("All fields (name, email, subject, message) are required.");
    }

    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // email content
    const mail = {
      from: email,
      to: process.env.GMAIL,
      subject: `Email from ${email} on ${subject} - calebkibet.co.ke`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p> 
      `,
    };

    // Send the email
    await transporter.sendMail(mail);

    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw error;
  }
};

module.exports = { sendEmail };
