export interface signUpType {
    type: "SIGNUP";
    payload: {
      name: string;
      userId:string,
      password:string,
    };
  }
  
export interface stateType {
    users: {
      name: string,
      userId:string,
      password:string,
    }[];
  }