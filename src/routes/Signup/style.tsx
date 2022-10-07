import styled from "styled-components";

export const StyleMainDiv = styled.div`
  display:flex;
  flex-direction:row;`

export const LeftDiv = styled.div`
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

export const HeadingDiv = styled.div`
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

export const Rightdiv = styled.div`
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

export const StyledDiv = styled.form`
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

export const StyledInput = styled.input`
    background: #FFFFFF;  
    border: 1px solid #F1F1FA;
    border-radius: 16px;
    margin-top:5%;
    width: 70.5%;
    padding:2%;
    height: 6%;
    outline:none;
    font-family: 'Inter', sans-serif;
    &:hover {
      box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
    }
    &::-webkit-input-placeholder{
      padding-left:3%;
    }
    &::-webkit-input-value{
      padding-left:3%;
    }
    @media screen and (max-width:300px){
      height:5%;
      width:90%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      height:5%;
      width:90%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:5%;
      width:90%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:5%;
      width:80%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:5%;
      width:80%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:5%;
      width:80%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:5%;
      width:80%;
    }
    `
export const PasswordDiv = styled.div`
    &:hover {
      box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
    }
      display:flex;
      flex-direction:row;
      align-items:center;
      background: #FFFFFF;  
      border: 2px solid #F1F1FA;
      border-radius: 16px;
      margin-top:7%;
      width: 71%;
      height: 5%;
      outline:none;
      font-family: 'Inter', sans-serif;
      @media screen and (max-width:300px){
        height:5%;
        width:90%;
      }
      @media screen and (min-width:301px) and (max-width:500px){
        height:5%;
        width:90%;
      }
      @media screen and (min-width:501px) and (max-width:600px){
        height:5%;
        width:90%;
      }
      @media screen and (min-width:601px) and (max-width:900px){
        height:5%;
        width:80%;
      }
      @media screen and (min-width:901px) and (max-width:1050px){
        height:6%;
        width:80%;
      }
      @media screen and (min-width:1051px) and (max-width:1200px){
        height:6%;
        width:80%;
      }
      @media screen and (min-width:1201px) and (max-width:1500px){
        height:6%;
        width:80%;
      }
      `
export const PassInput = styled.input`
      width:95%;
      border:none;
      height:100%;
      padding:4%;
      outline:none;
      &:hover {
        box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
      }
      border-radius: 16px;
      font-family: 'Inter', sans-serif;
      &::-webkit-input-placeholder{
        padding-left:3%;
      }
      @media screen and (max-width:1200px){
        height:100%;
      }
      `
export const EyeDiv = styled.div`
  padding-right:2%;
  margin-left:-2em;
  cursor:pointer;
      `

export const CheckDiv = styled.div`
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

export const CheckInput = styled.input`
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

export const CheckText = styled.p`
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

export const StyledButton = styled.button`
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
    cursor:pointer;
    &:hover {
      box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
    }
    @media screen and (max-width:300px){
      height:7%;
      width:90%;
      margin-top:15%;
    }
    @media screen and (min-width:301px) and (max-width:400px){
      height:8%;
      width:90%;
      margin-top:10%;
    }
    @media screen and (min-width:401px) and (max-width:500px){
      height:8%;
      width:90%;
      margin-top:5%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:8%;
      width:93%;
      margin-top:5%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:6%;
      width:80%;
      margin-top:10%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:7%;
      width:80%;
      margin-top:4%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:8%;
      width:80%;
      margin-top:4%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:8%;
      width:80%;
      margin-top:5%;
    }
    `


export const StyledText = styled.div`
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
export const GoogleButton = styled.button`
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
    cursor:pointer;
    &:hover {
      box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
    }
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    @media screen and (max-width:300px){
      height:7%;
      width:90%;
    }
    @media screen and (min-width:301px) and (max-width:500px){
      height:7%;
      width:90%;
    }
    @media screen and (min-width:501px) and (max-width:600px){
      height:8%;
      width:90%;
    }
    @media screen and (min-width:601px) and (max-width:900px){
      height:7%;
      width:80%;
    }
    @media screen and (min-width:901px) and (max-width:1050px){
      height:7%;
      width:80%;
    }
    @media screen and (min-width:1051px) and (max-width:1200px){
      height:8%;
      width:80%;
    }
    @media screen and (min-width:1201px) and (max-width:1500px){
      height:8%;
      width:80%;
    }`

export const StyleIconDiv = styled.div`
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

export const StyleIconText = styled.div`
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

export const LoginText = styled.h4`
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

export const Styleimg = styled.img`
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
export const StyledLink = styled.a`
  text-decoration:none;`

export const SignUpLink = styled.a`
  color: #5352ED;`

export const ErrorDiv = styled.div`
  padding-top:2%;
  // margin-right:25%;
  font-size:small;
  color:red;
  // border:1px solid black;  
`