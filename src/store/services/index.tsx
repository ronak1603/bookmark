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

export const getBookmarkUrl= async (obj:any) => {
    const response = await fetch ("https://bookmarks-app-server.herokuapp.com/folder-bookmarks",{
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
    console.log(obj);
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

