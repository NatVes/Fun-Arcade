import React from 'react';

function WrongGuesses ({wrongGuesses}) {
    return (
        <div>
            {wrongGuesses.length > 0 && <h2>Wrong</h2>}
            {wrongGuesses.map((letter, i) => <span key={i}>{letter}</span>)}
        </div>
    )
}

export default WrongGuesses;