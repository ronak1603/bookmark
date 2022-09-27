import { useDispatch } from "react-redux";
import  actionTypes  from "../actionTypes";
export const useFolderHooks = () => {
  const dispatch = useDispatch();

  const getMyFolders = () => {
    return dispatch({
      type: actionTypes.GET_FOLDERS_REQUEST,
    });
  };

  const createFolder = (name: any, createFolderParent: any) => {
    return dispatch({
      type: actionTypes.CREATE_FOLDER_REQUEST,
      payload: {
        name: name,
        id: createFolderParent,
      },
    });
  };
  return{
    getMyFolders,
    createFolder,
  }
}
