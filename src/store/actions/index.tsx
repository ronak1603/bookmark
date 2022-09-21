import { types } from "../actionTypes";
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
    return {type:types.USER_SIGNUP_REQUEST , payload:
        obj
    }
}
export const signUpSuccess = (name:string,id:string,password:string) => {
    return {type:types.USER_SIGNUP_SUCCESS , payload:{
        name:name,
        email:id,
        password:password
    }}
}
export const signUpFailure = () => {
    return {
        type:types.USER_SIGNUP_FAILURE,
    }
}

export const loginRequest = (obj:any) => {
    return {type:types.USER_LOGIN_REQUEST , payload:
        obj
    }
}
export const loginSuccess = (id:string,password:string) => {
    return {type:types.USER_LOGIN_SUCCESS , payload:{
        email:id,
        password:password
    }}
}
export const loginFailure = () => {
    return {
        type:types.USER_LOGIN_FAILURE,
    }
}
export const createFolderRequest = (obj:any) => {
    return {type:types.CREATE_FOLDER_REQUEST , payload:
        obj,
    }
}
export const createFolderSuccess = (name:any) => {
    return {type:types.CREATE_FOLDER_SUCCESS , payload:{
        name:name,
    }
    }
}
export const createFolderFailure = () => {
    return {type:types.CREATE_FOLDER_FAILURE ,
    }
}

export const getFolderRequest = () =>{
    return{
        type: types.GET_FOLDERS_REQUEST,
    }
}

export const getFolderSuccess = (data:any) =>{
    return{
        type: types.GET_FOLDERS_SUCCESS,
        payload: data,
    }
}
export const getFolderFailure = () => {
    return {
        type:types.GET_FOLDERS_FAILURE ,
        data:"error",
    }
}

export const renameRequest = (obj:any) => {
    return {type:types.RENAME_FOLDERS_REQUEST , payload:
        obj
    }
}
export const renameSuccess = (id:string, name:string) => {
    return {type:types.RENAME_FOLDERS_SUCCESS, payload:
        {
            folderId:id,
            name:name,
        }
    }
}
export const renameFailure = () => {
    return {
        type:types.RENAME_FOLDERS_FAILURE ,
    }
}
