import { useState, useEffect } from "react";

const randomPage = Math.round(Math.random() * (20 - 1) + 1);
console.log(randomPage)
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL =  `https://api.pexels.com/v1/search?query=nature&orientation=square&size=small&page=${randomPage}&per_page=6`;

const useFetchData = () => {
    const [photos, setPhotos] = useState([]);
    
    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch(BASE_URL, {
    //                 headers: {
    //                     Authorization: API_KEY,
    //                 },
    //             });
    //             const data = await response.json();
    //             setPhotos(data.photos);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     })();
    // }, []);

    useEffect(() => {
        fetch(BASE_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
        .then(res => res.json())
        .then(data => setPhotos(data.photos));
            
    }, [])

    return photos;
}

export default useFetchData;

