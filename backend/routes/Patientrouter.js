const express = require("express");
const Patientrouter = express.Router();
const { Patient } = require("../database/patient");
const jwt = require("jsonwebtoken");
const { Doctor } = require("../database/doctors");
const Appointment = require("../database/appointment");
const { PatientsignupInput } = require("@anvesh-singh/common");
const { PatientsigninInput } = require("@anvesh-singh/common");
const bcyrpt = require("bcrypt");

Patientrouter.post("/signup", async (req, res) => {
  const body = req.body;
  const exists = await Patient.findOne({ Email: body.Email });
  if (exists) {
    res.status(202).json({
      msg: "user already exists",
    });
  } else {
    const isSafe = PatientsignupInput.safeParse(body);
    if (isSafe.success) {
      const salt = await bcyrpt.genSalt(10);
      body.Password = await bcyrpt.hash(body.Password, salt);
      const user = await Patient.create(body);
      const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.status(211).json({
        jwt: `patient ${token}`,
      });
    } else {
      res.status(202).json({
        msg: "incorrect input",
      });
    }
  }
});

Patientrouter.post("/signin", async (req, res) => {
  const body = req.body;
  const exists = await Patient.findOne({ Email: body.Email });
  if (!exists) {
    return res.status(202).json({
      msg: "Please Sign up",
    });
  } else {
    const isSafe = PatientsigninInput.safeParse(body);

    if (isSafe.success) {   
      if (bcyrpt.compare(body.Password, exists.Password)) {
        const token = jwt.sign({ id: exists._id }, process.env.JWT_SECRET);
        return res.status(211).json({
          jwt: `patient ${token}`,
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

Patientrouter.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authentication;

    const verifiedtoken = await jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    const patient = await Patient.findOne({ _id: verifiedtoken.id });
    return res.status(211).json(patient);
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      msg: "error",
    });
  }
});




// Patientrouter.post("/appointment", async (req, res) => {
//   const body = req.body;
//   try {
//     const patient = await Patient.findOne({
//       _id: body.patient,
//     });
//     const doctor = await Doctor.findOne({
//       _id: body.doctor,
//     });
//     const created = await Appointment.create({
//       patient: patient._id,
//       doctor: doctor._id,
//     });
//     res.status(201).json(created);
//   } catch (err) {
//     res.status(411).json({
//       msg: "some error occured",
//     });
//   }
// });

// userRouter.put('/',auth, async (req,res)=>{
// const resp=await User.findOneAndUpdate({_id:req.body.username},{password:req.body.password,
//   firstname:req.body.firstname,
//   lastname:req.body.lastname
// });
// if(!resp){
//   res.status(411).json({message: "Error while updating information"});
// }
// else {
//   res.status(411).json({
//     message: "Updated successfully"
//   });
// }
// })

module.exports = Patientrouter;
