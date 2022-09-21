import { types} from '../../actionTypes';
 export interface userType{
  name:string,
  email:string,
  createdAt:any, 
  id:string,
  updatedAt:any, 
  deletedAt:any,  
  isEmailVerified:string,
  token:string,
}
export interface stateType {
    users: userType[],
    error:string,
    // isLoading:boolean
  }

  type signUpSuccess = {
    type:"USER_SIGNUP_SUCCESS"
    payload:{
      user:userType[],
    }
  };
  type signUpFailure = {
    type:"USER_SIGNUP_FAILURE",
    payload:{
      message:string,
    }
  }
  type loginSuccess = {
    type:"USER_LOGIN_SUCCESS",
    payload:{
      user:any[],
    }
  }
  type loginFailure = {
    type:"USER_LOGIN_FAILURE",
    payload:{
      message:string,
    }
  }

  export type actionType = signUpSuccess|signUpFailure|loginSuccess|loginFailure;