export type BookmarkType = {
    id: string;
    name: string;
    url: string;
    user:UserType;
    isFavorite:boolean;
    description:string;
    imageUrl:string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string; 
  };

export type UserType = {
    name: string;
    email: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    deletedAt: string;
    isEmailVerified: string;
  };

export type CreateBookmarkSuccess = {
    type:"CREATE_BOOKMARK_SUCCESS",
    payload:{
        bookmark: BookmarkType,
    }
}

export type CreateBookmarkFailure = {
    type:"CREATE_BOOKMARK_FAILURE",
    payload:{
        error:string,
    }
}

export type GetBookmarksType = {
    name: string;
    id: string;
    url: string;
  }[];

  export type GetBookmarksSuccess = {
    type:"GET_BOOKMARK_SUCCESS",
    payload:{
        bookmarks: GetBookmarksType[],
    }
}
export type GetBookmarksFailure = {
    type:"GET_BOOKMARK_FAILURE",
    payload:{
        error:string,
    }
}


export type BookmarkActionType = CreateBookmarkSuccess| CreateBookmarkFailure|GetBookmarksSuccess|GetBookmarksFailure;

