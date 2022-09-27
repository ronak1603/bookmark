import { put } from "redux-saga/effects";
import { loginUrl } from "../services";
import * as actions from '../actions/index';

export function* login(action:any) : any {
    try{
        let user=action.payload;
        let response = yield loginUrl(user);
        localStorage.setItem("token",(response.token));
        yield put(actions.loginSuccess(response.email,response.password));
    }
    catch(error)
    {
        console.log(error);
    } 

}
export default login;