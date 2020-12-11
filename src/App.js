import React from "react";
import "./style.css";
import Login from "./component/login";
import Todo from "./component/todo";

export default function App() {
  return (
    <div className="container">
      <Todo />
    </div>
  );
}
