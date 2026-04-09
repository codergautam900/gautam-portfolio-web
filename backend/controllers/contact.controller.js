import Contact from "../models/Contact.model.js";
import nodemailer from "nodemailer";
import ENV from "../config/env.js";

const sendMessage = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const senderEmail = ENV.MY_EMAIL;
        const senderPassword = ENV.MY_PASSWORD;

        if (!senderEmail || !senderPassword) {
            return res.status(400).json({
                success: false,
                message: "Email service is not configured. Add MY_EMAIL and MY_PASSWORD in backend .env.",
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: senderEmail,
                pass: senderPassword,
            },
        });

        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        const info = await transporter.sendMail({
            from: `"Portfolio Contact" <${senderEmail}>`,
            replyTo: email,
            to: senderEmail,
            subject: subject || `New portfolio inquiry from ${name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || "General inquiry"}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        await transporter.sendMail({
            from: `"Gautam Sagar Portfolio" <${senderEmail}>`,
            to: email,
            subject: "Thanks for reaching out",
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2>Hello ${name},</h2>
                    <p>Thanks for reaching out through the portfolio website.</p>
                    <p>Your message has been received and a reply will be sent soon.</p>

                    <h3>Your Message:</h3>
                    <p>${message}</p>

                    <br />
                    <p>Best regards,</p>
                    <p><strong>Gautam Sagar Portfolio</strong></p>
                </div>
            `,
        });

        await newContact.save();

        res.status(200).json({
            success: true,
            message: "Message sent and auto reply delivered",
            info,
            contact: newContact,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Mail sending failed",
            ...(ENV.NODE_ENV !== "production" && { details: error.message }),
        });
    }
};

export default sendMessage;
