import { put } from "redux-saga/effects";
import { createBookmarkUrl } from "../services";
import * as actions from '../actions/index';

export function* createBookmark(action:any) : any {
    try{
        let user=action.payload.obj;
        let response= yield createBookmarkUrl(user);
        yield put(actions.createBookmarkSuccess(response));
    }
    catch(error)
    {
        yield put(actions.createBookmarkFailure());
    }
}
export default createBookmark;