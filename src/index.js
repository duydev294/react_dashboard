<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
=======
import React from "react";
import ReactDOM  from "react-dom/client";
import  { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
)
>>>>>>> 313802f (gis)
