import { put } from "redux-saga/effects";
import { createBookmarkUrl, moveBookmarkApi } from "../services";
import * as actions from '../actions/index';

export function* createBookmark(action:any) : any {
    try{
        let obj={
            name:action.payload.obj.name,
        url:action.payload.obj.url};
        let response= yield createBookmarkUrl(obj);
        let obj2 = {
            folderId:action.payload.obj.folderId,
            bookmarkId:response.id,
        }
        let response2=yield moveBookmarkApi(obj2);
        yield put(actions.createBookmarkSuccess(response));
    }
    catch(error)
    {
        yield put(actions.createBookmarkFailure());
    }
}
export default createBookmark;