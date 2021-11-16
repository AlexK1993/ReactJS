import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Message = (props) => {
  return (
    <div>
      <h1>Джон Рональд Руэл Толкин. Властелин Колец</h1>
      <hr />
      <h2>Цытата: {props.PropsText}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Message PropsText="— Если бы я! Если бы ты! — сказал он. — Пустые речи начинаются с «если»." />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
