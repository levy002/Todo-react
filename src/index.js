import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer";
import "./App.css"

ReactDOM.render(
    <StrictMode>
      <TodoContainer />
    </StrictMode>,
    document.getElementById("root")
)