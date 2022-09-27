import actionTypes  from "../actionTypes";
export interface signUpTypes{
    name:string,
    userId:string,
    password:string
}

export interface loginTypes{
    userId:string,
    password:string
}



export const signUpRequest = (obj:signUpTypes) => {
    return {type:actionTypes.USER_SIGNUP_REQUEST , payload:
        obj
    }
}
export const signUpSuccess = (name:string,id:string,password:string) => {
    return {type:actionTypes.USER_SIGNUP_SUCCESS , payload:{
        name:name,
        email:id,
        password:password
    }}
}
export const signUpFailure = () => {
    return {
        type:actionTypes.USER_SIGNUP_FAILURE,
    }
}

export const loginRequest = (obj:any) => {
    return {type:actionTypes.USER_LOGIN_REQUEST , payload:
        obj
    }
}
export const loginSuccess = (id:string,password:string) => {
    return {type:actionTypes.USER_LOGIN_SUCCESS , payload:{
        email:id,
        password:password
    }}
}
export const loginFailure = () => {
    return {
        type:actionTypes.USER_LOGIN_FAILURE,
    }
}
export const createFolderRequest = (name:string) => {
    return {type:actionTypes.CREATE_FOLDER_REQUEST , payload:{
        name:name,
    }
}
}
export const createFolderSuccess = (obj:any) => {
    return {type:actionTypes.CREATE_FOLDER_SUCCESS , payload:{
     folder:obj
    }
    }
}
export const createFolderFailure = () => {
    return {type:actionTypes.CREATE_FOLDER_FAILURE ,
    }
}

export const getFolderRequest = () =>{
    return{
        type: actionTypes.GET_FOLDERS_REQUEST,
    }
}

export const getFolderSuccess = (data:any) =>{
    return{
        type: actionTypes.GET_FOLDERS_SUCCESS,
        payload:{folders:data}
    }
}
export const getFolderFailure = () => {
    return {
        type:actionTypes.GET_FOLDERS_FAILURE ,
        data:"error",
    }
}

export interface folderType {
    folderId: string;
    name: string;
  }

export const renameRequest = (obj:folderType) => {
    return {type:actionTypes.RENAME_FOLDERS_REQUEST , payload:{
        obj:obj,
    }
}
}
export const renameSuccess = (obj:folderType) => {
    return {type:actionTypes.RENAME_FOLDERS_SUCCESS, payload:
        {
          folders:obj,
        }
    }
}
export const renameFailure = (error:string) => {
    return {
        type:actionTypes.RENAME_FOLDERS_FAILURE ,
        payload:{
            error:error,
        }
    }
}

interface bookmarkType{
url:string,
name:string,
}

export const createBookmarkRequest = (obj:bookmarkType) => {
    return {type:actionTypes.CREATE_BOOKMARK_REQUEST , payload:{
        obj:obj,
    }
    }
}
export const createBookmarkSuccess = (obj:bookmarkType) => {
    return {type:actionTypes.CREATE_BOOKMARK_SUCCESS , payload:{
        obj
    }
}
}
export const createBookmarkFailure = () => {
    return {type:actionTypes.CREATE_BOOKMARK_FAILURE ,
    }
}


export const getBookmarkRequest = () =>{
    return{
        type: actionTypes.GET_BOOKMARK_REQUEST,
    }
}
export const getBookmarkSuccess = (data:any) =>{
    return{
        type: actionTypes.GET_BOOKMARK_SUCCESS,
        payload:{bookmarks:data}
    }
}
export const getBookmarkFailure = () => {
    return {
        type:actionTypes.GET_BOOKMARK_FAILURE ,
        data:"error",
    }
}

export const deleteBookmarkRequest = (obj:any) =>{
    return{
        type: actionTypes.DELETE_BOOKMARK_REQUEST,
        payload:{
            obj:obj
        }
    }
}
export const deleteBookmarkSuccess = (obj:any) =>{
    return{
        type: actionTypes.DELETE_BOOKMARK_SUCCESS,
        payload:{obj:obj}
    }
}
export const deleteBookmarkFailure = () => {
    return {
        type:actionTypes.DELETE_BOOKMARK_FAILURE ,
        data:"error",
    }
}