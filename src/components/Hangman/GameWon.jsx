import React from "react";

function GameWon() {
    function reload(e) {
        e.preventDefault();
        window.location.reload(false);
    }
    return (
        <div className="game-status-container">
            <div className='game-over'>
                <h1>WINNER!</h1>
                <h2 className="statement">You Guessed Correctly</h2>
                <button type="button" onClick={reload} className="play-again-button">Play Again</button>
            </div>
        </div>
    )
}

export default GameWon;

