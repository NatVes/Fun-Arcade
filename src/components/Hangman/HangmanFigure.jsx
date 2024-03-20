import React from "react";

function HangmanFigure () {
    return (
        <div className="hangman-figure-container">
            <svg height="330px" className="hangman-figure">
                {/* Frame Base */}
                <line x1="140" x2="220" y1="320" y2="320" className="frame"/>
                {/* Frame Up */}
                <line x1="180" x2="180" y1="20" y2="320" className="frame"/>
                {/* Frame Top-bar */}
                <line x1="45" x2="180" y1="20" y2="20" className="frame"/>
                {/* Frame Hang */}
                <line x1="45" x2="45" y1="20" y2="70" className="frame"/>
                

                {/* Head */}
                <circle cx="45" cy="100" r="30" fill="none" className="figure" />

                {/* Body */}
                <line x1="45" x2="45" y1="130" y2="220" className="figure"/>

                {/* Left arm */}
                <line x1="45" x2="5" y1="180" y2="140" className="figure"/>
                {/* Left arm */}
                <line x1="45" x2="85" y1="180" y2="140" className="figure"/>

                {/* Left leg */}
                <line x1="45" x2="5" y1="220" y2="260" className="figure"/>
                {/* Right leg */}
                <line x1="45" x2="85" y1="220" y2="260" className="figure"/>
            </svg>
        </div>
    )
}

export default HangmanFigure;