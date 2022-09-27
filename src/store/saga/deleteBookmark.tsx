import { put } from "redux-saga/effects";
import { deleteBookmarkApi } from "../services";
import * as actions from '../actions/index';

export function* deleteBookmark(action:any) : any {
    try{
        let user=action.payload.obj;
        let response = yield deleteBookmarkApi(user);
       
        yield put(actions.deleteBookmarkSuccess(response));
    }
    catch(error)
    {
        yield put(actions.deleteBookmarkFailure());
    }
}
export default deleteBookmark;