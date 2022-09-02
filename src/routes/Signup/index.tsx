import { Dispatch } from "redux";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { signUp } from "./../../store/actions/index";

import styled from "styled-components";

interface propsType {
  signUp: (name: string, id: string, pass: string) => void;
}
const Signup = (props: propsType) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const inputIdHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserId(e.target.value);
  };

  const inputPassHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const inputSubmit = (): void => {

    props.signUp(name, userId, password);
    setPassword(".....");
  }

// const StyledInputDiv = styled.div`
// background-color:blue;`

const StyledInput = styled.input`
    width:400px;
   ;`

  // const StyledCheckInput = styled.input`

  //   margin-left: 819px;  
  //   margin-top: 10px;
  //   background-color: blue;`

  const StyledButton = styled.button`
    padding: 8px 16px;
    width: 445px;
    height: 50px;
    margin-left: 819px;
    margin-top: 40px;
    background: blue;
    color:white;
    border: 1px solid #F1F1FA;
    border-radius: 16px;`

  // const Styleddiv = styled.div`
  //   background-color:pink;
  //   width:400px;`


  // width: 400px;
  // height: 40px;
  // margin-left: 819px;
  // margin-top: 40px;
  // background: #FFFFFF;
  // border: 1px solid #F1F1FA;
  // border-radius: 16px

  return (<Fragment>
    <div><h3>Welcome,</h3><h1>Get Started</h1></div>
    <div>
      <StyledInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={inputNameHandler}
      />
      <StyledInput
        type="text"
        placeholder="Email"
        value={userId}
        onChange={inputIdHandler}
      ></StyledInput>
      <StyledInput
        type="text"
        placeholder="Password"
        value={password}
        onChange={inputPassHandler}
      ></StyledInput>
      <input type="checkbox" name="signup" value="signup-page"></input>

      <button onClick={inputSubmit} id="signup-button">SignUp</button>
    </div>
  </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (name: string, id: string, pass: string) => dispatch(signUp(name, id, pass)),

  };
};
export default connect(null, mapDispatchToProps)(Signup);