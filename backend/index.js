const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser=require('body-parser');
app.use(cors());
app.use(bodyparser.json());
const router = require("./routes/index");
app.use("/", router);
app.listen(3000,(err)=>{
    if(err)console.log("error ocurred");
    console.log("server is listening on port 3000");
})
