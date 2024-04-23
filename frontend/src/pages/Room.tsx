//@ts-nocheck
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import '../css/Chat.css'
import { useNavigate } from "react-router-dom";
const socket = io.connect("http://localhost:5005");

export const Room = ()=>{
  if (typeof localStorage.getItem("token") === null) {
    const navigate = useNavigate();
    alert("please login/signup");
    navigate("/signup");
  }
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}