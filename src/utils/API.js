// import REACT_APP_API_KEY from "../"
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL =  "https://api.pexels.com/v1/search?query=people";

const fetchData = async () => {
    const response = await fetch(BASE_URL, {
        headers: {
            Authorization: API_KEY,
        },
    })
    
    const data =  await response.json()

    return data
}

export default fetchData;

