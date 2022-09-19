// export interface signUpType {
//     type: "SIGNUP";
//     payload: {
//       name: string;
//       userId:string,
//       password:string,
//     };
//   }

export interface stateType {
  users: {
    name: string,
    userId: string,
    password: string,
  }[];
  error:string,
  isLoading:boolean
}


type a = {
  type: "USER_PROFILE_SUCCESS",
    data: any,
}
type b = {
  type: "USER_PROFILE_FAILURE",
  data: string,
}

export type userProfileType = a | b;




