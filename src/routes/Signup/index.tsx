import { Dispatch } from "redux";
import React, { useState } from "react";
import { connect } from "react-redux";

import "./style.css";
import {signUp} from "./../../store/actions/index";

interface propsType {
  signUp: (name: string,id:string,pass:string) => void;
}
const Signup = (props: propsType) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const inputIdHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserId(e.target.value);
  };

  const inputPassHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const inputSubmit = ():void=>{
 
   props.signUp(name, userId, password);
   setPassword(".....");
  }

  return (
    <div>
      <input
        id="signup_name_input"
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={inputNameHandler}
      ></input>
      <input
        id="signup_id_input"
        type="text"
        placeholder="Enter Your email id"
        value={userId}
        onChange={inputIdHandler}
      ></input>
      <input
        id="signup_pass_input"
        type="text"
        placeholder="Create Your password"
        value={password}
        onChange={inputPassHandler}
      ></input>
      <button onClick={inputSubmit}>SignUp</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (name:string,id:string,pass:string) => dispatch(signUp(name,id,pass)),

  };
};
export default connect(null, mapDispatchToProps)(Signup);