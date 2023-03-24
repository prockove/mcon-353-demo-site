import { useEffect, useState } from "react";
import backgroundImg from "../../images/backgroundImg.jpg";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useInterval } from "../../hooks/use-interval";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [inputChat, setInputChat] = useState("");
  const [inputUsername, setInputUsername] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function addChat() {
    const chat = {
      name: inputChat,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chat),
    });

    setInputChat("");
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);
        setMessages(data.Items);
      });
  }

  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: inputUsername, // required
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onChatInput(event) {
    setInputChat(event.target.value);
  }

  function onMessageInput(event) {
    setInputMessage(event.target.value);
  }

  function onUsernameInput(event) {
    setInputUsername(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    5000,
    currentChat && currentChat.id
  );

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <Box
        sx={{
          backgroundColor: "white",
          border: "5px solid",
          borderColor: "black",
          borderRadius: "20px",
          height: "750px",
          width: "60%",
          margin: "auto",
          display: "flex",
        }}
      >
        <Box sx={{ width: "35%", textAlign: "center" }}>
          <Box
            sx={{
              height: "18%",
              backgroundColor: "#e1e5eb",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".15rem",
                color: "#347aeb",
                paddingTop: "18px",
              }}
            >
              <ChatIcon fontSize="large" /> Chats
            </Typography>
            <TextField
              id="standard-basic"
              onInput={onChatInput}
              value={inputChat}
              label="new chat"
              variant="standard"
              size="small"
            />
            <AddIcon
              onClick={() => addChat()}
              fontSize="small"
              sx={{ color: "#347aeb" }}
            ></AddIcon>

            <br></br>
          </Box>

          <Box
            sx={{
              height: "82%",
              overflowY: "scroll",
              backgroundColor: "#e1e5eb",
              textAlign: "center",
            }}
          >
            <hr />
            {chats.map((chat) => (
              <div key={chat.id}>
                <Button onClick={() => setChat(chat)}>{chat.name}</Button>
                <hr />
              </div>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            width: "78%",
          }}
        >
          <Box
            sx={{
              height: "18%",
              backgroundColor: "#dec1d1",
            }}
          >
            <Box sx={{ textAlign: "right", marginRight: "3%" }}>
              <TextField
                id="standard-basic"
                onInput={onUsernameInput}
                value={inputUsername}
                label="username"
                variant="standard"
                size="small"
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                paddingTop: "20px",
                fontFamily: "monospace",
                fontWeight: 500,
                letterSpacing: ".15rem",
              }}
            >
              {currentChat && currentChat.name} Messages
            </Typography>
          </Box>

          <Box
            sx={{
              height: "72%",
              overflowY: "scroll",
              textAlign: "left",
            }}
          >
            <br></br>
            {messages.map((message) => (
              <div key={message.id}>
                <Typography
                  sx={{
                    backgroundColor: "lightblue",
                    borderRadius: "20px",
                    padding: "10px",
                    marginBottom: "15px",
                    display: "inline-block",
                  }}
                >
                  {message.username}: {message.text}
                </Typography>
              </div>
            ))}
          </Box>
          <Box
            sx={{
              height: "10%",
              backgroundColor: "#dec1d1",
            }}
          >
            <br></br>
            <TextField
              id="standard-basic"
              onInput={onMessageInput}
              value={inputMessage}
              label="type message..."
              variant="standard"
              size="small"
              sx={{
                textAlign: "left",
              }}
            />
            <SendIcon onClick={() => postMessage()}></SendIcon>
          </Box>
        </Box>
      </Box>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
