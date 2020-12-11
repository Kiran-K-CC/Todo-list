import React, { useState } from "react";
import "./login.css";
import Button from "../button";
import Input from "../input";

const Login = () => {

  const [inputText, setInputText] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  return (
    <div className="login">
      Login
      <span>
        Username: <Input value = {inputText} onChange = {e => {
          setInputText(e.target.value)
        }}
        placeholder = {'Enter the username'}/>
      </span>
      <span>
        Password: <Input value = {inputPassword} onChange = {e => {
          setInputPassword(e.target.value)
        }}
        placeholder = {'Enter the password'}/>
      </span>
      <Button label={"Login"} />
    </div>
  );
};

export default Login;
