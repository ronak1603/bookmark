import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Modal from "@mui/material/Modal";

import Bookmark from "./bookmark";
import Rename from "./renameFolders"

import { createFolderRequest, getFolderRequest } from "../../store/actions";
import * as style from "./style";
import Vector from "./../../assests/Vector.svg";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillFolderFill } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io"
import { MdFavorite } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import createFolder from '../../store/saga/createFolder';

interface propsType {
  createFolder: (name: string) => void,
  getFolders: () => void,
  folders: any[],
};




const Home = (props: propsType) => {
  const [folder, setFolder] = useState("");

  const folderNewName = (e: any) => {
    setFolder(e.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (<>
    <style.MainDiv>
      <style.LeftDiv>
        <style.StyledImg src={Vector} />

        <style.HeadingDiv><b>BOOKMARK</b></style.HeadingDiv>

        <style.SearchDiv>
          <style.Icon><AiOutlineSearch /></style.Icon>
          <style.Input placeholder="Search..." type="text" />
        </style.SearchDiv>

        <style.FolderDiv>
          {props.folders.map((folder) => {
            return (
              <style.Folder>
                <IoMdArrowDropright />
                <style.FolderIcon><BsFillFolderFill /></style.FolderIcon>
                <style.FolderName key={folder.id}>{folder.name}</style.FolderName>
              </style.Folder>
            );
          })}

        </style.FolderDiv>

        <style.SaveButton onClick={() => handleOpen()}>+ Add Folder</style.SaveButton>
        <Modal open={open}>
          <style.ModalBox>
            <style.Heading>
              <style.Headingdiv>Create Folder</style.Headingdiv>
              
                <AiOutlineClose onClick={() => handleClose()}/>
              
            </style.Heading>

            <style.Name>Folder Name</style.Name>
            <style.CustomModalInput
              type="text"
              onChange={folderNewName}
              placeholder="Enter Folder Name"
            />
            <style.CustomButton onClick={() => props.createFolder(folder)}>
              Submit
            </style.CustomButton>

          </style.ModalBox>
        </Modal>

        <style.FavouriteButton>
          <style.FavIcon><MdFavorite /></style.FavIcon>
          Favourites
        </style.FavouriteButton>

        <style.LogoutButton onClick={() => { localStorage.clear(); }} type="submit">
          <style.LogoutIcon><TbLogout /></style.LogoutIcon>
          Logout
        </style.LogoutButton>

      </style.LeftDiv>

      <style.RightDiv>
        <div>Home Page</div>
        <input type="text" onChange={(e) => { setFolder(e.target.value) }} />
        <button onClick={() => { props.createFolder(folder); setFolder(""); }}>create folder</button>
        <button onClick={() => { props.getFolders() }}>get folder</button>
        <br />
        <br />
        <Bookmark />
      </style.RightDiv>

    </style.MainDiv>
  </>

  )
}

const mapStateToProps = (state: any) => {
  return {
    folders: state.foldersReducer.folders,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: string) => dispatch(createFolderRequest(name)),
    getFolders: () => dispatch(getFolderRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);