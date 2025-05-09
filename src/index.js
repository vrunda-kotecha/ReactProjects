import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Calculator from './Calculator/Calculator';
import Cart from './Cart/Cart';
import Mcqtest from './McqTest/Mcqtest';
import Multiplex from './Multiplex/Multiplex';
import Mybus from './MyBus/Mybus';
import TicTacToe from './TicTacToe/TicTacToe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Mcqtest/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
