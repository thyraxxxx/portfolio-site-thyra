/*
File Name: App.js
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/

import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/NavBar';
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element= {<Home />}></Route>
            <Route path="*" element= {<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
