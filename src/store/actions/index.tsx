import { SIGNUP, types } from "../actionTypes";
export interface signUpTypes{
    name:string,
    userId:string,
    password:string
}

export const signUp = (name:string,id:string,pass:string) => {
    return {type: SIGNUP, payload:{
        name:name,
        userId:id,
        password:pass,
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