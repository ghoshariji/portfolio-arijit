const contactModel = require("../model/contact");
const nodeMailer = require("nodemailer");

const Contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const data = new contactModel(req.body);
    await data.save();

    const transPort = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const main = async () => {
      const info = transPort.sendMail({
        from: {
          name: "Arijit-DEV",
          address: process.env.USER,
        },
        to: process.env.SENDER,
        subject: `New Contact Fill Up - ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<b>Name:</b> ${name} <br> <b>Email:</b> ${email} <br> <b>Message:</b> ${message}`,
      });
    };
    main().then(() => {
      return res.status(201).send({
        message: "Data Saved Successfully",
        success: true,
      });
    });
  } catch (error) {
    return res.status(201).send({
      message: "Something Went Wrong",
      success: false,
    });
  }
};

module.exports = { Contact };
