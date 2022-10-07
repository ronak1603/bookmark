import react, { useEffect } from 'react'
import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Menu, MenuItem, Modal } from '@mui/material';

import { createBookmarkRequest, deleteBookmarkRequest, getBookmarkRequest } from '../store/actions';

import * as style from "../routes/Home/style";
import * as styles from "./../components/style";

import image from "./../assests/image.svg";

import { IoMdArrowDropright } from 'react-icons/io';

import { BsFillFolderFill } from 'react-icons/bs';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';


type bookmarkType = {
    createBookmark: (obj: propsType) => void;
    bookmarks: any[],
    folders: any[],
}
interface propsType {
    url: string;
    name: any;
    folderId: string;
}


const Bookmark = (props: bookmarkType) => {
    const [bookmarkLink, setBookmarkLink] = useState("");
    const [folder, setFolder] = useState("");
    const [urlName, setUrlName] = useState("");
    const [folderId, setFolderId] = useState("");
    const [folderName, setFolderName] = useState("folder");
    const [openFolder, setOpenFolder] = useState(false);
    const [menu, setMenu] = useState(false);
    const [message, setMessage] = useState('');
    // const [Link, setLink] = React.useState<null | HTMLElement>(null);

    // const open = Boolean(Link);

    // const handleClose = () => {
    //     setLink(null);
    // };

    const addBookmark = () => {
        let obj = {
            url: bookmarkLink,
            name: urlName,
            folderId: folderId,
        };
        props.createBookmark(obj);
        setBookmarkLink("");
        setFolder("");
        setUrlName("");
        setFolderName("folder");
    }

    return (<>
        <style.LinkBox>
            <style.LeftLink>
                <style.LinkHeading>Add Quick Link</style.LinkHeading>
                <style.URLHeading>URL</style.URLHeading>
                <style.URLInput
                    type="text"
                    placeholder="Enter URL"
                    value={bookmarkLink}
                    onChange={(e) => setBookmarkLink(e.target.value)}
                ></style.URLInput>
                <style.FolderHeading>Folder</style.FolderHeading>
                <style.RootFolder>
                    <style.NameInput
                        type="text"
                        value={urlName}
                        placeholder="Enter Bookmark Name"
                        onChange={(e) => setUrlName(e.target.value)}
                    />
                    <style.Button
                        onClick={() => { setOpenFolder(true); setMenu(true); }}
                        disabled={!urlName}
                    >
                        {folder === "" ? folderName : folder}
                    </style.Button>
                    {/* <SetMenu
                        id="menu"
                        MenuListProps={{
                            "aria-labelledby": "button",
                        }}
                        anchorEl={Link}
                        open={open}
                        onClose={handleClose}
                    >
                        {props.folders.map((folder) => {
                            return (
                                <MenuItem key={folder.id} onClick={()=>{setFolderName(folder.name);
                                setFolderId(folder.id);
                                setLink(null);
                                }}>
                                    <style.FolderIcon><BsFillFolderFill /></style.FolderIcon>
                                    <style.FolderName id={folder.id} >{folder.name}</style.FolderName>
                                </MenuItem>
                            );
                        })}
                    </SetMenu> */}
                    <style.SaveBookmark onClick={addBookmark}>Save</style.SaveBookmark>
                </style.RootFolder>
            </style.LeftLink>
            <style.RightLink><style.Img src={image} alt="AddLink" /></style.RightLink>
            <Modal open={openFolder}>
                <styles.BoxDiv>
                    <styles.ModalFolderNameDiv>Folder List</styles.ModalFolderNameDiv>
                    <styles.FolderItemsDiv>
                        {props.folders.map((folder: any) => {
                            return (
                                <style.Folder
                                    onClick={() => {
                                        setFolder(folder.name);
                                        setFolderId(folder.id);
                                        setOpenFolder(false);
                                    }}
                                    key={uuidv4()}
                                >
                                    <styles.ContentDiv>
                                        <style.FolderIcon>
                                        <BsFillFolderFill />
                                        </style.FolderIcon>
                                        <style.FolderName>{folder.name}</style.FolderName>
                                    </styles.ContentDiv>
                                </style.Folder>
                            );
                        })}
                    </styles.FolderItemsDiv>
                </styles.BoxDiv>
            </Modal>
        </style.LinkBox>

    </>
    )
};

const SetMenu = styled(Menu)`
height:60%;
overflow-y:auto;`

const mapStateToProps = (state: any) => {
    return {
        bookmarks: state.bookmarksReducer.bookmarks,
        folders: state.foldersReducer.folders,
       
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createBookmark: (obj: propsType) => dispatch(createBookmarkRequest(obj)),
        // getBookmarks: () => dispatch(getBookmarkRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);