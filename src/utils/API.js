import { useState, useEffect } from "react";

const useFetchData = () => {
    const [photos, setPhotos] = useState([]);
    const [trigger, setTrigger] = useState(0);

    useEffect(() => {
        const randomPage = Math.round(Math.random() * (10 - 1) + 1);
        // console.log(randomPage, typeof(randomPage))
        // const API_KEY = import.meta.env.VITE_API_KEY;
        const BASE_URL = `/netlify/functions/fetch-img?page=${randomPage}`;
        console.log(BASE_URL)
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => setPhotos(data.photos));
    }, [trigger]); 

    return { photos, reset: () => setTrigger(t => t + 1) }; 
}

export default useFetchData;
