import React, { Fragment, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";


import { signUpSuccess } from "./../../store/actions/index";
import * as style from "./style";
import foto from "./../../assests/foto.svg";

interface propsType {
  signUp: (name: string, id: string, pass: string) => void;
}
const Signup = (props: propsType) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
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

  return (<Fragment>
    <style.StyleMainDiv>
      <style.LeftDiv>
        <style.HeadingDiv>Welcome,<br /><b>Get Started</b></style.HeadingDiv>
        <style.Styleimg src={foto} />
      </style.LeftDiv>
      
      <style.Rightdiv>
        <style.StyledDiv>
          <style.StyledInput
            type="text"
            placeholder="Name"
            value={name}
            onChange={inputNameHandler}
          />
          <style.StyledInput
            type="text"
            placeholder="Email"
          value={userId}
          onChange={inputIdHandler}
          ></style.StyledInput>
          <style.PasswordDiv>
            <style.PassInput
              type="password"
              placeholder="Password"
            value={password}
            onChange={inputPassHandler}
            ></style.PassInput>
            <style.EyeDiv><AiOutlineEye /></style.EyeDiv>
          </style.PasswordDiv>
          <style.CheckDiv>
            <style.CheckInput type="checkbox" name="signup" value="signup-page"></style.CheckInput>
            <style.CheckText>By signing up, you agree to the <style.StyledLink href="/terms">Terms of Service and Privacy Policy</style.StyledLink></style.CheckText>
          </style.CheckDiv>
          <style.StyledButton id="signup-button" onClick={inputSubmit}>Sign Up</style.StyledButton>
          <style.StyledText> Or with </style.StyledText>
          <style.GoogleButton id="signup-button"><style.StyleIconDiv><FcGoogle size="70%" /></style.StyleIconDiv><style.StyleIconText>Sign Up with Google</style.StyleIconText></style.GoogleButton>
          <style.LoginText>Already have an account? &nbsp; <style.SignUpLink href="/login">Login</style.SignUpLink></style.LoginText>
        </style.StyledDiv>
      </style.Rightdiv>
    </style.StyleMainDiv>
  </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (name: string, id: string, pass: string) => dispatch(signUpSuccess(name, id, pass)),

  };
};

export default connect(null, mapDispatchToProps)(Signup);
