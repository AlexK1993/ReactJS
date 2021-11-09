import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// const age = 12;
// const films = [
//   { title: "film1", year: 2011 },
//   { title: "film2", year: 2011 },
// ];

// const ReactElement = (
//   <div>
//     <h1>Hello React</h1>
//     <h1>Age :{age}</h1>
//     <div>
//       {films.map((film) => (
//         <div>
//           <div>title: {film.title}</div>
//           <div>year: {film.year}</div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const FilmsList = () => {
//   return (
//     <div>
//       {films.map((film) => (
//         <div>
//           <div>title: {film.title}</div>
//           <div>year: {film.year}</div>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <FunctionComponent />,
//       <ClassComponent />
//     </div>
//   );
// };

// const FunctionComponent = () => {
//   return (
//     <div>
//       <h1>Hello Function</h1>
//       <h1>Age :{age}</h1>
//       <FilmsList />
//     </div>
//   );
// };

// class ClassComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Class</h1>
//         <h1>Age :{age}</h1>
//         <FilmsList />
//       </div>
//     );
//   }
// }

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
