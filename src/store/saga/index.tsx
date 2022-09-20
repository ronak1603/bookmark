import { all } from "redux-saga/effects";
import userAuth from "../saga/userAuth";

export const tasks = [...userAuth];
function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;