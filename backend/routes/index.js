const express = require("express");
const router = express.Router();
const userRouter = require("./userrouter");
const doctorrouter = require("./doctorrouter");
router.use("/user", userRouter);
router.use("/doctor",doctorrouter);
module.exports = router;
