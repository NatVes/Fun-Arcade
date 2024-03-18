import "./MemoryCard.css"
import { motion } from "framer-motion"

function MemoryCard({ card, handleChoice, flipped, disabled, i }) { 
    
    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }
    }

    return (
        <motion.div 
        initial= {{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50, }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3, delay: i * 0.2 }}
        className="col-2 card-grid"
        >
            <div className={`${flipped ? "flipped" : ""} table-cell`}>
                <img className="front" src={card.src.medium} alt="card front" />
                <img className="back" src="/images/CardBack.jpg" alt="card back" onClick={handleClick}/>
            </div>
        </motion.div>
    )
}

export default MemoryCard;

