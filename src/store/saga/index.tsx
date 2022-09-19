import {takeEvery, put} from "redux-saga/effects";
import {types } from "../actionTypes";
import * as actions from '../actions/index';
import { URL } from "../../assests/services/index";


function* getProfile() : any {
    try{
        let data = yield URL();
        yield put(actions.userProfileSuccess(data));
    }
    catch(error)
    {
        yield put(actions.userProfileFailure());
    } 
}
function* profileSaga() {
    yield takeEvery(types.USER_PROFILE_REQUEST, getProfile)
}

export default profileSaga;