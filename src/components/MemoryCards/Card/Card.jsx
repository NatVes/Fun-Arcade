import { useEffect } from "react";
import useFetchData from "../../../utils/API";

function Card() {
    const cardImg = useFetchData();
    useEffect(() => {
        console.log(cardImg)
    }, [])
    
    return (
        <div>{cardImg.map((img, index) => (
            <img key={img.id} src={img.src.medium} alt={`Image ${index}`} />
        ))}</div>
    )
}

export default Card;

