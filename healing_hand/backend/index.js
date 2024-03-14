const express = require("express");
import { userVerify } from "./zodd";
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    // render reactified home pg here
})

app.get('/patientlogin', async (req,res) => {
    const createPayload = req.body;
    if(!createPayload.safeParse(userVerify)){
        res.status(411).json({
            msg:"invalid input"
        });
        return;
    }

})

app.get('/doctorlogin', async (req,res) => {
    const createPayload = req.body;
    if(!createPayload.safeParse(userVerify)){
        res.status(411).json({
            msg:"invalid input"
        });
        return;
    }

})

app.post('/patientlogin', async (req,res) => {
    const createPayload = req.body;
    if(!createPayload.safeParse(userVerify)){
        res.status(411).json({
            msg:"invalid input"
        });
        return;
    }

})




app.listen(3000,()=>{
    console.log("server started");
})