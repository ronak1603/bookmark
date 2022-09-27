import react from 'react'
import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createBookmarkRequest, deleteBookmarkRequest, getBookmarkRequest } from '../../store/actions';
import styled from 'styled-components';

import { Button, Input } from "@mui/material";
import Box from "@mui/material/Box";
import image from "./../../assests/image.svg"



const CustomLinkBox = styled.div`
  background-color: #5352ed;
  flex: none;
  height: 200px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
  padding-left: 35px;

`;
const LinkHeading = styled.div`

`
const URLInput = styled.input`

`

const URLHeading = styled.div`

`

const FolderHeading = styled.div`
  
`

const RootFolder = styled.div`

`
const CustomButton = styled.button`
`

const Img = styled.img`
  width: 300px;
  height: 280px;
  border-radius: 15px;
  margin: -60px 20px 0px 700px;
`;

type bookmarkType={
    createBookmark:(obj:propsType) => void;
    getBookmarks: () => void,
    deleteBookmarkId:(obj:deleteTypes) => void,
    bookmarks: any[],
}
interface propsType{
    url:string;
    name:string; 
}

interface deleteTypes{
    bookmarkId:string;
}
const Bookmark = (props:bookmarkType) => {
    const[bookmark, setBookmark] = useState("");
    const[urlName,setUrlName] = useState("");
    const[deleteBookmarkId,setDeleteBookmarkId] = useState("");
    const addBookmark = () => {
        let obj={
            url:bookmark,
            name:urlName,
        }
        setBookmark("");
        setUrlName("");
        props.createBookmark(obj);
       
    }

    const deleteBookmark = () => {
        let obj={
            bookmarkId:"258744b2-5a57-4dc2-9267-07a2fe98588c",
        }
        props.deleteBookmarkId(obj);
    }

    return(<>
        <input type="text" value={bookmark} placeholder="Enter Url" onChange={(e) => setBookmark(e.target.value)}/>
        <input type="text" value={urlName} placeholder="Enter Bookmark Name" onChange={(e) => setUrlName(e.target.value)}/>
        <button onClick={addBookmark}>create bookmark</button>
        <button onClick={() => {props.getBookmarks()}}>get bookmark</button>
        <button onClick={deleteBookmark}>delete bookmark</button>
        
        <CustomLinkBox>
        <LinkHeading>Add Quick Link</LinkHeading>
        <URLHeading>URL</URLHeading>
        <URLInput
          type="text"
          placeholder="Paste URL here"
          onChange={(e) => setUrlName(e.target.value)}
        ></URLInput>
        <FolderHeading>Folder</FolderHeading>
        <RootFolder>Root</RootFolder>
        <CustomButton>
          Save
        </CustomButton>
        <Img src={image} alt="AddLink" />
      </CustomLinkBox>

        </>
    )
};

const mapStateToProps = (state: any) => {
    return {
      bookmarks: state.bookmarksReducer.bookmarks,
    }
  }

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
    createBookmark: (obj:propsType) => dispatch(createBookmarkRequest(obj)),
    getBookmarks:() => dispatch(getBookmarkRequest()),
    deleteBookmarkId:(obj:deleteTypes) => dispatch(deleteBookmarkRequest(obj)),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);