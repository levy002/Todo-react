import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import TodoContainer from './components/TodoContainer';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar'

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
  document.getElementById('root'),
);
