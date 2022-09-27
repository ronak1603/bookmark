import { put } from "redux-saga/effects";
import { signUpUrl } from "../services";
import * as actions from '../actions/index';

export function* signIn(action:any) : any {
    try{
        let user=action.payload;
        let response = yield signUpUrl(user);
        yield put(actions.signUpSuccess(response.name,response.email,response.password));
        localStorage.setItem("token",(response.token));
    }
    catch(error)
    {
        console.log(error);
    } 

}
export default signIn;
