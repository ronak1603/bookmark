import {takeEvery, put, takeLatest} from "redux-saga/effects";
import {types } from "../actionTypes";
import * as actions from '../actions/index';
import { signUpUrl, loginUrl } from "../../assests/services/index";

function* signIn(action:any) : any {
    try{
        let user=action.payload;
        let response = yield signUpUrl(user);
        localStorage.setItem("token",JSON.stringify(response.token));
        yield put(actions.signUpSuccess(action.payload.name,action.payload.email,action.payload.password));
    }
    catch(error)
    {
        console.log(error);
    } 

}

function* login(action:any) : any {
    try{
        let user=action.payload;
        let response = yield loginUrl(user);
        localStorage.setItem("token",JSON.stringify(response.token));
        yield put(actions.loginSuccess(action.payload.email,action.payload.password));
    }
    catch(error)
    {
        console.log(error);
    } 

}

const userAuthSaga = [
    takeLatest(types.USER_SIGNUP_REQUEST, signIn),
    takeLatest(types.USER_LOGIN_REQUEST, login),
]

export default userAuthSaga;
