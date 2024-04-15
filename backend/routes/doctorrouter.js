const express = require("express");
const doctorRouter = express.Router();
const jwt = require("jsonwebtoken");
const {Doctor}=require('../database/doctors')
doctorRouter.post("/signup",async (req, res) => {
    const body =  req.body;
    const exists = await Doctor.findOne(body);
    if (exists) {
        res.status(411).json({
            msg: "user already exists"
        });
    }
    else {
        const user = await Doctor.create(body);
        const token = await  jwt.sign({ id: user._id },"TEAMSAGS" );
        return res.json({
            jwt: token
        });
    }
});
doctorRouter.get("/profile",async (req, res) => {
   try {
    const token= req.headers.authentication
    const id= await jwt.verify(token,"TEAMSAGS");
    const doctor= await Doctor.findOne({_id:id.id});
    return res.status(211).json(doctor)}
    catch(err){
        console.log(err);
    }
});
doctorRouter.post("/getall",async (req, res) => {
    try{
        console.log(req.body);
    const userid= req.body.id;
    console.log(userid);
    const doctors= await Doctor.find({_id:userid});
    console.log(doctors);
    return res.status(211).json(doctors)}
    catch(err){
        console.log(err);
    }
});
module.exports = doctorRouter;
