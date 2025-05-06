const API_BASE = "https://68110c4d3ac96f7119a36623.mockapi.io"

export const LoggedUser = async (myUser) => {

    const res = await fetch(`${API_BASE}/login`, {method:"POST",
        headers:{"Content-Type" : "application/json"},

        body: JSON.stringify(myUser)

    });
    if(!res.ok){
        throw new Error("failed to fetch")
    }

    return res.json()
    
}