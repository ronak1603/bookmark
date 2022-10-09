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
    folderName:string,
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

    const [openFolder, setOpenFolder] = useState(false);
    const [menu, setMenu] = useState(false);
  


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
        setFolderId("");
       
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
                        
                    >
                    {folder === "" ? props.folderName : folder}
                    </style.Button>

                    <style.SaveBookmark onClick={addBookmark} disabled={!urlName}>Save</style.SaveBookmark>
                </style.RootFolder>
            </style.LeftLink>
            <style.RightLink><style.Img src={image} alt="AddLink" /></style.RightLink>
            <Modal open={openFolder}>
                <styles.BoxDiv>
                    <styles.ModalFolderNameDiv>Folder List</styles.ModalFolderNameDiv>
                    <styles.FolderItemsDiv>
                        {props.folders.map((folder: any) => {
                            return (
                                <style.Folders
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
                                </style.Folders>
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
        folderName: state.bookmarksReducer.folderName,
       
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createBookmark: (obj: propsType) => dispatch(createBookmarkRequest(obj)),
        // getBookmarks: () => dispatch(getBookmarkRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);