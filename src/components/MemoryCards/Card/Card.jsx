import { useState } from "react";
import useFetchData from "../../../utils/API";
import "./style.css"

function Card() {   
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const { photos, reset } = useFetchData(); 

    const mixCards = () => {

        const mixedCards = [...photos, ...photos]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, uniqueId: Math.random() }))

        setCards(mixedCards);
        setScore(0);
        reset();
    }
    
    return (
        <div>
            <button onClick={mixCards}>Start</button>

            <div className="container">
                <div className="row">
                    {cards && cards.map((card) => (
                    <div className="col-4 card-grid" key={card.uniqueId}>
                        <div>
                            <img className="front" src={card.src.medium} alt="card front" />
                            <img className="back" src="/images/CardBack.jpg" alt="card back" />
                        </div>
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Card;

