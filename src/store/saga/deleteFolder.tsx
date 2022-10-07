import { put } from "redux-saga/effects";
import { deleteFolderUrl } from "../services";
import * as actions from '../actions/index';

export function* deleteFolder(action:any) : any {
    try{
        let user=action.payload.obj;
        let response = yield deleteFolderUrl(user);
       
        yield put(actions.deleteFolderSuccess(user));
    }
    catch(error)
    {
        yield put(actions.deleteFolderFailure());
    }
}
export default deleteFolder;