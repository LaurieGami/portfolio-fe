const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");

require('dotenv').config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${EMAIL}`,
        pass: `${PASSWORD}`,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: `${EMAIL}`,
        subject: `${subject}`,
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});

module.exports = router;