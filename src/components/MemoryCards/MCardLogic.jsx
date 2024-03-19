import { useEffect, useState } from "react";
import useFetchData from "../../utils/API";
import MemoryCard from "./MemoryCard/MemoryCard"

function MCardLogic() { 
    const { photos, reset } = useFetchData();  
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [name, setName] = useState("");
    const [firstChoice, setFirstChoice] = useState(null);
    const [secondChoice, setSecondChoice] = useState(null); 
    const [disabled, setDisabled] = useState(false);

    let MCardScore = [];

    const checkAdd = () => {
        var storedData = JSON.parse(localStorage.getItem("MCardScore"));

        if (storedData !== null) {
            MCardScore = storedData;
        }
    }

    checkAdd();

    const handleInputChange = (event) => {
        const playersName = event.target.value;
        setName(playersName);
    }

    const saveScore = (event) => {
        event.preventDefault();

        const currentScore = {
            name: name,
            score: score,
        };

        MCardScore.push(currentScore);

        localStorage.setItem("MCardScore", JSON.stringify(MCardScore));
        setName("")
    }

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
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="row row-gap-4 justify-content-center">
                        {cards && cards.map((card) => (
                        <MemoryCard key={card.uniqueId} card={card} handleChoice={handleChoice} flipped={card === firstChoice || card === secondChoice || card.matched} disabled={disabled} />
                        ))}
                    </div>
                </div>
            </div>
            <p className="score my-3">Score: {score}</p>
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3" style={{ width: "40%", alignSelf: "center"}} >
                    <input value={name} type="text" className="form-control" placeholder="Enter your name" aria-label="Player's name" aria-describedby="button-addon" onChange={handleInputChange}/>
                    <button className="btn" type="button" id="button-addon" onClick={saveScore}>Save</button>
                </div>
            </div>
            <button className="btn mt-3" onClick={mixCards}>Start</button>
        </div>
    )
}

export default MCardLogic;
