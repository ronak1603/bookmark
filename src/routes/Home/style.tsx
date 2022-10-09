import styled, {css} from "styled-components";


export const MainDiv = styled.div`
height:99vh;
display:flex;
overflow:hidden;
`
export const LeftDiv = styled.div`
width:17%;
height:100%;
// border:1px solid black;
box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
`
export const RightDiv = styled.div`
height:100%;
width:83%;
// display:flex;
// flex-direction:column;
// border:1px solid black;
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
  background: #F4F4F4;
  margin-top: 10%;
  border: 2px solid #f1f1fa;
  border-radius: 1em;
  align-items:center;
`;

export const FolderDiv = styled.div`
display: flex;
  height:40%;
  // border:2px solid blue;
  overflow-y: auto;
  // justify-content:center;
  flex-direction: column;
  margin-top: 10%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const Folders = styled.div`
display: flex;
  align-items: center;
  // border: 1px solid black;
  padding: 2%;
  box-sizing: border-box;
  width: 80%;
  margin-left:7%;
  margin-top:1%;
  &:hover {
    background: #e4e3ff;
    border-radius: 1em;
  };
`
type folderProps = {id:string, name:any}

export const Folder = styled.div<folderProps>`
${(props) => props.id===props.name && css`
background: #E4E3FF;
border-radius: 1em;`}

  display: flex;
  align-items: center;
  // border: 1px solid black;
  padding: 2%;
  box-sizing: border-box;
  width: 80%;
  margin-left:7%;
  margin-top:1%;
  &:hover {
    background: #e4e3ff;
    border-radius: 1em;
  };
//   &:focus {
//     outline: none;
//     color: black;
// };
`
export const FolderIcon = styled.div`
  font-size: 1.8em;
  margin-left:3%;
  margin-right: 5%;
  color: #5352ED;
  display:flex;
  align-items:center;
  `
export const menuIcons = styled.button`
margin-left:10%;
background:none;
cursor:pointer;
border:none;
outline:none;
margin-right:2%;
&:hover {
  background:none;
}
`
export const FolderName = styled.div`
  font-family: Inter, sans-serif;
  // border: 1px solid black;
  width:60%;
  display:flex;
  align-items:center;
  font-weight: 500;
  cursor:pointer;
`

export const FavouriteButton = styled.button`
  width: 80%;
  margin-left: 5%;
  margin-top: 10%;
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
  &:hover{
    background: #e4e3ff;
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  };
  border-radius: 1em;
  cursor:pointer;
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
margin-left: 5%;
display: flex;
font-size: 1.2em;
  align-items: center;
  padding: 3.5%;
  background: transparent;
  border:none;
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #77757f;
  border-radius: 1em;
  cursor:pointer;
  &:hover{
    background: #e4e3ff;
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12),
    0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  };
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
  margin-top: 10%;
  margin-left: 5%;
  border-radius: 9px;
  height: 5%;
  width:80%;
  border: solid 2px #5352ed;
  font-family: Inter, sans-serif;
  cursor:pointer;
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
  cursor:pointer;
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

export const LinkBox = styled.div`
background-color: #5352ed;
display:flex;
height:40%;
// border:4px solid black;
flex-direction:row;
height: 200px;
margin-top: 20px;
padding: 20px;
  border-radius: 20px;
  padding-left: 35px;
  `

export const LeftLink = styled.div`
  diaplay:flex;
  flex-direction:row;
  width:60%;
  // border:1px solid black;
  `
export const RightLink = styled.div`
   width:40%;
// border:1px solid black;
`

export const LinkHeading = styled.div`
font-family: Inter, sans-serif;
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 25px;
display: flex;
align-items: center;
color: #F5F5F5;
`

export const URLHeading = styled.div`
margin-top:1%;
font-family: Inter, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #F5F5F5;
display: flex;
align-items: center;
`
export const URLInput = styled.input`
margin-top:1%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 55%;
height: 25%;
padding-left:15px;
padding-right:15px;
&::-webkit-input-placeholder{
  padding-left:4px;
  color:#FCFCFC;
  border:none;
}
background: #6C6BF9;
border-radius: 16px;
color: #FCFCFC;
border:none;
outline:none;
&:hover {
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
}
`
export const FolderHeading = styled.div`
margin-top:1%;
font-family: Inter, sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #F5F5F5;
display: flex;
align-items: center;
`;

export const RootFolder = styled.div`
margin-top:1%;
display: flex;
flex-direction: row;
align-items: center;
height: 22%;
`;

export const NameInput = styled.input`
margin-top:1%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 38%;
height: 100%;
padding-left:15px;
padding-right:15px;
&::-webkit-input-placeholder{
  padding-left:4px;
  color:#FCFCFC;
  border:none;
}
background: #6C6BF9;
border-radius: 16px;
color: #FCFCFC;
border:none;
outline:none;
&:hover {
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
}
`
export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top:1%;
height: 100%;
border:none;
background-color: #6c6bf9;
color:#FFFFFF;
border-radius: 16px;
width:13%;
cursor:pointer;
margin-left:6%;
&:hover{
  // background: #e4e3ff;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
};
`

export const SaveBookmark = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top:1%;
height: 100%;
border:none;
// background: #FFFFFF;
border-radius: 16px;
width:10%;
background-color: #6c6bf9;
color:#FFFFFF;
cursor:pointer;
margin-left:6%;
&:hover{
  // background: #e4e3ff;
  box-shadow: 0px 10px 20px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
};
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  padding-right:10%;
`;

export const Nav = styled.nav`
  height: 10%;
  display: flex;
  align-items:center;
  z-index: 12`

export const ProfileDiv = styled.div`
  width: 20%;
  // border: 1px solid black;
  height: 50%;
  margin-left: 80%;
  display: flex;
  flex-direction: row;
  `;
export const Dp = styled.div`
  width:20%;
  // background-color: skyblue;
`;

export const ProfileImg = styled.img`
height:100%;
width:100%;
`
export const UserDetail = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  // border:1px solid black;
`;
export const UserName = styled.div`
  height: 50%;
  width:100%;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #474749;
  // border:1px solid black;
  `;
export const UserEmail = styled.div`
  height: 50%;
  width:100%;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;
  color: #77757F;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const ProfileOption = styled.div`
  width:10%;
  display:flex;
  align-items:center;
  border:1px solid black;
  `;

export const searchdiv = styled.div`
  width:100%;
  height:6%;
margin-top:1%;
display:flex;
// flex-direction:row;
// border: 1px solid black;`

export const SearchBookmarkDiv = styled.div`
display: flex;
width: 30%;
height:97%;
margin-left: 1%;
background: #F4F4F4;
border: 1px solid black;
border-radius: 1em;
`
export const Icon = styled.div`
// margin-top: 5%;
// margin-left: 5%;
padding-left:1%;
width:5%;
display:flex;
justify-content:center;
align-items:center;
`

export const Input = styled.input`
padding: 3%;
border: none;
width:90%;
background: #F4F4F4;
// border:2px solid blue;
box-sizing: border-box;
&:focus {
    outline: none;
  }
`
export const BookmarkButton = styled.button`
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
  // margin-top: 10%;
  margin-left: 32%;
  border-radius: 9px;
  height: 100%;
  width:20%;
  border: solid 2px #5352ed;
  font-family: Inter, sans-serif;
  cursor:pointer;
`

export const DisplayDiv = styled.div`
width: 8%;
height: 45px;
margin-left: 8%;
display: flex;
// border: 1px solid black;
border-radius:16px;

:hover{
  cursor:pointer;
}
`
export const VerticalDiv = styled.div`
width: 50%;
height:100%;
border-radius:16px;
display:flex;
align-items:center;
justify-content:center;
background-color:#E6E2EA;
`

export const HorizontalDiv = styled.div`
width: 50%;
border-radius:16px;
display:flex;
align-items:center;
justify-content:center;
background-color:#5352ED;
`

export const GetBookmark = styled.div`
margin-top:1%;
width:100%;
height:44%;
// padding-left:2%;
// border:1px solid black;
display:flex;
flex-wrap: wrap;
display:flex;
// justify-content:center;
overflow-x: auto;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`
export const Bookmark = styled.div`
  display: flex;
  margin-top:1%;
  margin-left:2%;
  width: 22.5%;
  height:95%;
  // justify-content:center;
  // align-items:center;
  flex-direction:column;
  border-radius: 20px;
  border: 1px solid #E4E2E7;
  &:hover {
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  }
`;

export const BookmarkImage = styled.div`
// margin-top:2%;
margin-left:5%;
width:90%;
background:
filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
// border-radius: 16px;
height:50%;
:hover {
  cursor: pointer;
};
// border:1px solid black;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  // object-fit: cover;
`;
export const BookmarkName = styled.div`
margin-top:2%;
width:90%;
height:10%;
display:flex;
flex-wrap:wrap;
// border:1px solid black;
margin-left:5%;
`
export const BookmarkDescription = styled.div`
margin-left:7%;
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 15px;
display: flex;
// align-items: center;
flex-wrap:wrap;
color: #9D9B9F;
margin-top:1%;
width:90%;
height:18%;
overflow-y:auto;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
// border:1px solid black;
`

export const HorizontalBookmark = styled.div`
  display: flex;
  margin-top:1%;
  padding-left:1%;
  padding-right:1%;
  width: 100%;
  height:25%;
  // justify-content:center;
  // align-items:center;
  border: 1px solid black;
  // flex-direction:column;
  border-radius: 20px;
  border: 1px solid #E4E2E7;
  &:hover {
    box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
  }
`

export const HorizontalBookmarkImage = styled.div`
    height: 80%;
    margin-top: 8px;
    width: 9%;
    // border: 1px solid black;
    margin-left: 7%;
    :hover {
      cursor: pointer;
    };
  `

export const HorizontalImage = styled.img`
width:100%;
height:100%;
border-radius:12px;
`
export const HorizontalBookmarkTitle = styled.div`
    height: 80%;
    width: 35%;
    // border: 1px solid black;
    margin-left: 1.5%;
    margin-top: 8px;
    font-family: "Inter", sans-serif;
    `
export const HorizontalName = styled.div`
    height: 30%;
    margin-top: 1%;
    width: 100%;
    // border: 1px solid red;
    font-size: 16px;
    font-weight: 600;
    font-family:"Inter",sans-serif;
   `
export const HorizontalDescription = styled.div`
height: 50%;
    width: 100%;
    margin-top: 1.5%;
    font-size: 13px;
    // border: 1px solid black;
    overflow: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    color: #9d9b9f;
  `
export const PathVDiv = styled.div`
  width: 14%;
  // border: 1px solid red;
  height: 80%;
  margin-top: 8px;
  margin-left: 5%;
  display: flex;
  align-items:center;
  // flex-direction: column;
  // justify-content: center;
`
export const PathIconVDiv = styled.div`
  width: 15%;
  height: 65%;
  display: flex;
  align-items:center;
  color:#5352ED;
  // border: 1px solid black;
`
export const PathNameVDiv = styled.div`
    width: 75%;
    height: 70%;
    font-family:"Inter",sans-serif;
    display: flex;
    align-items:center;
    // border: 1px solid pink;
  `
export const OtherVDiv = styled.div`
  width: 23%;
  height: 80%;
  margin-top: 8px;
  // border: 1px solid black;
  margin-left: 5px;
  display: flex;
  align-items:center;
  // justify-content: center;
`
export const HFavDiv = styled.div`
width: 20%;
// border: 1px solid red;
height: 80%;
display:flex;
cursor:pointer;
align-items:center;
// margin-top:1.5%;
`

export const MoveVDiv = styled.div`
width: 20%;
margin-left: 2px;
height: 80%;
display:flex;
align-items:center;
cursor:pointer;
// margin-top:1.5%;
// border: 1px solid red;
`
export const EditVDiv = styled.div`
width: 20%;
margin-left: 2px;
// border: 1px solid red;
display:flex;
align-items:center;
cursor:pointer;
// justify-content:center;
// margin-top:1.5%;
height: 80%;
`
export const DeleteVDiv = styled.div`
width: 20%;
height: 80%;
// margin-top:1.5%;
display:flex;
align-items:center;
cursor:pointer;
// justify-content:center;
margin-left: 2px;
// border: 1px solid red;
`
export const VImage = styled.img`
width:50%;
height:50%;
// border-radius:10px;
`
