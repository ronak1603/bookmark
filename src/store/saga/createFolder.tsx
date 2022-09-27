import { put } from "redux-saga/effects";
import { folderUrl } from "../services";
import * as actions from '../actions/index';

export function* createFolder(action:any) : any {
    try{
        let obj=action.payload;
        let response = yield folderUrl(obj);
        yield put(actions.createFolderSuccess(response));
    }
    catch(error)
    {
        yield put(actions.createFolderFailure());
    } 

}
export default createFolder;
