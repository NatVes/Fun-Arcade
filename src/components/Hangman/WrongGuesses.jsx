import React, { useEffect } from 'react';

function WrongGuesses ({wrongGuesses}) {    
    return (
        <div className='wrong-guess'>
            {wrongGuesses.length > 0 && <h2>Wrong Guesses</h2>}
            {wrongGuesses.map((letter, i) => <span key={i}>{letter}</span>)}
            
        </div>
    )
}

export default WrongGuesses;
