import { useParams } from "react-router-dom"
import "./PlayGame.css"
import MCardLogic from "../../MemoryCards/MCardLogic"
import gamesData from "../../../games.json"
import TicTacToe from "../../TicTacToe/TicTacToe.jsx"

function PlayGame() {
    const {title} = useParams();
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

    const selectedGame = gamesData.find(game => game.title === title);

    return (
        <>
        <div className="container">
            <h1 className="title text-center my-4">{selectedGame && selectedGame.title}</h1>
            <div className="row justify-content-center">
                <div className="col-8">
                {selectedGame && selectedGame.instruction.split('<br />').map((line, index) => (<p key={index} className="intro">{line}</p>))}
                </div>
            </div>
        </div>
        <div className="text-center my-5">
            {play}
        </div>
        </>
    )

}

export default PlayGame