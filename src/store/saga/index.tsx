import { takeEvery } from "redux-saga/effects";

import actionTypes from "../actionTypes";
import {createBookmark} from "./createBookmark";
import {createFolder} from "./createFolder";
import {deleteBookmark} from "./deleteBookmark";
import {getBookmark} from "./getBookmark";
import {userFolder} from "./getFolders";
import {login} from "./login";
import {renameFolder} from "./renameFolder";
import {signIn} from "./signUp";

function* rootSaga() {
    yield takeEvery(actionTypes.USER_SIGNUP_REQUEST, signIn);
    yield takeEvery(actionTypes.USER_LOGIN_REQUEST, login);
    yield takeEvery(actionTypes.CREATE_FOLDER_REQUEST, createFolder);
    yield takeEvery(actionTypes.GET_FOLDERS_REQUEST, userFolder);
    yield takeEvery(actionTypes.RENAME_FOLDERS_REQUEST, renameFolder);
    yield takeEvery(actionTypes.CREATE_BOOKMARK_REQUEST, createBookmark);
    yield takeEvery(actionTypes.GET_BOOKMARK_REQUEST, getBookmark);
    yield takeEvery(actionTypes.DELETE_BOOKMARK_REQUEST, deleteBookmark);
}

export default rootSaga;