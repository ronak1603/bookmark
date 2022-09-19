import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import foto from "./../../assests/foto.svg";

function Login() {
  // const navigate = useNavigate();
  // const loginHandler = (): void => {
  //   localStorage.setItem("Login", "true");
  //   navigate('/home');
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
      width:87%;
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
      height:10%;
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
        height:10%;
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

  const StyledButton = styled.button`
    // padding: 8px 16px;
    width: 73%;
    height: 9%;
    margin-top: 4%;
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
      margin-top:6%;
    }
    @media screen and (min-width:301px) and (max-width:400px){
      height:10%;
      width:90%;
      margin-top:6%;
    }
    @media screen and (min-width:401px) and (max-width:500px){
      height:10%;
      width:90%;
      margin-top:6%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:10%;
      width:90%;
      margin-top:6%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:9%;
      width:80%;
      margin-top:5%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:10%;
      width:80%;
      margin-top:6%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:11%;
      width:80%;
      margin-top:6%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:11%;
      width:80%;
      margin-top:6%;
    }
    `
  const StyledText = styled.div`
    display:flex;
    justify-content:center;
    width:73%;
    margin-top:5%;
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

  const LoginText = styled.h4`
    display:flex;
    justify-content:center;
    width:73%;
    margin-top:6%;
    color:#91919F;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 10%;
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
  text-decoration:none;
  color: #5352ED;`

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
          <StyledButton id="signup-button">Login</StyledButton>
          <StyledText><StyledLink href="/"><b>Forgot Password?</b></StyledLink></StyledText>
          <LoginText>Don't have an account yet? &nbsp; <SignUpLink href="/">Sign Up</SignUpLink></LoginText>
        </StyledDiv>
      </Rightdiv>
    </StyleMainDiv>
  </Fragment>
  )
}

export default Login