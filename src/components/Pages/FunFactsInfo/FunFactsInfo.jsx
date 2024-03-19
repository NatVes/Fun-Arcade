import { useParams } from "react-router-dom";
import gamesData from "../../../games.json";
import "./FunFactsInfo.css";
import { motion } from "framer-motion";

function FunFactsInfo() {
    const {title} = useParams();
    const selectedGame = gamesData.find(game => game.title === title);

    return (
        <div className="container">
            <motion.h1 
            initial={{ y: -250 }} 
            animate={{ y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            className="title text-center my-5">
                {selectedGame.title}
            </motion.h1>
            <hr />
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="row justify-content-center">
                <div className="col-8 info">
                    <p><span className="fw-bold">Year Created</span> - {selectedGame['year-created']}</p>
                    <p><span className="fw-bold">Players</span> - {selectedGame.players}</p>
                    <p><span className="fw-bold">Skills</span> - {selectedGame.skills}</p>
                    <br />
                    {selectedGame && selectedGame['fun-fact'].split('<br />').map((line, index) => (<p key={index}>{line}</p>))}
                    <p className="fw-bold"><span>Data source</span> - <a href={selectedGame["source-link"]}  target="_blank">{selectedGame["data-source"]}</a></p>
                </div>
            </motion.div>
        </div>
    )
}

export default FunFactsInfo


