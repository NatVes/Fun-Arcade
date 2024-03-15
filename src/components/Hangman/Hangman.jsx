import React, { useEffect, useState } from "react";
import Header from "./Header";
import HangmanFigure from "./HangmanFigure";
import Word from "./Word";
import WrongGuesses from "./WrongGuesses";
import './Hangman.css'

const words = [
    "elephant", "sunshine", "guitar", "banana", "happiness", "ocean", "mountain", "butterfly", "chocolate", "adventure",
    "whisper", "rainbow", "coffee", "fireworks", "unicorn", "symphony", "starlight", "serenade", "harmony", "carousel",
    "moonlight", "enchantment", "raspberry", "mystery", "tornado", "waterfall", "galaxy", "zephyr", "firefly", "serenity",
    "blossom", "amethyst", "bubble", "twilight", "peacock", "symphony", "horizon", "maple", "lavender", "orchid", "river",
    "forest", "skylark", "whisper", "apricot", "honeydew", "marigold", "sunshine", "sparkle", "stardust", "lavender",
    "butterfly", "echo", "frost", "bumblebee", "radiance", "rearl", "serenade", "whisper", "ocean", "starlight", "symphony",
    "whirlwind", "hummingbird", "blossom", "rainbow", "velvet", "mermaid", "fireworks", "moonlight", "lullaby", "adventure",
    "sunflower", "butterfly", "mirage", "whisper", "twilight", "cascade", "harmony", "galaxy", "serenity", "lavender",
    "ocean", "horizon", "symphony", "raspberry", "moonlight", "butterfly", "serenade", "blossom", "zephyr", "waterfall",
    "rainbow", "firefly", "harmony", "sunrise", "whisper", "ocean", "symphony", "serenity"
]

let playedWord = words[Math.floor(Math.random() * words.length)];


function Hangman (duration = 180000) {
    const [playable, setPlayable] = useState(true);
    const [rightGuesses, setRightGuesses] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    const [showError, setShowError] = useState(false);
    const [timeUp, setTimeUp] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimeUp(true);
        }, duration);

        return () => clearTimeout(timeout);
    }, [])

    useEffect(() => {
        const sortLetter = event => {
            const{key, keycode} = event;
            if (playable) {
                const letter = key.toLowerCase();
                if (playedWord.includes(letter)) {
                    setRightGuesses([...rightGuesses, letter]);
                } else {
                    setWrongGuesses([...wrongGuesses, letter]);
                }
            }
        }
        window.addEventListener('keydown', sortLetter);
        return () => window.removeEventListener('keydown', sortLetter);
    },[]);

    return (
        <div className="hangman-container">
            <Header />
            <HangmanFigure />
            <Word playedWord={playedWord} rightGuesses={rightGuesses} />
            <WrongGuesses wrongGuesses={wrongGuesses} />
        </ div>
    )
};

export default Hangman