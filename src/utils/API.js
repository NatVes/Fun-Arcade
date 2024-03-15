import { useState, useEffect } from "react";

const useFetchData = () => {
    const [photos, setPhotos] = useState([]);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        const randomPage = Math.round(Math.random() * (10 - 1) + 1);
        const API_KEY = import.meta.env.VITE_API_KEY;
        const BASE_URL = `https://api.pexels.com/v1/search?query=funny&orientation=square&size=small,medium&page=${randomPage}&per_page=6`;

        fetch(BASE_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then(res => res.json())
        .then(data => setPhotos(data.photos));
    }, [trigger]); 

    return { photos, reset: () => setTrigger(t => t + 1) }; 
}

export default useFetchData;
