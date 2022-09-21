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

export const StyledInput = styled.input`
  background: #FFFFFF;  
  border: 1px solid #F1F1FA;
  border-radius: 16px;
  padding-left:2%;
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
    height:6%;
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
  }
  `
export const PasswordDiv = styled.div`
    display:flex;
    // flex-direction:row;
    align-items:center;
    background: #FFFFFF;
   
    // border: 2px solid #F1F1FA;
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
      height:6%;
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
    }
    `
export const PassInput = styled.input`
    width:95%;
    border:none;
    padding-left:5%;
    height:100%;
    border: 1px solid #F1F1FA;
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
    `

export const StyledButton = styled.button`
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
    height:7%;
    width:80%;
    margin-top:7%;
  }
  @media screen and (min-width:901px) and (max-width:1050px){
    height:8%;
    width:80%;
    margin-top:6%;
  }
  @media screen and (min-width:1051px) and (max-width:1200px){
    height:9%;
    width:80%;
    margin-top:6%;
  }
  @media screen and (min-width:1201px) and (max-width:1500px){
    height:9%;
    width:80%;
    margin-top:6%;
  }
  `
export const StyledText = styled.div`
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

export const LoginText = styled.h4`
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
text-decoration:none;
color: #5352ED;`

export const SignUpLink = styled.a`
color: #5352ED;`

export const ErrorDiv = styled.div`
padding-top:2%;
// margin-right:25%;
font-size:small;
color:red;
// border:1px solid black;`
