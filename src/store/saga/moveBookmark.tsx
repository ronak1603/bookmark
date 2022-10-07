import { put } from "redux-saga/effects";
import { deleteBookmarkApi, moveBookmarkApi } from "../services";
import * as actions from '../actions/index';

export function* moveBookmark(action:any) : any {
    try{
        let user=action.payload.obj;
        let response = yield moveBookmarkApi(user);
       
        yield put(actions.moveBookmarkSuccess(user));
    }
    catch(error)
    {
        yield put(actions.moveBookmarkFailure());
    }
}
export default moveBookmark;