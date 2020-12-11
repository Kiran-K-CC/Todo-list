import React from "react";
import "./style.css";
import Login from "./component/login";
import Todo from "./components/todo";

export default function App() {
  return (
    <div className="todo-container">
      // <Login />
      <Todo />
    </div>
  );
}
