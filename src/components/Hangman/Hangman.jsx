import React, { useEffect, useState } from "react";
import Header from "./Header";
import Timer from "./Timer";
import HangmanFigure from "./HangmanFigure";
import Word from "./Word";
import WrongGuesses from "./WrongGuesses";
import './Hangman.css'

const words = [
    "ELEPHANT", "SUNSHINE", "GUITAR", "BANANA", "HAPPINESS", "OCEAN", "MOUNTAIN", "BUTTERFLY", "CHOCOLATE", "ADVENTURE",
    "WHISPER", "RAINBOW", "COFFEE", "FIREWORKS", "UNICORN", "SYMPHONY", "STARLIGHT", "SERENADE", "HARMONY", "CAROUSEL",
    "MOONLIGHT", "ENCHANTMENT", "RASPBERRY", "MYSTERY", "TORNADO", "WATERFALL", "GALAXY", "ZEPHYR", "FIREFLY", "SERENITY",
    "BLOSSOM", "AMETHYST", "BUBBLE", "TWILIGHT", "PEACOCK", "SYMPHONY", "HORIZON", "MAPLE", "LAVENDER", "ORCHID", "RIVER",
    "FOREST", "SKYLARK", "WHISPER", "APRICOT", "HONEYDEW", "MARIGOLD", "SUNSHINE", "SPARKLE", "STARDUST", "LAVENDER",
    "BUTTERFLY", "ECHO", "FROST", "BUMBLEBEE", "RADIANCE", "REARL", "SERENADE", "WHISPER", "OCEAN", "STARLIGHT", "SYMPHONY",
    "WHIRLWIND", "HUMMINGBIRD", "BLOSSOM", "RAINBOW", "VELVET", "MERMAID", "FIREWORKS", "MOONLIGHT", "LULLABY", "ADVENTURE",
    "SUNFLOWER", "BUTTERFLY", "MIRAGE", "WHISPER", "TWILIGHT", "CASCADE", "HARMONY", "GALAXY", "SERENITY", "LAVENDER",
    "OCEAN", "HORIZON", "SYMPHONY", "RASPBERRY", "MOONLIGHT", "BUTTERFLY", "SERENADE", "BLOSSOM", "ZEPHYR", "WATERFALL",
    "RAINBOW", "FIREFLY", "HARMONY", "SUNRISE", "WHISPER", "OCEAN", "SYMPHONY", "SERENITY"
];

let playedWord = words[Math.floor(Math.random() * words.length)];


function Hangman () {
    const [playable, setPlayable] = useState(true);
    const [rightGuesses, setRightGuesses] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    const [showError, setShowError] = useState(false);

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

    return (
        <div className="hangman-container">
            <Header />
            <Timer />
            <div className="game-body">
                <HangmanFigure />
                <WrongGuesses wrongGuesses={wrongGuesses} />
            </div>
            <Word playedWord={playedWord} rightGuesses={rightGuesses} />
        </ div>
    )
};


export default Hangman