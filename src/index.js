import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

ReactDOM.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>,
  document.getElementById('root'),
);
