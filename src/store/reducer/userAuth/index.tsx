
import { types} from '../../actionTypes';
import { signUpType, stateType, userProfileType } from '../../reducer/userAuth/type';


const initialState: stateType = {
    users: [],
    error: "",
    isLoading:true,
}

export const signUpReducer = (state = initialState, action:signUpType) => {
    switch(action.type){
        case types.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                users:[...state.users,{name:action.payload.name, userId:action.payload.userId, password:action.payload.password}]
            }
        default: return state;
    }
}

export const profileReducer = (state = initialState, action: userProfileType) => {
    switch (action.type) {
        case types.USER_PROFILE_SUCCESS:
            return {
                ...state,
                users: [
                    ...action.data, 
                ],
                isLoading:false,
            }
        case types.USER_PROFILE_FAILURE:
            return {
                ...state,
                error: action.data,
                isLoading:false,
            }
        default:
            return {
                ...state,
            }
    }
}



