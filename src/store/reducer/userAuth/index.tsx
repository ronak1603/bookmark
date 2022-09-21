
import { types } from '../../actionTypes';
import { actionType, stateType } from '../../reducer/userAuth/type';


const initialState: stateType = {
    users: [],
    error: "",
    // isLoading:true,
}

export const userAuthReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case "USER_SIGNUP_SUCCESS":
            return {
                ...state,
                users: [
                    ...state.users, 
                    {...action.payload.user},
                ]
            }
        case "USER_SIGNUP_FAILURE":
            return {
                ...state,
                error: action.payload.message,
            }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                users: [
                    ...state.users, 
                    {...action.payload.user},
                ]
            }
        case "USER_LOGIN_FAILURE":
            return {
                ...state,
                error: action.payload.message,
            }
        default: return state;
    }
}




