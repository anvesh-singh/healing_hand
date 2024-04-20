const express = require("express");
const router = express.Router();
const PatientRouter = require("./Patientrouter");
const Doctorrouter = require("./Doctorrouter");
router.use("/patient",PatientRouter);
router.use("/doctor",Doctorrouter);
module.exports = router;
