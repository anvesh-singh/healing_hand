const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const generateOTP = require("./generateOTP");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "20223048.gdscmnnit.24@gmail.com",
    pass:"siek cwkg ivzg esss"  ,
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const otp = generateOTP();

  var mailOptions = {
    from: "20223048.gdscmnnit.24@gmail.com",
    to: email,
    subject: "OTP for verification",
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
