const express = require("express");
const cors = require("cors");
const app = express();
const bodyparser=require('body-parser');
const http = require("http");
const server = http.createServer(app)
const setUpSocketServer = require("./routes/videocall")
app.use(cors());
app.use(bodyparser.json());
const { Server } = require("socket.io");
const router = require("./routes/index");
const videocall = require("./routes/videocall");
const socketIO = require("socket.io")

// app.use(
//     cors({
//       origin: "http://localhost:5173",
//       methods: ["GET", "POST"],
//       credentials: true,
//     })
//   );

  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });


app.use("/", router);
// app.get('/xxx',videocall);



// // const setUpSocketServer = require("./routes/videocall")
// setUpSocketServer(server);


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



app.listen(6000,(err)=>{
    if(err)console.log("error ocurred");
    console.log("server is listening on port 6000");
})
server.listen(5005, () => console.log("server is running on port 5005"))










// const server = http.createServer(app2)
// const io = require("socket.io")(server, {
// 	cors: {
// 		origin: "http://localhost:5173",
// 		methods: [ "GET", "POST" ]
// 	}
// })

// io.on("connection", (socket) => {
// 	socket.emit("me", socket.id)

// 	socket.on("disconnect", () => {
// 		socket.broadcast.emit("callEnded")
// 	})

// 	socket.on("callUser", (data) => {
// 		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
// 	})

// 	socket.on("answerCall", (data) => {
// 		io.to(data.to).emit("callAccepted", data.signal)
// 	})
// })

// server.listen(5001, () => console.log("server is running on port 5001"))
