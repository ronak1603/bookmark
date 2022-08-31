import { SIGNUP } from "../actionTypes";
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