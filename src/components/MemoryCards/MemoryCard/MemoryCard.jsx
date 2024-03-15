import "./MemoryCard.css"

function MemoryCard({ card, handleChoice, flipped, disabled }) { 
    
    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
        
    }

    return (
        <div className="col-md-4 col-sm-6 col-6 card-grid">
            <div className={flipped ? "flipped" : ""}>
                <img className="front img-fluid" src={card.src.medium} alt="card front" />
                <img className="back img-fluid" src="/images/CardBack.jpg" alt="card back" onClick={handleClick}/>
            </div>
        </div>
    )
}

export default MemoryCard;

