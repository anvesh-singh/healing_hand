require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser=require('body-parser');
const http = require("http");
const server = http.createServer(app)
app.use(cors());
app.use(bodyparser.json());
const { Server } = require("socket.io");
const router = require("./routes/index");

  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

app.use("/", router);

// chat app logic
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });



app.listen(3000,(err)=>{
    if(err)console.log("error ocurred");
    console.log("app is listening on port 3000");
})
// chat server listen
server.listen(5005, () => console.log("server is running on port 5005"))

