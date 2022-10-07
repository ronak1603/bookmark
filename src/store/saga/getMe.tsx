import { put } from "redux-saga/effects";
import { getMeUrl } from "../services";
import * as actions from '../actions/index';

export function* getMe() : any {
    try{
        
        let response = yield getMeUrl();
       
        yield put(actions.getMeSuccess(response));
    }
    catch(error)
    {
        yield put(actions.getMeFailure());
    }
}
export default getMe;