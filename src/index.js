import React from 'react';                 // Its required so that we can use JSX(HTML) tags in Js
import ReactDOM from 'react-dom';         // To manipulate html tags we need the react-dom
import './index.css';
import App from './App';


// const fname = "Saloni";
// const lname = "Tayal";
// const link = "#";
// ReactDOM.render(
//   <>
//   <h1 contentEditable="true" className="heading">{`Hello ${fname} ${lname}`}</h1>
//   <p>Welcome To React</p>
//   <img src={link}/>
//   <img src={link}/>
//   <a href="X" target="_blank">
//     <img src={link}/>
//   </a>
//   </>,
//   document.getElementById("root"));


ReactDOM.render(<App />,
  document.getElementById('root')
);


