import React from "react";

function Word ({playedWord, rightGuesses}) {
    return (
        <div className="word-container">
            <div className="word" id="word">
                {playedWord.split('').map((letter, i) => {
                    return (
                    <span className="letter" key={i}>
                        {rightGuesses.includes(letter) ? letter : ""}
                    </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Word;
