import { Link } from 'react-router-dom';
import "./FunFacts.css";
import gamesData from "../../../games.json";
import { motion } from 'framer-motion';

export default function FunFacts() {

  return (
    <div className="container">
      <motion.h1 
      initial={{ y: -250 }} 
      animate={{ y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
      className="title text-center my-5">
        FUN FACTS
      </motion.h1>
      <hr />
      <ul
        className="mx-5 my-5 p-0 table"
      >
        {gamesData.map((game, i) => (
          <motion.li
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: {type: "spring", stiffness: 80, duration: 0.3, delay: i * 0.3+0.5} }}
          whileHover={{ scale: 1.2, originX: 0, transition: {type: "spring", stiffness: 300} }}
          key={game.title}>
              <Link to={`/funfacts/${game.title}`} className="mb-5 table-cell d-flex align-items-center">
                <img  src={game.image} alt={game.title} />
                <h3>{game.title}</h3>
              </Link>
          </motion.li>
        ))}        
      </ul>
    </div>
  )
}
