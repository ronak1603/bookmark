import actionTypes from "../../actionTypes/index";
import { GetBookmarksType } from "./type";

export interface StateType {
    bookmarks: GetBookmarksType[];
    error: string;
    bookmarkSpinner: boolean;
    favorites: [];
    bookmarkProcessing: boolean;
    vertical: boolean;
    folderId: string;
}

export const initialState = {
    bookmarks: [],
    error: "",
    bookmarkSpinner: false,
    favorites: [],
    bookmarkProcessing: false,
    vertical: false,
    folderId:"",
}

export const bookmarksReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CREATE_BOOKMARK_REQUEST:
            return {
                ...state,
                bookmarkProcessing: true,
            }
        case actionTypes.CREATE_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload.obj],
                bookmarkProcessing: false,
            };
        case actionTypes.CREATE_BOOKMARK_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                bookmarkProcessing: false,
            }
        case actionTypes.GET_BOOKMARK_REQUEST:
            return {
                ...state,
                bookmarkSpinner: true,
                folderId: action.payload.id,
            }
        case actionTypes.GET_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarks: action.payload.bookmarks,
                bookmarkSpinner: false,
            }
        case actionTypes.GET_BOOKMARK_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                bookmarkSpinner: false,
            }
        case actionTypes.DELETE_BOOKMARK_REQUEST:
            return {
                ...state,
                bookmarkProcessing: true,
            }
        case actionTypes.DELETE_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarkProcessing: false,
                bookmarks: [
                    ...state.bookmarks.filter((bookmark: any) => {
                        return bookmark.id != action.payload.obj.bookmarkId;
                    }),
                ],
            }
        case actionTypes.DELETE_BOOKMARK_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                bookmarkProcessing: false,
            }
        case actionTypes.MOVE_BOOKMARK_REQUEST:
            return {
                ...state,
                bookmarkProcessing: true,
            }
        case actionTypes.MOVE_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarkProcessing: false,
                bookmarks: [
                    ...state.bookmarks.filter((bookmark: any) => {
                        return bookmark.id !== action.payload.obj.bookmarkId;
                    }),
                ],
            };
        case actionTypes.MOVE_BOOKMARK_FAILURE:
            return {
                ...state,
                bookmarkProcessing: false,
                error: action.payload.error,
            }

        case actionTypes.FAV_BOOKMARK_REQUEST:
            return {
                ...state,
                bookmarkProcessing: true,
            }
        case actionTypes.FAV_BOOKMARK_SUCCESS:
            return {
                ...state,
                bookmarkProcessing: false,
                bookmarks: [
                    ...state.bookmarks.map((bookmark: any) => {
                        if (bookmark.id === action.payload.response.id)
                            return {
                                ...bookmark,
                                isFavorite: action.payload.response.isFavorite,
                            };
                        return { ...bookmark };
                    }),
                ],
            };
        case actionTypes.ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload.bookmark],
            };
        case actionTypes.REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorites: [
                    ...state.favorites.filter(
                        (bookmark: any) => bookmark.id !== action.payload.id
                    ),
                ],
            };
        case actionTypes.SHOW_FAVORITES:
            return {
                ...state,
                bookmarks: state.favorites,
            };
        case actionTypes.TOGGLE_VIEW:
            return {
                ...state,
                vertical: !state.vertical,
            }
        default:
            return state
    }
}

