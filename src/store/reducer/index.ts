import { SIGNUP, types} from '../actionTypes';
import { stateType, userProfileType } from './types';

const initialState: stateType = {
    users: [],
    error: "errors in call",
    isLoading:true,
}

// export const reducer = (state = initialState, action:signUpType) => {
//     switch(action.type){
//         case SIGNUP:
//             return {
//                 ...state,
//                 users:[...state.users,{name:action.payload.name, userId:action.payload.userId, password:action.payload.password}]
//             }
//         default: return state;
//     }
// }

export const profileReducer = (state = initialState, action: userProfileType) => {

    switch (action.type) {
        // case types.USER_PROFILE_REQUEST:
        //     return{
        //         ...state,
        //     }
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