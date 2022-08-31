import { SIGNUP } from '../actionTypes';
import {signUpType,stateType} from './types';

const initialState:stateType = {
    users : [],
}
export const reducer = (state = initialState, action:signUpType) => {
    switch(action.type){
        case SIGNUP:
            return {
                ...state,
                users:[...state.users,{name:action.payload.name, userId:action.payload.userId, password:action.payload.password}]
            }
        default: return state;
    }
}