const auth = localStorage.getItem("token");
export const signUpUrl = async (obj: any) => {
    const response = await fetch("https://bookmarks-app-server.herokuapp.com/register", {
        method: 'POST',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${auth}`,
        },

    })
    const result = await response.json();
    return result;
}

export const loginUrl = async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/login",{
        method:'POST',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`,
        },
    })
    const result = await response.json();
    return result;
}

export const folderUrl = async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/folder",{
        method:'POST',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`,
            
        },
    })
    const result = await response.json();
    return result;
}

export const getFoldersUrl = async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/folders",{
        method:'GET',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const deleteFolderUrl = async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/folder",{
        method:'DELETE',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const getMeUrl = async () => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/me",{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const renameUrl= async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/rename-folder",{
        method:'PUT',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const createBookmarkUrl= async (obj:any) => {
    // console.log(obj);
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/bookmark",{
        method:'POST',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const getBookmarkUrl= async (url:string) => {
    const response = await fetch (url,{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const deleteBookmarkApi= async (obj:any) => {
    console.log(obj);
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/bookmark",{
        method:'DELETE',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const moveBookmarkApi= async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/move-bookmark",{
        method:'PATCH',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

export const favBookmarkApi= async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/toggle-favorite",{
        method:'PUT',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${auth}`, 
        },
    })
    const result = await response.json();
    return result;
}

