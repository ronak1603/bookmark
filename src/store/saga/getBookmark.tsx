import { put } from "redux-saga/effects";
import { getBookmarkUrl } from "../services";
import * as actions from '../actions/index';

export function* getBookmark(action:any) : any {
    try{
        const url = "https://bookmarks-app-server.herokuapp.com/".concat(`folder-bookmarks?folderId=${action.payload.id}`);
        console.log(url);
        let response = yield getBookmarkUrl(url); 
       
        yield put(actions.getBookmarkSuccess(response));
    }
    catch(error)
    {
        yield put(actions.getBookmarkFailure());
    }
}
export default getBookmark;