import "./MemoryCard.css"

function MemoryCard({ card, handleChoice, flipped, disabled }) { 
    
    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
        
    }

    return (
        <div className="col-2 card-grid">
            <div className={`${flipped ? "flipped" : ""} table-cell`}>
                <img className="front" src={card.src.medium} alt="card front" />
                <img className="back" src="/images/CardBack.jpg" alt="card back" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default MemoryCard;

