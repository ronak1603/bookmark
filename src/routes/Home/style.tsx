import styled from "styled-components"

export const MainDiv = styled.div`
height:99vh;
display:flex;
`
export const LeftDiv = styled.div`
width:20vw;
height:98vh;
border:1px solid black;
`
export const RightDiv = styled.div`
height:98vh;
width:80vw;
border:1px solid black;
`
export const StyledImg = styled.img`
margin-left:5%;
margin-top:5%;
`
export const HeadingDiv = styled.div`
font-size: 1.5rem;
font-family: Inter, sans-serif;
margin-left: 5%;
margin-top: 3%;
font-weight: 300;
`
export const SearchDiv = styled.div`
  display: flex;
  width: 80%;
  margin-left: 5%;
  margin-top: 10%;
  border: 2px solid #f1f1fa;
  border-radius: 1em;
`;

export const Icon = styled.div`
margin-top: 5%;
margin-left: 5%;

`

export const Input = styled.input`
padding: 5%;
border: none;
box-sizing: border-box;
&:focus {
    outline: none;
  }
`
export const FolderDiv = styled.div`
  display: flex;
  height:20%;
  // border:2px solid blue;
  overflow-y: auto;
  flex-direction: column;
  margin-top: 10%;
`

export const Folder = styled.div`
  display: flex;
  align-items: center;

  padding: 2%;
  box-sizing: border-box;
  width: 80%;
  margin-left:2%;
  margin: auto;
  &:hover {
    background: #e4e3ff;
    border-radius: 1em;
  }
`
export const FolderIcon = styled.div`
  font-size: 1.8em;
  margin-left:3%;
  margin-right: 5%;
  color: blue;
`
export const FolderName = styled.p`
  font-family: Inter, sans-serif;
  font-weight: 500;
`

export const FavouriteButton = styled.button`
  width: 80%;
  margin: auto;
  margin-top: 60%;
  margin-bottom: 3%;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  padding: 3.5%;
  background: transparent;
  border: none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #77757f;
  background: #e4e3ff;
  border-radius: 1em;
`

export const FavIcon = styled.div`
  color: #5352ed;
  margin-left: 3%;
  padding: 1%;
  font-size: 1em;
  margin-right: 5%;
`

export const LogoutButton = styled.button`
  width: 80%;
  margin: auto;
  display: flex;
  font-size: 1.2em;
  align-items: center;
  padding: 3.5%;
  background: transparent;
  border: none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #77757f;
  border-radius: 1em;
`

export const LogoutIcon = styled.div`
  margin-left: 3%;
  padding: 1%;
  font-size: 1em;
  margin-right: 5%;
  color: #5352ed;
`;

export const SaveButton = styled.div`
  background-color: white;
  color: #5352ed;
  font-weight: 400;
  display:flex;
  justify-content:center;
  align-items:center;
  :hover {
    color: #5352ed;
    background-color: white;
  }
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 9px;
  height: 5%;
  width:80%;
  border: solid 2px #5352ed;
  font-family: Inter, sans-serif;
`

export const CustomModalInput = styled.input`
  margin-top: 3%;
  margin-left: 8%;
  border-radius: 10px;
  border: solid 1px #6c6bf9;
  width: 80%;
  height: 15%;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-indent: 5px;
  font-size: 13px;
  padding-left: 5px;
  flex: none;
  order: 0;
  flex-grow: 1;
  font-family: Inter, sans-serif;
`

export const CustomButton = styled.button`
  margin-left: 30%;
  margin-top: 10%;
  color: white;
  border:none;
  background: #5352ed;
  border-radius: 11px;
  padding: 8px 25px 8px 25px;
  font-size: 12px;
  font-weight: 600;
  font-family: Inter, sans-serif;
`

export const Heading = styled.div`
  color: black;
  font-family: Inter, sans-serif;
  font-weight: bold;
  padding-top: 10%;
  margin-left: 26px;
  width:80%;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
`
export const Name = styled.div`
  color: gray;
  font-size: 16px;
  margin-left: 6px;
  margin-top: 7px;
  padding: 30px 0px 0px 20px;
  font-family: Inter, sans-serif;
`

export const ModalBox = styled.div`
  align-items: center;
  margin-left: 600px;
  margin-top: 260px;
  height: 250px;
  width: 300px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`

export const Headingdiv = styled.div`
width:90%;
`
