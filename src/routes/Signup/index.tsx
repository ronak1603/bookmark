import { Dispatch } from "redux";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { signUp } from "./../../store/actions/index";

import styled from "styled-components";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";

import foto from "./../../assests/foto.svg";

interface propsType {
  signUp: (name: string, id: string, pass: string) => void;
}
const Signup = (props: propsType) => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  // const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };

  // const inputIdHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setUserId(e.target.value);
  // };

  // const inputPassHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   setPassword(e.target.value);
  // };

  // const inputSubmit = (): void => {

  //   props.signUp(name, userId, password);
  //   setPassword(".....");
  // }

  const StyleMainDiv = styled.div`
  display:flex;
  flex-direction:row;`

  const LeftDiv = styled.div`
  height:97vh;
  width:55vw;
  background:linear-gradient(to right,#5352ed 65%,#ffffff 65%);
  // background-color:#5352ed;
  display:flex;
  flex-direction:column;
  
  @media only screen and (max-width: 600px) {
    display:none;
  }
  `

  const HeadingDiv = styled.div`
  height:5%;
  width:70%;
  // border: 1px solid black;
  margin-top:50px;
  padding-left:15%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
      display:none;
  }
  font-size: 30.1818px;
  line-height: 51px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  `

  const Rightdiv = styled.div`
    // background-color:whitesmoke;
    height:96vh;
    width:45vw;
    display:flex;
    // border: 1px solid black;
    font-family: 'Inter', sans-serif; 
    justify-content:center;
    @media screen and (max-width:300px){
      width:97vw;
    }
    @media screen and (min-width:301px) and (max-width:600px){
      width:97.5vw;
    }
    @media screen and (min-width:601px) and (max-width:1200px){
     width:45vw;
    }
    `

  const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    justify-content:center;
    align-items:center;
    // border: 1px solid black;
    padding-top:15%;
    @media screen and (max-width:300px){
      width:95%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      width:90%; 
    }
    @media screen and (min-width:501px) and (max-width:600px) {
      width:90%;
    }
    @media screen and (min-width:601px) and (max-width:700px) {
      width:85%;
    }
    @media screen and (min-width:701px) and (max-width:1050px) {
      width:80%;
    }
    @media screen and (min-width:1050px) and (max-width:1200px) {
      width:80%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px) {
      width:80%;
    }
    `

  const StyledInput = styled.input`
    background: #FFFFFF;  
    border: 1px solid #F1F1FA;
    border-radius: 16px;
    margin-top:5%;
    width: 70.5%;
    height: 8%;
    font-family: 'Inter', sans-serif;
    &::-webkit-input-placeholder{
      padding-left:3%;
    }
    @media screen and (max-width:300px){
      height:8%;
      width:90%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      height:9%;
      width:90%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:10%;
      width:90%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:8%;
      width:80%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:9%;
      width:80%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:10%;
      width:80%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:20%;
      width:80%;
    }
    `
  const PasswordDiv = styled.div`
      display:flex;
      flex-direction:row;
      align-items:center;
      background: #FFFFFF;  
      border: 2px solid #F1F1FA;
      border-radius: 16px;
      margin-top:5%;
      width: 71%;
      height: 8%;
      font-family: 'Inter', sans-serif;
      @media screen and (max-width:300px){
        height:8%;
        width:90%;
      }
      @media screen and (min-width:301px) and (max-width:500px){
        height:9%;
        width:90%;
      }
      @media screen and (min-width:501px) and (max-width:600px){
        height:10%;
        width:90%;
      }
      @media screen and (min-width:601px) and (max-width:900px){
        height:8%;
        width:80%;
      }
      @media screen and (min-width:901px) and (max-width:1050px){
        height:9%;
        width:80%;
      }
      @media screen and (min-width:1051px) and (max-width:1200px){
        height:10%;
        width:80%;
      }
      @media screen and (min-width:1201px) and (max-width:1500px){
        height:20%;
        width:80%;
      }
      `
  const PassInput = styled.input`
      width:95%;
      border:none;
      height:100%;
      border-radius: 16px;
      font-family: 'Inter', sans-serif;
      &::-webkit-input-placeholder{
        padding-left:3%;
      }
      @media screen and (max-width:1200px){
        height:100%;
      }
      `
  const EyeDiv = styled.div`
  padding-right:2%;
      `

  const CheckDiv = styled.div`
    display:flex;
    flex-direction:row;
    width:75%;
    justify-content:flex-start;
    margin-top:5%;
    font-style: normal;
    font-weight: 350;
    font-size: 79.59%;
    line-height: 20px;
    @media screen and (max-width:300px){
      height:5%;
      width:90%;
      padding-top:3%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      height:7%;
      width:90%;
      margin-top:5%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:7%;
      width:90%;
      margin-top:5%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:7%;
      width:80%;
      margin-top:7%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:9%;
      width:80%;
      margin-top:5%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:10%;
      width:80%;
      margin-top:5%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:10%;
      width:80%;
      margin-top:5%;
    }
    `

  const CheckInput = styled.input`
    width: 10%;
    height: 50%;
    padding: 0px 0px 8px 16px;
    border-radius:2px;
    border-color:red;
    @media screen and (max-width:300px){
      height:60%;
      width:7%;
    }
    @media screen and (min-width:301px) and (max-width:500px) {
      height:60%;
      width:7%;
    }
    @media screen and (min-width:501px) and (max-width:600px) {
      height:60%;
      width:5%;
    }
    @media screen and (min-width:601px) and (max-width:900px) {
      height:50%;
      width:7%;
    }
    @media screen and (min-width:901px) and (max-width:1200px) {
      height:50%;
      width:5%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:50%;
      width:7%;
     
    }
    `

  const CheckText = styled.p`
  width:100%;
  height:60%;
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 14.7959px;
  line-height: 20px;
  padding-left:1%;
  @media screen and (max-width:1200px){
    width:100%;
  }
  // @media screen and (min-width:1200px) and (max-width:){
  //   width:100%;
  // }
  `

  const StyledButton = styled.button`
    // padding: 8px 16px;
    width: 73%;
    height: 8%;
    margin-top: 2%;
    background:#5352ED;
    color:white;
    border: 1px solid #F1F1FA;
    border-radius: 16px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 90%;
    line-height: 22px;
    @media screen and (max-width:300px){
      height:9%;
      width:90%;
      margin-top:15%;
    }
    @media screen and (min-width:301px) and (max-width:400px){
      height:10%;
      width:90%;
      margin-top:10%;
    }
    @media screen and (min-width:401px) and (max-width:500px){
      height:10%;
      width:90%;
      margin-top:5%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:10%;
      width:93%;
      margin-top:5%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:8%;
      width:80%;
      margin-top:10%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:9%;
      width:80%;
      margin-top:4%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:10%;
      width:80%;
      margin-top:4%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:20%;
      width:80%;
      margin-top:5%;
    }
    `


  const StyledText = styled.div`
    display:flex;
    justify-content:center;
    width:73%;
    margin-top:2%;
    font-family: 'Inter', sans-serif;
    @media screen and (max-width:600px){
      margin-top:3%;
      width:100%;
    }
    @media screen and (min-width:601px) and (max-width:1200px){
      margin-top:3%;
      width:100%;
    }
      `
  const GoogleButton = styled.button`
    // padding: 8px 16px;
    width: 73%;
    height: 8%;
    margin-top: 1%;
    border: 1px solid #F1F1FA;
    border-radius: 16px;
    background: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 90%;
    line-height: 50%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:300px){
      height:10%;
      width:90%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      height:10%;
      width:90%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:10%;
      width:90%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:9%;
      width:80%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:9%;
      width:80%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:10%;
      width:80%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:20%;
      width:80%;
    }`

  const StyleIconDiv = styled.div`
    display:flex;
    justify-content:center;
    width:10%;
    margin-top:2%;
    @media screen and (max-width:300px){
      width:15%;
      margin-top:1%;
      margin-left:15%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      width:15%;
      // padding-top:1%;
      padding-left:25%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      width:10%;
      // paadding-top:0.3%;
      padding-left:25%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      width:15%;
      // margin-top:0.3%;
      padding-left:10%;
    }
    @media screen and (min-width:901px) and (max-width:1200px){
      width:15%;
      margin-top:0.3%;
      padding-left:20%;
    }
    `

  const StyleIconText = styled.div`
    display:flex;
    margin-top:2%;
    @media screen and (max-width:400px){
      width:80%;
      margin-top:3%;
    }
    @media screen and (min-width:401px) and (max-width:500px){
      width:80%;
      margin-top:2%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      width:80%;
      margin-top:1.5%;
    }
    @media screen and (min-width:601px) and (max-width:700px){
      width:100%;
      margin-top:1.5%;
    }
    @media screen and (min-width:701px) and (max-width:1200px){
      width:100%;
      margin-top:0.7%;
    }
    `

  const LoginText = styled.h4`
    display:flex;
    justify-content:center;
    width:73%;
    margin-top:6%;
    color:#91919F;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 90.6239%;
    line-height: 3%;
    @media screen and (max-width:1200px){
      width:90%;
    }
    `

  const Styleimg = styled.img`
  height:85%;
  width:85%;
  margin-left:12%;
  @media screen and (min-width:600px) and (max-width:900px) {
    width:85%;
    height:85%;
  }
  @media screen and (min-width:900px) and (max-width:1200px) {
    width:90%;
    height:85%;
  }
  `
  const StyledLink = styled.a`
  text-decoration:none;`

  const SignUpLink = styled.a`
  color: #5352ED;`

  return (<Fragment>
    <StyleMainDiv>
      <LeftDiv>
        <HeadingDiv>Welcome,<br /><b>Get Started</b></HeadingDiv>
        <Styleimg src={foto} />
      </LeftDiv>
      
      <Rightdiv>
        <StyledDiv>
          <StyledInput
            type="text"
            placeholder="Name"
          // value={name}
          // onChange={inputNameHandler}
          />
          <StyledInput
            type="text"
            placeholder="Email"
          // value={userId}
          // onChange={inputIdHandler}
          ></StyledInput>
          <PasswordDiv>
            <PassInput
              type="password"
              placeholder="Password"
            // value={password}
            // onChange={inputPassHandler}
            ></PassInput>
            <EyeDiv><AiOutlineEye /></EyeDiv>
          </PasswordDiv>
          <CheckDiv>
            <CheckInput type="checkbox" name="signup" value="signup-page"></CheckInput>
            <CheckText>By signing up, you agree to the <StyledLink href="/terms">Terms of Service and Privacy Policy</StyledLink></CheckText>
          </CheckDiv>
          <StyledButton id="signup-button">Sign Up</StyledButton>
          <StyledText> Or with </StyledText>
          <GoogleButton id="signup-button"><StyleIconDiv><FcGoogle size="70%" /></StyleIconDiv><StyleIconText>Sign Up with Google</StyleIconText></GoogleButton>
          <LoginText>Already have an account? &nbsp; <SignUpLink href="/login">Login</SignUpLink></LoginText>
        </StyledDiv>
      </Rightdiv>
    </StyleMainDiv>
  </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signUp: (name: string, id: string, pass: string) => dispatch(signUp(name, id, pass)),

  };
};

export default connect(null, mapDispatchToProps)(Signup);
