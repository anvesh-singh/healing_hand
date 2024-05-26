//@ts-nocheck
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Chatcss from "../css/Chat.module.css";
import { useNavigate } from "react-router-dom";
function Chat({ socket, username, room }) {
  if (typeof localStorage.getItem("token") === null) {
    const navigate = useNavigate();
    alert("please login/signup");
    navigate("/signup");
  }
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [count, setCount] = useState(1);

  const sendMessage = async () => {
    let x = 0;
    if (currentMessage !== "") {
      const messageData = {
        id: count,
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          " : " +
          new Date(Date.now()).getMinutes(),
      };
      setCount(count + 1);

      setMessageList((list) => [...list, messageData]);
      await socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  return (
    <div className={Chatcss.chat-window}>
      <div className={Chatcss.chat-header}>
        <p>Live Chat</p>
      </div>
      <div className={Chatcss.chat-body}>
        <ScrollToBottom className={Chatcss.message-container}>
          {messageList.map((messageContent) => {
            return (
              <div
                key={messageContent.id}
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className={Chatcss.message-content}>
                    <p>{messageContent.message}</p>
                  </div>
                  <div className={Chatcss.message-meta}>
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className={Chatcss.chat-footer}>
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
