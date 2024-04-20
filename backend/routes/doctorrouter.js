const express = require("express");
const Doctorrouter = express.Router();
const jwt = require("jsonwebtoken");
const pdf = require("html-pdf");
const { Doctor } = require("../database/doctors");
const pdftemplate = require("../documents/index");
const bcrypt = require("bcrypt");

const {
  DoctorsignupInput,
  DoctorsigninInput,
} = require("@anvesh-singh/common");

const bodyParser = require("body-parser");

Doctorrouter.use(bodyParser.urlencoded({ extended: true }));

Doctorrouter.post("/signup", async (req, res) => {
  const body = req.body;
  const exists = await Doctor.findOne({ Email: body.Email });
  if (exists) {
    res.status(202).json({
      msg: "user already exists",
    });
  } else {
    const isSafe = DoctorsignupInput.safeParse(body);
    if (isSafe.success) {
      const salt = await bcyrpt.genSalt(10);
      body.Password = await bcyrpt.hash(body.Password, salt);
      const user = await Doctor.create(body);
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.status(211).json({
        jwt: `doctor ${token}`,
      });
    } else {
      res.status(202).json({
        msg: "incorrect input",
      });
    }
  }
});

Doctorrouter.post("/signin", async (req, res) => {
  const body = req.body;
  const exists = await Doctor.findOne({ Email: body.Email });
  if (!exists) {
    return res.status(202).json({
      msg: "Please Sign up",
    });
  } else {
    const isSafe = DoctorsigninInput.safeParse(body);
    if (isSafe.success) {
      if (bcrypt.compare(body.Password, exists.Password)) {
        const token = jwt.sign({ id: exists._id }, process.env.JWT_SECRET);
        return res.status(211).json({
          jwt: `doctor ${token}`,
        });
      } else {
        return res.status(202).json({
          msg: "incorrect password",
        });
      }
    } else {
      return res.status(202).json({
        msg: "email/password incorrect",
      });
    }
  }
});

Doctorrouter.get("/findone", async (req, res) => {
  try {
    const { q } = req.query;
    const doctor = await Doctor.findOne({ Email: q });
    return res.status(211).json(doctor);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ msg: "error" });
  }
});

Doctorrouter.post("/updateone", async (req, res) => {
  try {
    const { q } = req.query;
    const doctor = await Doctor.updateOne(
      { Email: q },
      { $set: { rating: req.body } }
    );
  } catch (err) {
    console.log(err);
    return res.status(404).json({ msg: "error" });
  }
});

Doctorrouter.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authentication;
    const verifiedtoken = await jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const doctor = await Doctor.findOne({ _id: verifiedtoken.id });
    return res.status(211).json(doctor);
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      msg: "error",
    });
  }
});

Doctorrouter.get("/filter", async (req, res) => {
  try {
    const { q } = req.query;
    const keys = ["FirstName", "LastName"];

    const doctors = await Doctor.find({});
    const filteredDoc = doctors.filter((item) => {
      return keys.some((key) => {
        return item[key] && item[key].toLowerCase().includes(q.toLowerCase());
      });
    });

    return res.status(211).json(filteredDoc);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ msg: "error" });
  }
});
Doctorrouter.post("/report", async (req, res) => {
  pdf.create(pdftemplate(req.body), {}).toFile("report.pdf", (err) => {
    if (err) return Promise.reject();
    return Promise.resolve();
  });
});
Doctorrouter.get("/report/download", (req, res) => {
  res.sendFile(`C:/Users/91843/healing_hand/backend/report.pdf`);
});

module.exports = Doctorrouter;
