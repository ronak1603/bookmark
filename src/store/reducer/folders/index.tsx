import { FolderActionType, FolderType, GetFoldersType, UserType } from "./type";
import actionTypes from "../../actionTypes/index";

export interface StateType {
    folders: GetFoldersType[];
    error: string;
    folderSpinner: boolean;
    userProfile:UserType,
    isCreated:boolean;
    Loading:boolean;
    search:any[];
}

export const initialState = {
    folders: [],
    error: "",
    userProfile:{},
    isCreated: false,
    folderSpinner: false,
    Loading:false,
    search: [],
}


export const foldersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.CREATE_FOLDER_REQUEST:
            return {
                ...state,
                isCreated: true,
            }
        case actionTypes.CREATE_FOLDER_SUCCESS:
            return {
                ...state,
                folders: [...state.folders, action.payload.folder],
                isCreated: false,
            };
        case actionTypes.CREATE_FOLDER_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isCreated: false,
            }
        case actionTypes.GET_FOLDERS_REQUEST:
            return {
                ...state,
                folderSpinner: true,
            }
        case actionTypes.GET_FOLDERS_SUCCESS:
            return {
                ...state,
                folders: action.payload.folders,
                folderSpinner: false,
            }
        case actionTypes.GET_FOLDERS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                folderSpinner: false,
            }
        case actionTypes.GET_ME_REQUEST:
            return {
                ...state,

            }
        case actionTypes.GET_ME_SUCCESS:
            return {
                ...state,
                userProfile: action.payload.obj,

            }
        case actionTypes.GET_ME_FAILURE:
            return {
                ...state,
                error: action.payload.error,

            }
        case actionTypes.RENAME_FOLDERS_REQUEST:
            return {
                ...state,
                Loading:true,
            }
        case actionTypes.RENAME_FOLDERS_SUCCESS:
            console.log(action.payload.folders);
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
                Loading:false,
            }
        case actionTypes.RENAME_FOLDERS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                Loading:false,
            }

        case actionTypes.DELETE_FOLDER_REQUEST:
            return {
                ...state,
                Loading:true,
            }

        case actionTypes.DELETE_FOLDER_SUCCESS:
            return {
                ...state,
                folders: [
                    ...state.folders.filter((folder: any) => {
                        return folder.id != action.payload.obj.folderId;
                    }),
                ],
                Loading:false,
            };

            case actionTypes.SEARCH_FOLDER_REQUEST:
                console.log(action.payload);
                return {
                    ...state,
                    search:state.folders,
                    folders:[
                        ...state.folders.filter((folder:any) => 
                            folder.name === action.payload,
                        )
                    ]
                }

                case actionTypes.CANCEL_FOLDER_REQUEST:
                    return {
                        ...state,
                        folders:state.search,
                    }

        default:
            return state
    }
}