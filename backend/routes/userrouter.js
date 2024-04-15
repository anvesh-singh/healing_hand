const express = require("express");
const userrouter = express.Router();
const { Patient } = require("../database/patient"); 
const jwt = require("jsonwebtoken");
const { Doctor } = require("../database/doctors");
const Appointment = require("../database/appointment");
userrouter.post("/signup",async (req, res) => {
    const body =  req.body;
    const exists = await Patient.findOne(body);
    if (exists) {
        res.status(411).json({
            msg: "user already exists"
        });
    }
    else {
        const user = await Patient.create(body);
        const token = await  jwt.sign({ id: user._id },"TEAMSAGS" );
        return res.json({
            jwt: token
        });
    }
});

userrouter.post("/appointment",async (req, res) => {
    const body =  req.body;
    try{
        const patient=await Patient.findOne({
            _id:body.patient
        })
        const doctor=await Doctor.findOne({
            _id:body.doctor
        })
        const created=await Appointment.create({
            patient:patient._id,doctor:doctor._id
        })
        res.status(201).json(created);
    }
    catch(err){
        res.status(411).json({
            msg:"some error occured"
        })
    }
});

// userRouter.post("/sigin" ,async (req, res) => {
//   const body = req.body;
//   const exists = await User.findOne(body);
//   if (!exists) {
//     res.status(411).json({
//       message: "Error while logging in",
//     });
//   } else {
//     const id = exists._id;
//     const token = jwt.sign({ id }, JWTSECRET);
//     res.status(201).json({
//       token: token,
//     });
//     return;
//   }
//   res.status(411).json({
//     message: "Error while logging in",
//   });
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


module.exports = userrouter;
