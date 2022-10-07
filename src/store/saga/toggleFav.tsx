
import { put } from "redux-saga/effects";
import { favBookmarkApi } from "../services";

interface actionType {
  type: "TOGGLE_FAVORITE_REQUEST"
  payload: {
    id: string;
  };
}
function* toggleFavorite(action: actionType):any {
    try {
        let obj = {
            bookmarkId:action.payload.id,
        }
        let response = yield favBookmarkApi(obj);
        yield put({type:"FAV_BOOKMARK_SUCCESS",payload:{
            response:response,
        }})
        if(response.isFavorite===true){
            yield put({type:"ADD_TO_FAVORITE",payload:{
                bookmark:response,
            }})
        }
        else{
            yield put({type:"REMOVE_FROM_FAVORITE",payload:{
                id:response.id,
            }})
        }
    } catch (error) {
        yield put({type:"FAV_BOOKMARK_FAILURE"});
    }
}

export default toggleFavorite;