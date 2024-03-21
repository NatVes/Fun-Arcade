import ScoreTable from "../../ScoreTable/ScoreTable";
import "./Score.css";
import { motion } from "framer-motion";

export default function Score() {

  let MCardScore = JSON.parse(localStorage.getItem("MCardScore"));

  return (
    <div className="container">
      <motion.h1 
      initial={{ y: -250 }} 
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      className="title text-center my-5">SCORES</motion.h1>
      <hr />
      <div className="row justify-content-center my-5">
        <div className="col-md-4 mb-3">
          <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          >TIC-TAC-TOE</motion.h2>
        </div>
        <div className="col-md-4 mb-3">
          <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          >MEMORY GAME</motion.h2>
            {MCardScore && MCardScore.map((score, index) => (
              <motion.ul 
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 1, 
                delay: index * 0.3+1
              }}
              className="ps-0 text-center" 
              i={index} key={index}>
                  <ScoreTable name={score.name} score={score.score} />
              </motion.ul>
        ))}
        </div>
        <div className="col-md-4 mb-3">
          <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          >HANGMAN</motion.h2>
        </div>
      </div>
    </div>
  )
}
