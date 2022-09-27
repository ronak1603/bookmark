import { put } from "redux-saga/effects";
import { getBookmarkUrl } from "../services";
import * as actions from '../actions/index';

export function* getBookmark(action:any) : any {
    try{
        let user=action.payload;
        let response = yield getBookmarkUrl(user);
       
        yield put(actions.getBookmarkSuccess(response));
    }
    catch(error)
    {
        yield put(actions.getBookmarkFailure());
    }
}
export default getBookmark;