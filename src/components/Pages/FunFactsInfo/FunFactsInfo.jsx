import { useParams } from "react-router-dom";
import gamesData from "../../../games.json";
import "./FunFactsInfo.css";

function FunFactsInfo() {
    const {title} = useParams();
    const selectedGame = gamesData.find(game => game.title === title);

    return (
        <div className="container">
            <h1 className="title text-center my-5">{selectedGame.title}</h1>
            <hr />
            <div className="row justify-content-center">
                <div className="col-8 info">
                    <p><span className="fw-bold">Year Created</span> - {selectedGame['year-created']}</p>
                    <p><span className="fw-bold">Players</span> - {selectedGame.players}</p>
                    <p><span className="fw-bold">Skills</span> - {selectedGame.skills}</p>
                    <br />
                    {selectedGame && selectedGame['fun-fact'].split('<br />').map((line, index) => (<p key={index}>{line}</p>))}
                    <p className="fw-bold"><span>Data source</span> - <a href={selectedGame["source-link"]}  target="_blank">{selectedGame["data-source"]}</a></p>
                </div>
            </div>
        </div>
    )
}

export default FunFactsInfo


