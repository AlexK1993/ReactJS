import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const Message = (props) => {
//   return (
//     <div className="message">
//       <h1>Джон Рональд Руэл Толкин. Властелин Колец</h1>
//       <hr />
//       <h2>Цытата: {props.PropsText}</h2>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Message PropsText="— Если бы я! Если бы ты! — сказал он. — Пустые речи начинаются с «если»." />
//     </div>
//   );
// };

const App = ({ user }) => {
  const [messageList, setMessageList] = useState([]);

  const addNewMessage = (author, text) => {
    setMessageList((messageList) => [
      ...messageList,
      {
        author: author,
        text: text,
      },
    ]);
  };

  const handleButtonClick = (messageText) => {
    addNewMessage(user, messageText);
  };

  useEffect(() => {
    let timerID;
    if (messageList.length !== 0) {
      const lastMessage = messageList[messageList.length - 1];
      if (lastMessage.author === user) {
        timerID = setTimeout(() => {
          addNewMessage(Bot.name, Bot.message);
        }, 1500);
      }
    }
    return () => clearTimeout(timerID);
  }, [messageList, user]);

  return (
    <div className="container">
      <NewMessage handleButtonClick={handleButtonClick} />
      {messageList.map(({ text, author }, i) => {
        return <Message key={author + i} text={text} author={author} />;
      })}
    </div>
  );
};

const NewMessage = ({ handleButtonClick }) => {
  const [messageText, setMessageText] = useState("");

  return (
    <>
      <textarea
        className="message"
        placeholder="Введите текст ..."
        value={messageText}
        onChange={(e) => {
          setMessageText(e.target.value);
        }}
      />
      <div>
        <button
          className="message-button"
          disabled={!messageText}
          onClick={() => {
            handleButtonClick(messageText);
            setMessageText("");
          }}
        >
          Отправить
        </button>
      </div>
    </>
  );
};

const Message = ({ text, author }) => {
  return (
    <div>
      <h4>{author}</h4>
      <p>{text}</p>
    </div>
  );
};

const Bot = {
  name: "Bot",
  message: "Ничего не понимаю, напиши еще раз!",
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
