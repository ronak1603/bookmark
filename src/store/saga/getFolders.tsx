import { put } from "redux-saga/effects";
import { getFoldersUrl } from "../services";
import * as actions from '../actions/index';

export function* userFolder(action:any) : any {
    try{
        let user=action.payload;
        let response = yield getFoldersUrl(user);
       
        yield put(actions.getFolderSuccess(response));
    }
    catch(error)
    {
        yield put(actions.getFolderFailure());
    }
}
export default userFolder;