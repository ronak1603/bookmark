import { put } from "redux-saga/effects";
import { renameUrl } from "../services";
import * as actions from '../actions/index';

export function* renameFolder(action:any) : any {
    try{
        let user=action.payload.obj;
        let response = yield renameUrl(user);
        yield put(actions.renameSuccess(response));
    }
    catch(error:any)
    {
        yield put(actions.renameFailure(error.message));
    }
}
export default renameFolder;