import { useEffect, useState } from "react";
import useFetchData from "../../../utils/API";

function Card() {   
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const { photos, reset } = useFetchData(); 

    const mixCards = () => {

        const mixedCards = [...photos, ...photos]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, key: Math.random() }))

        setCards(mixedCards);
        setScore(0);
        reset();
    }
    
    return (
        <div>
            <button onClick={mixCards}>Start</button>
            {cards && cards.map((img, index) => (
            <img key={img.index} src={img.src.medium} alt={`Image ${index}`} width="250px" height="250px" objectFit="contain"/>
        ))}
        </div>
    )
}

export default Card;

