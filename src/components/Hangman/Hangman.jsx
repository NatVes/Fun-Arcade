import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Timer from "./Timer";
import HangmanFigure from "./HangmanFigure";
import Word from "./Word";
import WrongGuesses from "./WrongGuesses";
import Restart from "./Restart";
import GameOver from "./GameOver";
import GameWon from "./GameWon";
import './Hangman.css'

const words = [
    "GUITAR", "OCEAN", "WHISPER", "RAINBOW", "HARMONY", "CAROUSEL", "ZEPHYR", "MAPLE", "ORCHID", "FOREST",
    "APRICOT", "MARIGOLD", "SPARKLE", "ECHO", "FROST", "MIRAGE", "STRAW", "CAKE", "FUNKY", "GLYPH","JUMPY", 
    "VOICE", "FLOWN", "QUIRK", "DENIM",  "HAWK", "MIXUP", "DWARF", "EQUAL", "VIM", "ZESTY", "POND",
    "QUICK", "FILM", "BUMPY", "FLUKE", "VEND", "JURY", "GLOW", "FOAMY", "WIDTH", "PLUMB", "VIXEN", "QUOTA",
    "JIVED", "TRAMP", "FOIST", "ZONAL", "BEAU", "GRIN", "JOWLS", "PLEX", "VEX", "BUDGE", "WIMPY", "FAX",  "GYMN"
];

let playedWord = words[Math.floor(Math.random() * words.length)];
const characters = playedWord.split('');


function Hangman () {
    const [playable, setPlayable] = useState(true);
    const [rightGuesses, setRightGuesses] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    
    useEffect(() => {
        const sortLetter = event => {
            const{key, keycode} = event;
            if (playable) {
                const letter = key.toUpperCase();
                if (playedWord.includes(letter)) {
                    if (!rightGuesses.includes(letter)) {
                        setRightGuesses([...rightGuesses, letter]);
                    }
                    
                } else {
                    if (!wrongGuesses.includes(letter)) {
                    setWrongGuesses([...wrongGuesses, letter]);
                    }
                }
            }
        }
        window.addEventListener('keydown', sortLetter);
    },);
    console.log(characters)

    if (rightGuesses.length === playedWord.length) {
        return ( 
            <div>
                <GameWon />
            </div> 
        )} if (wrongGuesses.length < 8) {
            return ( 
                <div className="hangman-container">
                    <Header />
                    <Timer />
                    <div className="game-body">
                        <HangmanFigure wrongGuesses={wrongGuesses} />
                        <WrongGuesses wrongGuesses={wrongGuesses} />
                    </div>
                    <Word playedWord={playedWord} rightGuesses={rightGuesses} />
                    <Restart />
                </ div>
            )} else { 
                    return (
                        <div>
                            <GameOver />
                        </div>
                    )
    } 
};


export default Hangman