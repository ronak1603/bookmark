import actionTypes from '../../actionTypes';
import { actionType, stateType } from '../../reducer/userAuth/type';


const initialState: stateType = {
    users: [],
    error: "",
    loginSpinner: false,
    signingSpinner: false,
}

export const userAuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.USER_SIGNUP_REQUEST:
            return {
                ...state, 
                signingSpinner: true,
            };
        case actionTypes.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                users: [
                    ...state.users,
                    { ...action.payload.user },
                ],
                signingSpinner: false,
            }
        case actionTypes.USER_SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                signingSpinner: false,
            }
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                loginSpinner: true,
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                users: [
                    ...state.users,
                    { ...action.payload.user },
                ],
                loginSpinner: false,
            }
        case actionTypes.USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                loginSpinner: false,
            }
        default: return state;
    }
}




