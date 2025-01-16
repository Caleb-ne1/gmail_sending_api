const sendMailService = require("../services/sendMailService");

const sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    // validate request body
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields (name, email, subject, message) are required." });
    }

    try {
        // call email service
        const sendmail = await sendMailService.sendEmail(name, email, subject, message);

        res.status(200).json({
            success: true,
            message: "Email sent successfully!",
            data: sendmail,
        });
    } catch (error) {
        console.error("Error sending email:", error.message);

        res.status(500).json({
            success: false,
            error: "Failed to send email. Please try again later.",
        });
    }
};

module.exports = { sendEmail };
