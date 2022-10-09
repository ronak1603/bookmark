import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


import Bookmark from "../../components/bookmark";

import { createFolderRequest, deleteBookmarkRequest, getBookmarkRequest, getFolderRequest, getMeRequest, moveBookmarkRequest, showFavoritesRequest, toggleFavoriteRequest, toggleView } from "../../store/actions";

import * as style from "./style";
import Modal from "@mui/material/Modal";
import Vector from "./../../assests/Vector.svg";
import { AiOutlineSearch, AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { BsFillFolderFill, BsJournalBookmarkFill, BsFillJournalBookmarkFill, BsHeart, BsFillHeartFill } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { BarLoader, ClipLoader, FadeLoader, SyncLoader } from "react-spinners";
import FolderCard from '../../components/FolderCard';
import profileImage from "../../assests/profileImage.svg";
import styled from 'styled-components';
import * as styles from "./../../components/style";
import { v4 as uuidv4 } from 'uuid';
import { VscFiles } from "react-icons/vsc";

import BookmarkOptions from '../../components/bookmarkOptions';
import { BiEditAlt } from 'react-icons/bi';
import HorizontalBookmark from '../../components/horizontalBookmark';
import Sq from "./../../assests/Sq.svg";
import St from "./../../assests/St.svg";
const BookmarkImage: string =
  require("../../assests/Bookmark-image.svg").default;

const Name = styled.div`
margin-left:1%;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
width:70%;
height:100%;
`
const SpinDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-left:45%;
`;

const Div = styled.div`
display:flex;
align-items:center;
margin-left:25%;
margin-top:40%;`

const FavDiv = styled.div`
// border: 1px solid black;
display:flex;
flex-direction:row;
margin-top:2%;
justify-content:space-between;
margin-left:10%;
`

type propsType = {
  createFolder: (name: string) => void,
  getFolders: () => void,
  getMe: () => void,
  getBookmark: (id: string, name: string) => void,
  searchFolder: (name: string) => void,
  cancelFolder: () => void,
  toggleFavorite: (id: string) => void;
  showFavorites: () => void;
  toggleView: () => void;
  deleteBookmark: (obj: deleteBookmarkType) => void;
  moveBookmark: (obj: moveBookmarkType) => void;
  folders: any[],
  isCreated: boolean,
  bookmarkSpinner: boolean,
  folderSpinner: boolean,
  user: any,
  bookmarks: any[],
  Loading: boolean,
  vertical: boolean,
  folderid: string,
  bookmarkProcessing: boolean;
};

interface deleteBookmarkType {
  bookmarkId: string,
}

interface moveBookmarkType {
  bookmarkId: string,
  folderId: string,
}

const Home = (props: propsType) => {
  const [folder, setFolder] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");
  const [folderId, setFolderId] = useState("");
  const [toggleShow, setToggleShow] = useState(false);
  const [moveModal, setMoveModal] = useState(false);
  const [bId,setBId] = useState("");

  let folderName = props.folders.filter((folder: any) => folder.id === props.folderid);
  const handleOpen = () => { setOpenModal(true); }
  const handleClose = () => { setOpenModal(false); }

  useEffect(() => {
    props.getFolders();
    props.getMe();
    // let obj = {
    //   folderId: folderId,
    //   bookmarkId: bId,
    // };
    // if (folderId !== "")
    //   props.moveBookmark(obj);
  },
 [])

const folderNewName = (e: any) => {
  setFolder(e.target.value);
};

const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  if (e.key === "Enter") {
    props.searchFolder(search);
  }
};

const cancelHandler = (): void => {
  props.cancelFolder();
  setSearch("");
  setToggleShow(false);
};

const toggleViewHandler = (): void => {
  props.toggleView();
};

const deleteHandler = () => {
  let obj = { bookmarkId: bId };
  props.deleteBookmark(obj);
  

};


return (<>
  <style.MainDiv>
    <style.LeftDiv>
      <style.StyledImg src={Vector} />

      <style.HeadingDiv><b>BOOKMARK</b></style.HeadingDiv>

      <style.SearchDiv>
        <style.Icon><AiOutlineSearch /></style.Icon>
        <style.Input placeholder="Search..." type="text" onChange={(e) => { setSearch(e.target.value); setToggleShow(true); }} value={search} onKeyPress={searchHandler} />
        {toggleShow ? <AiOutlineClose onClick={() => cancelHandler()} /> : ""}
      </style.SearchDiv>

      <style.FolderDiv>
        {props.folderSpinner ? <Div><ClipLoader /></Div> : props.folders.map((folder) => {
          console.log(folderId);
          return (
            <style.Folder  id={folder.id} name={props.folderid} key={folder.id}>
              <IoMdArrowDropright />
              <style.FolderIcon><BsFillFolderFill /></style.FolderIcon>
              <style.FolderName onClick={() => { props.getBookmark(folder.id, folder.name) }} id={folder.id} >{folder.name}</style.FolderName>
              <FolderCard id={folder.id} />
            </style.Folder>
          );
        })}

      </style.FolderDiv>

      <style.SaveButton onClick={() => handleOpen()}>+ Add Folder</style.SaveButton>
      <Modal open={openModal}>
        <style.ModalBox>
          <style.Heading>
            <style.Headingdiv>Create Folder</style.Headingdiv>

            <AiOutlineClose onClick={() => { setOpenModal(false); }} />

          </style.Heading>

          <style.Name>Folder Name</style.Name>
          <style.CustomModalInput
            type="text"
            onChange={folderNewName}
            placeholder="Enter Folder Name"
          />
          <style.CustomButton onClick={() => {
            props.createFolder(folder);
            handleClose();
          }}>
            Submit
          </style.CustomButton>

        </style.ModalBox>
      </Modal>
      <Modal open={props.Loading} sx={{ opacity: "20%" }}>
        <styles.LoadingDiv>
          <FadeLoader color="white" />
        </styles.LoadingDiv>
      </Modal>

      <style.FavouriteButton tabIndex={1} onClick={() => props.showFavorites()}>
        <style.FavIcon><MdFavorite /></style.FavIcon>
        Favourites
      </style.FavouriteButton>

      <style.LogoutButton onClick={() => { localStorage.clear(); }} type="submit">
        <style.LogoutIcon><TbLogout /></style.LogoutIcon>
        Logout
      </style.LogoutButton>

    </style.LeftDiv>

    <style.RightDiv>

      <style.Nav>
        <style.ProfileDiv>
          <style.Dp><style.ProfileImg src={profileImage} /></style.Dp>
          <style.UserDetail>
            <style.UserName>{props.user.name}</style.UserName>
            <style.UserEmail>{props.user.email}</style.UserEmail>
          </style.UserDetail>
          {/* <style.ProfileOption><IoIosArrowUp /></style.ProfileOption> */}
        </style.ProfileDiv>
      </style.Nav>

      <Bookmark />
      <style.searchdiv>
        <style.SearchBookmarkDiv>
          <style.Icon><AiOutlineSearch /></style.Icon>
          <style.Input placeholder="Search..." type="text" />
        </style.SearchBookmarkDiv>
        <style.BookmarkButton>+ Add Folder</style.BookmarkButton>
        <style.DisplayDiv>
          <style.VerticalDiv onClick={toggleViewHandler} ><style.VImage src={Sq}/></style.VerticalDiv>
          <style.HorizontalDiv onClick={toggleViewHandler} ><style.VImage src={St}/></style.HorizontalDiv>
        </style.DisplayDiv>
      </style.searchdiv>
      {props.vertical === false ? (
        <style.GetBookmark>
          {props.bookmarks.length === 0 ? props.bookmarkSpinner ? <SpinDiv><ClipLoader /></SpinDiv> : (<EmptyFolderDiv><Icon><BsJournalBookmarkFill /></Icon><P>No Bookmarks Found</P><Text>Keep content organized with Folders</Text></EmptyFolderDiv>) : props.bookmarks.map((bookmark) => {
            return (
              <style.Bookmark key={uuidv4()}>
                <style.BookmarkImage><style.Image src={bookmark.imageUrl === "" ? BookmarkImage : bookmark.imageUrl} /></style.BookmarkImage>
                <style.BookmarkName>
                  <Name>{bookmark.name}</Name>
                  <FavDiv>
                    <div>{bookmark.isFavorite ? (
                      <BsFillHeartFill
                        size="20px"
                        color="#e01606"
                        onClick={() => props.toggleFavorite(bookmark.id)}
                      />
                    ) : (
                      <BsHeart
                        size="20px"
                        onClick={() => props.toggleFavorite(bookmark.id)}
                      />
                    )}</div>
                    <BookmarkOptions id={bookmark.id}></BookmarkOptions>
                  </FavDiv>
                </style.BookmarkName>
                <style.BookmarkDescription>{bookmark.description === "" ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry." : bookmark.description}</style.BookmarkDescription>
              </style.Bookmark>
            )
          })}
        </style.GetBookmark>
      ) : (
        <style.GetBookmark>
          {props.bookmarks.length === 0 ? props.bookmarkSpinner ? <SpinDiv><ClipLoader /></SpinDiv> : (<EmptyFolderDiv><Icon><BsJournalBookmarkFill /></Icon><P>No Bookmarks Found</P><Text>Keep content organized with Folders</Text></EmptyFolderDiv>) : props.bookmarks.map((bookmark) => {
            return (
              <style.HorizontalBookmark key={bookmark.id}>
                <style.HorizontalBookmarkImage><style.HorizontalImage src={bookmark.imageUrl === "" ? BookmarkImage : bookmark.imageUrl} /></style.HorizontalBookmarkImage>
                <style.HorizontalBookmarkTitle>
                  <style.HorizontalName>{bookmark.name}</style.HorizontalName>
                  <style.HorizontalDescription>{bookmark.description === "" ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry." : bookmark.description}</style.HorizontalDescription>
                </style.HorizontalBookmarkTitle>
                <style.PathVDiv>
                  <style.PathIconVDiv>
                    <BsFillFolderFill />
                  </style.PathIconVDiv>
                  <style.PathNameVDiv>{folderName[0].name}</style.PathNameVDiv>
                </style.PathVDiv>
                <style.OtherVDiv>
                  <style.HFavDiv>
                    {bookmark.isFavorite ? (
                      <BsFillHeartFill
                        size="20px"
                        color="#e01606"
                        onClick={() => props.toggleFavorite(bookmark.id)}
                      />
                    ) : (
                      <BsHeart
                        size="20px"
                        onClick={() => props.toggleFavorite(bookmark.id)}
                      />
                    )}
                  </style.HFavDiv>
                  <HorizontalBookmark id={bookmark.id}></HorizontalBookmark>
                </style.OtherVDiv>
                {/* <Modal open={moveModal} >
                  <styles.BoxDiv>
                    <styles.FolderItemsDiv>
                      {props.folders.map((folder: any) => {
                        return (<>
                          <styles.folderDiv
                            onClick={() => {
                              setFolderId(folder.id);
                              setBId(bookmark.id);
                              setMoveModal(false);
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
                </Modal> */}
                {/* {/* <Modal open={props.bookmarkProcessing} sx={{ opacity: "30%" }}>
                  <styles.ProcessingDiv>
                    <SyncLoader color="white" />
                  </styles.ProcessingDiv>
                </Modal> */}
              </style.HorizontalBookmark>
            )
          })}
        </style.GetBookmark>
        // <HorizontalBookmark></HorizontalBookmark>
      )
      }

    </style.RightDiv>

  </style.MainDiv>
</>
)
}

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

const mapStateToProps = (state: any) => {
  return {
    folders: state.foldersReducer.folders,
    folderSpinner: state.foldersReducer.folderSpinner,
    isCreated: state.foldersReducer.isCreated,
    user: state.foldersReducer.userProfile,
    bookmarks: state.bookmarksReducer.bookmarks,
    bookmarkSpinner: state.bookmarksReducer.bookmarkSpinner,
    Loading: state.foldersReducer.Loading,
    vertical: state.bookmarksReducer.vertical,
    folderid: state.bookmarksReducer.folderId,
    folderName: state.bookmarksReducer.folderName,
    bookmarkProcessing: state.bookmarksReducer.bookmarkProcessing,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createFolder: (name: string) => dispatch(createFolderRequest(name)),
    getFolders: () => dispatch(getFolderRequest()),
    getMe: () => dispatch(getMeRequest()),
    getBookmark: (id: string, name: string) => dispatch(getBookmarkRequest(id, name)),
    searchFolder: (name: string) => dispatch({ type: "SEARCH_FOLDER_REQUEST", payload: name }),
    cancelFolder: () => dispatch({ type: "CANCEL_FOLDER_REQUEST" }),
    toggleFavorite: (id: string) => dispatch(toggleFavoriteRequest(id)),
    showFavorites: () => dispatch(showFavoritesRequest()),
    toggleView: () => dispatch(toggleView()),
    deleteBookmark: (obj: deleteBookmarkType) => dispatch(deleteBookmarkRequest(obj)),
    moveBookmark: (obj: moveBookmarkType) => dispatch(moveBookmarkRequest(obj)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);