import { combineReducers } from "redux";

import {profileReducer, signUpReducer} from "../reducer/userAuth/index";

export default combineReducers({
  profileReducer,
  signUpReducer
});
