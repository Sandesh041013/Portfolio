export const fetchDatapublic = async (URL) => {
    const res = await fetch(URL)
    if (res.ok) {
        return await res.json();
    }
    else {
        console.log("error")
    }
}

export const postDataPublic = async (URL, data) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (res.ok) {
        return await res.json(); // Corrected from res_data.json()
    } else {
        alert("Failed to post data.");// Ensure error handling in mutation
    }
};



