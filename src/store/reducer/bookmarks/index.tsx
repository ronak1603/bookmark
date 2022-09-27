import actionTypes from "../../actionTypes/index";
import { GetBookmarksType } from "./type";

export interface StateType {
    bookmarks: GetBookmarksType[];
    error: string;
}

export const initialState = {
    bookmarks: [],
    error: "",
}

export const bookmarksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CREATE_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload.bookmark],
            };
        case actionTypes.CREATE_BOOKMARK_FAILURE:
            return {
                ...state,
                error: action.payload.error,

            }
        case actionTypes.GET_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarks: action.payload.bookmarks,
            }
        case actionTypes.GET_BOOKMARK_FAILURE:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return state
    }
}

