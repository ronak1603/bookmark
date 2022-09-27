import { combineReducers } from "redux";

import { userAuthReducer} from "../reducer/userAuth/index";
import { bookmarksReducer } from "./bookmarks";
import { foldersReducer } from "./folders";

export default combineReducers({
  userAuthReducer,
  foldersReducer,
  bookmarksReducer,
});
