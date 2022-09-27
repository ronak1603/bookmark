import { FolderActionType, FolderType, GetFoldersType } from "./type";
import actionTypes from "../../actionTypes/index";

export interface StateType {
    folders: GetFoldersType[];
    error: string;
    LoadingSpinner:boolean;
}

export const initialState = {
    folders: [],
    error: "",
    LoadingSpinner: false,
}


export const foldersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CREATE_FOLDER_REQUEST:
            return {
                ...state,
                LoadingSpinner: true,
            }
        case actionTypes.CREATE_FOLDER_SUCCESS:
            return {
                ...state,
                folders: [...state.folders, action.payload.folder],
                LoadingSpinner: false,
            };
        case actionTypes.CREATE_FOLDER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                LoadingSpinner: false,
            }
        case actionTypes.GET_FOLDERS_REQUEST:
            return {
                ...state,
                LoadingSpinner: true,
            }
        case actionTypes.GET_FOLDERS_SUCCESS:
            return {
                ...state,
                folders: action.payload.folders,
                LoadingSpinner: false,
            }
        case actionTypes.GET_FOLDERS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                LoadingSpinner: false,
            }
        case actionTypes.RENAME_FOLDERS_REQUEST:
            return {
                ...state,
                LoadingSpinner: true,
            }
        case actionTypes.RENAME_FOLDERS_SUCCESS:
            return {
                ...state,
                folders: [
                    ...state.folders.map((folder: FolderType) => {
                        if (folder.id === action.payload.folders.folderId) {
                            return { ...folder, name: action.payload.folders.name };
                        }
                        else return { ...folder };
                    })
                ],
                LoadingSpinner: false,
            }
        case actionTypes.RENAME_FOLDERS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                LoadingSpinner: false,
            }
            
        default:
            return state
    }
}