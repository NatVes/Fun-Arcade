import { useParams } from "react-router-dom"
import "./PlayGame.css"
import MCardLogic from "../../MemoryCards/MCardLogic"
import gamesData from "../../../games.json"
import TicTacToe from "../../TicTacToe/TicTacToe.jsx"
import Hangman from '../../Hangman/Hangman.jsx'
import { motion } from "framer-motion"

function PlayGame() {
  const { title } = useParams();
  let play;
  switch (title) {
    case "MEMORY GAME":
      play = <MCardLogic />;
      break;
    case "TIC-TAC-TOE":
      play = <TicTacToe />;
      break;
    case "HANGMAN":
      play = <Hangman />;
      break;
  }

  const selectedGame = gamesData.find((game) => game.title === title);

    return (
        <>
        <div className="container">
            <motion.h1
            initial={{ y: -250 }} 
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="title text-center my-4">
                {selectedGame && selectedGame.title}
            </motion.h1>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="row justify-content-center">
                <div className="col-10">
                {selectedGame && selectedGame.instruction.split('<br />').map((line, index) => (<p key={index} className="introduction">{line}</p>))}
                </div>
            </motion.div>
        </div>
        <div>
            {play}
        </div>
        </>
    )

}

export default PlayGame
