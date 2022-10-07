export type UserType = {
    name: string;
    email: string;
    createdAt: string;
    id: string;
    updatedAt: string;
    deletedAt: string;
    isEmailVerified: string;
  };
export type FolderType = {
    name: string;
    createdAt: string;
    id: string;
    user:UserType;
    updatedAt: string;
    deletedAt: string; 
}

export type CreateFolderSuccess = {
    type:"CREATE_FOLDER_SUCCESS",
    payload:{
        folder: FolderType,
        // name:string,
    }
}
export type CreateFolderFailure = {
    type:"CREATE_FOLDER_FAILURE",
    payload:{
        error:string,
    }
}

export type GetFoldersType = {
    name: string;
    id: string;
    createdAt: any;
  }[];

export type GetFoldersSuccess = {
    type:"GET_FOLDERS_SUCCESS",
    payload:{
        folders: GetFoldersType[],
    }
}
export type GetFoldersFailure = {
    type:"GET_FOLDERS_FAILURE",
    payload:{
        error:string,
    }
}

export type GetMeSuccess = {
    type:"GET_ME_SUCCESS",
    payload:{
        obj:UserType[],
    }
}

export type GetMeFailure = {
    type:"GET_ME_FAILURE",
    payload:{
        error:string
    }
}

export type FolderActionType = CreateFolderSuccess| CreateFolderFailure| GetFoldersSuccess| GetFoldersFailure;