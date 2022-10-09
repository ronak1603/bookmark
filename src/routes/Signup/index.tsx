import React, { Fragment, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useFormik } from "formik";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


import { signUpRequest } from "./../../store/actions/index";
import * as style from "./style";
import foto from "./../../assests/foto.svg";
import { signUpSchema } from "../../schemas/index"
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { Link
 } from "react-router-dom";


interface propsType {
  signUp: (obj: any) => void;
  signingSpinner: boolean,
}

const SpinDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  margin-top: 15%;
`;

const Signup = (props: propsType) => {
  const [togglePassword, setTogglePassword] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
      console.log(values);
        // let obj = {
        //   name: values.name,
        //   email: values.email,
        //   password: values.password,
        // }
        props.signUp(values);
        action.resetForm();
      },
    });

  const handleToggler = (): void => {
    setTogglePassword(prevTogglePassword => !prevTogglePassword)
  }

  // const afterSignup = ()=>{
  //   console.log("abuytt to navuiagey et==to")
  //   navigate("/about");
  // }

  return (
  <Fragment>
    <style.StyleMainDiv>
      <style.LeftDiv>
        <style.HeadingDiv>Welcome,<br /><b>Get Started</b></style.HeadingDiv>
        <style.Styleimg src={foto} />
      </style.LeftDiv>

      <style.Rightdiv>
        <style.StyledDiv onSubmit={(e:any) => { e.preventDefault(); handleSubmit() ; }}>
          <style.StyledInput
            type="text"
            placeholder="Name"
            autoComplete="off"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <style.ErrorDiv>{touched.name && errors.name ? (<p>{errors.name}</p>) : null}</style.ErrorDiv>

          <style.StyledInput
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
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
            ></style.PassInput>

            <style.EyeDiv onClick={handleToggler}>{togglePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</style.EyeDiv>
          </style.PasswordDiv>

          <style.ErrorDiv>{touched.password && errors.password ? (<p>{errors.password}</p>) : null}</style.ErrorDiv>

          <style.CheckDiv>
            <style.CheckInput type="checkbox" name="signup" value="signup-page"></style.CheckInput>
            <style.CheckText>By signing up, you agree to the <style.StyledLink href="/terms">Terms of Service and Privacy Policy</style.StyledLink></style.CheckText>
          </style.CheckDiv>

          <style.StyledButton  type="submit">{props.signingSpinner===true? "...signing in" : "Sign Up"}</style.StyledButton>

          <style.StyledText> Or with </style.StyledText>

          <style.GoogleButton ><style.StyleIconDiv><FcGoogle size="70%" /></style.StyleIconDiv><style.StyleIconText>Sign Up with Google</style.StyleIconText></style.GoogleButton>
          <style.LoginText>Already have an account? &nbsp; <Link style={{ color: "#5352ed" }} to="/login">
            {" "}
            Login
          </Link></style.LoginText>
        </style.StyledDiv>
      </style.Rightdiv>
    </style.StyleMainDiv>
    
  </Fragment>
  );
};

const mapStateToProps = (state:any) => {
  return {
    signingSpinner: state.userAuthReducer.signingSpinner,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (obj: any) => dispatch(signUpRequest(obj)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
