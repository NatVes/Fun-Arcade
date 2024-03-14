import { useEffect, useState } from "react";
import useFetchData from "../../utils/API";
import MemoryCard from "./MemoryCard/MemoryCard"

function MCardLogic() { 
    const { photos, reset } = useFetchData();  
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [firstChoice, setFirstChoice] = useState(null);
    const [secondChoice, setSecondChoice] = useState(null); 
    const [disabled, setDisabled] = useState(false);

    const mixCards = () => {
        const mixedCards = [...photos, ...photos]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, uniqueId: Math.random(), matched: false }))

        setFirstChoice(null);
        setSecondChoice(null)
        setCards(mixedCards);
        setScore(0);
        reset();
    }

    const handleChoice = (card) => {
        firstChoice ? setSecondChoice(card) : setFirstChoice(card)
    }

    useEffect(() => {
        if (firstChoice && secondChoice) {
            setDisabled(true);
            if (firstChoice.src === secondChoice.src) {
                setCards(c => {
                    return c.map(card => {
                        if (card.src === firstChoice.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetScore()
            } else {
                setTimeout(() => resetScore(), 1000)
            }
        }
    }, [firstChoice, secondChoice])

    const resetScore = () => {
        setFirstChoice(null);
        setSecondChoice(null);
        setScore(s => s + 1)
        setDisabled(false)
    }

    useEffect(() => {
        mixCards()
    }, [])

    return (
        <div>
            <button onClick={mixCards}>Start</button>

            <div className="container">
                <div className="row mt-3 row-gap-4">
                    {cards && cards.map((card) => (
                    <MemoryCard key={card.uniqueId} card={card} handleChoice={handleChoice} flipped={card === firstChoice || card === secondChoice || card.matched} disabled={disabled} />
                    ))}
                </div>
            </div>
            <p>Score: {score}</p>
        </div>
    )
}

export default MCardLogic;

