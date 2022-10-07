import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteBookmarkRequest, moveBookmarkRequest, showFavoritesRequest, toggleFavoriteRequest } from "../store/actions";
import { Modal } from '@mui/material';
import * as style from "./../routes/Home/style";
import { BsFillFolderFill, BsFillHeartFill, BsHeart, BsJournalBookmarkFill } from 'react-icons/bs';
import { VscFiles } from 'react-icons/vsc';
import { AiOutlineDelete } from 'react-icons/ai';
import * as styles from "./style";
import { BiEditAlt } from 'react-icons/bi';
import SyncLoader from 'react-spinners/SyncLoader';
import { ClipLoader } from 'react-spinners';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
const BookmarkImage: string =
    require("./../assests/Bookmark-image.svg").default;

const SpinDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-left:45%;
`;

const EmptyFolderDiv = styled.div`
display:flex;
width:25%;
margin-left:37%;
justify-content:center;
align-items:center;
text-align:center;
// border:1px solid black;
// margin-left:40%;
flex-direction:column;
// flex-wrap:wrap;
`
const Icon = styled.div`
color: #5352ED;
`
const P = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 29px;
display: flex;
align-items: center;
color: #474749;
`
const Text = styled.div`
display:flex;
flex-wrap:wrap:
justify-content:center;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
align-items: center;
color: #77757F;
`


type propsType = {
    deleteBookmark: (obj: deleteBookmarkType) => void;
    moveBookmark: (obj: moveBookmarkType) => void;
    bookmarkProcessing: boolean;
    bookmarks: any[],
    bookmarkSpinner: boolean,
    folders: any[],
    id: string,
    toggleFavorite: (id: string) => void;
    showFavorites: () => void;
    folderid: string,
};

interface deleteBookmarkType {
    bookmarkId: string,
}

interface moveBookmarkType {
    bookmarkId: string,
    folderId: string,
}

const HorizontalBookmarks = (props: propsType) => {
    const [folderId, setFolderId] = useState("");
    const [openModal, setOpenModal] = useState(false);

    let folderName = props.folders.filter((folder: any) => folder.id === props.folderid);

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

    const deleteHandler = () => {
        let obj = { bookmarkId: props.id };
        props.deleteBookmark(obj);
    };

    return (
        <Fragment>
            <style.MoveVDiv>
                <VscFiles
                    size="20px"
                    color="#9D9B9F"
                    onClick={() => {
                        setOpenModal(true);
                    }}
                />
            </style.MoveVDiv>
            <style.EditVDiv>
                <BiEditAlt size="20px" color="#9D9B9F" />
            </style.EditVDiv>
            <style.DeleteVDiv onClick={deleteHandler}>
                <AiOutlineDelete size="20px" color="#9D9B9F" />
            </style.DeleteVDiv>

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
        </Fragment >
    )
}

const mapStateToProps = (state: any) => {
    return {
        folders: state.foldersReducer.folders,
        bookmarks: state.bookmarksReducer.bookmarks,
        bookmarkSpinner: state.bookmarksReducer.bookmarkSpinner,
        bookmarkProcessing: state.bookmarksReducer.bookmarkProcessing,
        folderid: state.bookmarksReducer.folderId,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteBookmark: (obj: deleteBookmarkType) => dispatch(deleteBookmarkRequest(obj)),
        moveBookmark: (obj: moveBookmarkType) => dispatch(moveBookmarkRequest(obj)),
        toggleFavorite: (id: string) => dispatch(toggleFavoriteRequest(id)),
        showFavorites: () => dispatch(showFavoritesRequest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalBookmarks);

