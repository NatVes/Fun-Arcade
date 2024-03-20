import React from "react";

function GameOver() {
    function reload(e) {
        e.preventDefault();
        window.location.reload(false);
    }
    return (
        <div className='game-over'>
            <h1>GAME OVER</h1>
            <button type="button" onClick={reload} className="play-again-button">Play Again</button>
        </div>
    )
}

export default GameOver;