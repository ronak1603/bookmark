import { types } from "../actionTypes";
export interface signUpTypes{
    name:string,
    userId:string,
    password:string
}

export const signUpRequest = (obj:any) => {
    return {type:types.USER_SIGNUP_REQUEST , payload:{
        obj
    }}
}
export const signUpSuccess = (name:string,id:string,password:string) => {
    return {type:types.USER_SIGNUP_SUCCESS , payload:{
        name:name,
        email:id,
        password:password
    }}
}

export const loginRequest = (obj:any) => {
    return {type:types.USER_SIGNUP_REQUEST , payload:{
        obj
    }}
}
export const loginSuccess = (id:string,password:string) => {
    return {type:types.USER_SIGNUP_SUCCESS , payload:{
        email:id,
        password:password
    }}
}

export const userProfile = () => {
    return {
        type: types.USER_PROFILE_REQUEST,
        payload:{
            data:"apple",
        }
    }
}
export const userProfileSuccess = (data:any) => {
    return {
        type: types.USER_PROFILE_SUCCESS,
        data:data,
    }
}
export const userProfileFailure = () => {
    return {
        type: types.USER_PROFILE_FAILURE,
    }
}