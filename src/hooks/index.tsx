import { useSelector } from "react-redux";

export const useGetState = ():any =>{
    const {folders,user,isLoading,bookmarks,bookmarkSpinner} = useSelector((state:any) => ({
        folders: state.foldersReducer.folders,
        isLoading: state.foldersReducer.isLoading,
        user: state.foldersReducer.userProfile,
        bookmarks: state.bookmarksReducer.bookmarks,
        bookmarkSpinner : state.bookmarksReducer.bookmarkSpinner,
    }));
    return {folders,user,isLoading,bookmarks,bookmarkSpinner};
};