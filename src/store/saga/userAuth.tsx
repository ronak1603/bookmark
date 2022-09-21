import { put, takeEvery, takeLatest} from "redux-saga/effects";
import {types } from "../actionTypes";
import * as actions from '../actions/index';
import { signUpUrl, loginUrl, folderUrl, getFoldersUrl, renameUrl } from "../../assests/services/index";

function* signIn(action:any) : any {
    try{
        let user=action.payload;
        let response = yield signUpUrl(user);
        yield put(actions.signUpSuccess(response.name,response.email,response.password));
        localStorage.setItem("token",(response.token));
    }
    catch(error)
    {
        console.log(error);
    } 

}

function* login(action:any) : any {
    try{
        let user=action.payload;
        let response = yield loginUrl(user);
        localStorage.setItem("token",(response.token));
        yield put(actions.loginSuccess(response.email,response.password));
    }
    catch(error)
    {
        console.log(error);
    } 

}

function* createFolder(action:any) : any {
    try{
        let user=action.payload;
        let response = yield folderUrl(user);
        yield put(actions.createFolderSuccess(response.name));
    }
    catch(error)
    {
        yield put(actions.createFolderFailure());
    } 

}

function* userFolder(action:any) : any {
    if(localStorage.getItem("token")){
    try{
        let user=action.payload;
        let response = yield getFoldersUrl(user);
       
        yield put(actions.getFolderSuccess(response.data));
    }
    catch(error)
    {
        yield put(actions.getFolderFailure());
    }
}
}

function* renameFolder(action:any) : any {
    try{
        let user=action.payload;
        let response = yield renameUrl(user);
        yield put(actions.renameSuccess(response.folderId,response.name));
    }
    catch(error)
    {
        yield put(actions.renameFailure());
    }
}

const userAuthSaga = [
    takeLatest(types.USER_SIGNUP_REQUEST, signIn),
    takeLatest(types.USER_LOGIN_REQUEST, login),
    takeLatest(types.CREATE_FOLDER_REQUEST, createFolder),
    takeLatest(types.GET_FOLDERS_REQUEST, userFolder),
    takeLatest(types.RENAME_FOLDERS_REQUEST, renameFolder),
]

export default userAuthSaga;
