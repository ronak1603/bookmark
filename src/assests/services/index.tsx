export const URL = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    return data;
}

export const signUpUrl = async (obj: any) => {
    const response = await fetch("https://bookmarks-app-server.herokuapp.com/register", {
        method: 'POST',
        body: JSON.stringify(
            obj
        ),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
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
            "Accept": "application/json",
        },
    })
    const result = await response.json();
    return result;
}