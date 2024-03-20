import React from 'react';

function WrongGuesses ({wrongGuesses}) {
    return (
        <div className='wrong-guess-container'>
            {wrongGuesses.length > 0 && <h3 className='wrong'>Wrong Guesses:</h3>}
            {wrongGuesses.map((letter, i) => <span key={i}>{letter}</span>)}
        </div>
    )
}

export default WrongGuesses;