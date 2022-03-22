import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoContainer from './components/TodoContainer';
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar'

ReactDOM.render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById('root'),
);
