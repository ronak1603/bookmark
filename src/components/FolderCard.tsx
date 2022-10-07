import { Menu, MenuItem, Modal } from '@mui/material';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsFillFolderFill } from 'react-icons/bs';
import { IoMdArrowDropright } from 'react-icons/io';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { deleteFolderRequest, renameRequest } from '../store/actions';
import * as style from "../routes/Home/style";
import * as styles from "./../components/style";
import { FadeLoader } from 'react-spinners';

type renameTypes = {
  renameFolder: (obj: folderType) => void;
  deleteFolder: (obj: deleteFolderType) => void;
  id: string,
  folderSpinner: boolean,
  Loading:boolean,
}

interface folderType {
  folderId: string,
  name: string,
}
interface deleteFolderType {
  folderId: string,
}

const FolderCard = (props: renameTypes) => {
  const [rename, setRename] = useState("");
  const [Link, setLink] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleMenuClick = (e: any) => {
    setLink(e.currentTarget);
  };

  const handleClose = () => {
    setLink(null);
  };

  const open = Boolean(Link);

  const openRenameModal = () => {
    setLink(null);
    setOpenModal(true);
  };

  const renameHandler = (): void => {
    let obj = {
      name: rename,
      folderId: props.id,
    }
    setRename("");
    props.renameFolder(obj);
    setLink(null);
    setOpenModal(false);
  }

  const deleteHandler = () => {
    let obj = { folderId: props.id };
    props.deleteFolder(obj);
    setLink(null);
  };


  return (
    <>
      <style.menuIcons
        id="button"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleMenuClick}><BiDotsVerticalRounded /></style.menuIcons>

      <Menu
        id="menu"
        MenuListProps={{
          "aria-labelledby": "button",
        }}
        anchorEl={Link}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={openRenameModal}>Rename</MenuItem>
        {/* <MenuItem>Sub Folders</MenuItem> */}
        <MenuItem onClick={deleteHandler}>Delete</MenuItem>
      </Menu>
      <Modal open={openModal}>
        <style.ModalBox>
          <style.Heading>
            <style.Headingdiv>Rename Folder</style.Headingdiv>

            <CrossDiv onClick={() => {setLink(null);}}><AiOutlineClose  /></CrossDiv>

          </style.Heading>

          <style.Name>Folder Rename</style.Name>
          <style.CustomModalInput
            type="text"
            onChange={(e) => setRename(e.target.value)}
            placeholder="Enter Folder Name"
            required
          />
          <style.CustomButton onClick={() => {
            renameHandler();
            handleClose();
           }}
           >
          {props.folderSpinner===true? "...Submitting" : "Submit"}
          </style.CustomButton>
        </style.ModalBox>
      </Modal>
      <Modal open={props.Loading} sx={{ opacity: "20%" }}>
        <styles.LoadingDiv>
          <FadeLoader color="white" />
        </styles.LoadingDiv>
      </Modal>
    </>
  )
}

const CrossDiv = styled.div`
cursor:pointer;
`
const mapStateToProps = (state:any) => {
  return{
    folderSpinner: state.foldersReducer.folderSpinner,
    Loading:state.foldersReducer.Loading,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    renameFolder: (obj: folderType) => dispatch(renameRequest(obj)),
    deleteFolder: (obj: deleteFolderType) => dispatch(deleteFolderRequest(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FolderCard);