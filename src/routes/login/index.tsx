import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import foto from "./../../assests/foto.svg";
import * as style from "../Login/style"
import { loginRequest } from '../../store/actions';
import { useFormik } from 'formik';
import { signUpSchema } from '../../schemas';
import styled from 'styled-components';


interface propsType {
  login: (obj: any) => void;
  loginSpinner: boolean,
}
function Login(props: propsType) {
  // const navigate = useNavigate();
  // const loginHandler = (): void => {
  //   localStorage.setItem("Login", "true");
  //   navigate('/home');
  // }
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  const handleToggler = (): void => {
    setTogglePassword(prevTogglePassword => !prevTogglePassword)
  }

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      // validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
      console.log(values);
        props.login(values);
        action.resetForm();
      },
    });

  return (<Fragment>
    <style.StyleMainDiv>
      <style.LeftDiv>

        <style.HeadingDiv>Welcome,<br /><b>Get Started</b></style.HeadingDiv>
        <style.Styleimg src={foto} />

      </style.LeftDiv>
      <style.Rightdiv>
        <style.StyledDiv  onSubmit={(e:any) => {e.preventDefault(); handleSubmit();}}>

          <style.StyledInput
             type="email"
             placeholder="Email"
             name="email"
             value={values.email}
             onChange={handleChange}
             onBlur={handleBlur}
             required
          ></style.StyledInput>
          <style.ErrorDiv>{touched.email && errors.email ? (<p>{errors.email}</p>) : null}</style.ErrorDiv>

          <style.PasswordDiv>
            <style.PassInput
             type={togglePassword ? "text" : "password"}
             name="password"
             placeholder="Password"
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
             required
            ></style.PassInput>

            <style.EyeDiv onClick={handleToggler}>{togglePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</style.EyeDiv>

          </style.PasswordDiv>
          <style.ErrorDiv>{touched.password && errors.password ? (<p>{errors.password}</p>) : null}</style.ErrorDiv>

          <style.StyledButton type="submit">{props.loginSpinner===true? "...Submitting" : "Submit"}</style.StyledButton>

          <style.StyledText><style.StyledLink href="/"><b>Forgot Password?</b></style.StyledLink></style.StyledText>

          <style.LoginText>Don't have an account yet? &nbsp; <style.SignUpLink href="/">Sign Up</style.SignUpLink></style.LoginText>

        </style.StyledDiv>
      </style.Rightdiv>
    </style.StyleMainDiv>

  </Fragment>
  )
}

const mapStateToProps = (state:any) => {
  return {
    loginSpinner: state.userAuthReducer.loginSpinner,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (obj: any) => dispatch(loginRequest(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);