import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteBookmarkRequest, moveBookmarkRequest } from "../store/actions";

import * as style from "../routes/Home/style";

import { BiDotsVerticalRounded } from "react-icons/bi";

import styled from 'styled-components';
import { Menu, MenuItem, Modal } from '@mui/material';
import Vector from "./../../src/assests/Vector.svg";
import * as styles from "./style";
import deleteBookmark from '../store/saga/deleteBookmark';
import { BsFillFolderFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import SyncLoader from 'react-spinners/SyncLoader';
import { v4 as uuidv4 } from 'uuid';

const Delete = styled.div`
align-items:center;
margin-top:2%;
margin-left:2%;
`
const SetMenu = styled(Menu)`
height:60%;
overflow-y:auto;`

type propsType = {
    deleteBookmark: (obj: deleteBookmarkType) => void;
    moveBookmark: (obj: moveBookmarkType) => void;
    bookmarkProcessing: boolean;
    folders: any[],
    id: string;
};

interface deleteBookmarkType {
    bookmarkId: string,
}

interface moveBookmarkType {
    bookmarkId: string,
    folderId: string,
}

const BookmarkOptions = (props: propsType) => {
    const [Link, setLink] = React.useState<null | HTMLElement>(null);
    const [folderId, setFolderId] = useState("");
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        let obj = {
            folderId: folderId,
            bookmarkId: props.id,
        }
        if (folderId !== "")
            props.moveBookmark(obj);
    },
        [folderId]
    );
    const open = Boolean(Link);
    const bookmarkHandleClose = () => {
        setLink(null);
    };

    const handleMenuClick = (e: any) => {
        setLink(e.currentTarget);
    };

    const deleteHandler = () => {
        let obj = { bookmarkId: props.id };
        props.deleteBookmark(obj);
        setLink(null);
    };
    return (<>

        <Delete>
            <style.menuIcons
                id="BookmarkButton"
                aria-controls={open ? "menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenuClick}><BiDotsVerticalRounded size="20px" /></style.menuIcons>

            <Menu
                id="menu"
                MenuListProps={{
                    "aria-labelledby": "BookmarkButton",
                }}
                anchorEl={Link}
                open={open}
                onClose={bookmarkHandleClose}
            >
                <MenuItem
                    onClick={() => {
                        setOpenModal(true);    
                        setLink(null);
                    }}    
                >
                    Move
                </MenuItem>
                <MenuItem onClick={deleteHandler}>Delete</MenuItem>
                </Menu>

                <Modal open={openModal} >
                  <styles.BoxDiv>
                    <styles.FolderItemsDiv>
                      {props.folders.map((folder: any) => {
                        return (<>
                          <styles.folderDiv
                            onClick={() => {
                              setFolderId(folder.id);
                              setOpenModal(false);
                            }}
                            key={folder.id}
                          >
                            <styles.ContentDiv>
                              <styles.IconDiv>
                              <BsFillFolderFill />
                              </styles.IconDiv>
                              <styles.FolderNameDiv>
                                {folder.name}
                              </styles.FolderNameDiv>
                            </styles.ContentDiv>
                            </styles.folderDiv>
                          </> 
                        );
                      })}
                    </styles.FolderItemsDiv>
                  </styles.BoxDiv>
                </Modal>
                <Modal open={props.bookmarkProcessing} sx={{ opacity: "30%" }}>
                  <styles.ProcessingDiv>
                    <SyncLoader color="white" />
                  </styles.ProcessingDiv>
                </Modal>
        </Delete>
    </>)

}

const mapStateToProps = (state: any) => {
    return {
        folders: state.foldersReducer.folders,
        bookmarkProcessing: state.bookmarksReducer.bookmarkProcessing,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteBookmark: (obj: deleteBookmarkType) => dispatch(deleteBookmarkRequest(obj)),
        moveBookmark: (obj: moveBookmarkType) => dispatch(moveBookmarkRequest(obj)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkOptions);