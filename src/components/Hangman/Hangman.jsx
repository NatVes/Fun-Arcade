import React, { useEffect, useState } from "react";
import Header from "./Header";
import HangmanFigure from "./HangmanFigure";
import Word from "./Word";
import './Hangman.css'

const words = [
    "Elephant", "Sunshine", "Guitar", "Banana", "Happiness", "Ocean", "Mountain", "Butterfly", "Chocolate", "Adventure",
    "Whisper", "Rainbow", "Coffee", "Fireworks", "Unicorn", "Symphony", "Starlight", "Serenade", "Harmony", "Carousel",
    "Moonlight", "Enchantment", "Raspberry", "Mystery", "Tornado", "Waterfall", "Galaxy", "Zephyr", "Firefly", "Serenity",
    "Blossom", "Amethyst", "Bubble", "Twilight", "Peacock", "Symphony", "Horizon", "Maple", "Lavender", "Orchid", "River",
    "Forest", "Skylark", "Whisper", "Apricot", "Honeydew", "Marigold", "Sunshine", "Sparkle", "Stardust", "Lavender",
    "Butterfly", "Echo", "Frost", "Bumblebee", "Radiance", "Pearl", "Serenade", "Whisper", "Ocean", "Starlight", "Symphony",
    "Whirlwind", "Hummingbird", "Blossom", "Rainbow", "Velvet", "Mermaid", "Fireworks", "Moonlight", "Lullaby", "Adventure",
    "Sunflower", "Butterfly", "Mirage", "Whisper", "Twilight", "Cascade", "Harmony", "Galaxy", "Serenity", "Lavender",
    "Ocean", "Horizon", "Symphony", "Raspberry", "Moonlight", "Butterfly", "Serenade", "Blossom", "Zephyr", "Waterfall",
    "Rainbow", "Firefly", "Harmony", "Sunrise", "Whisper", "Ocean", "Symphony", "Serenity"
]

let playedWord = words[Math.floor(Math.random() * words.length)];


function Hangman (duration = 90000) {
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

    return (
        <div>
            <Header />
            <HangmanFigure />
            <Word playedWord={playedWord} rightGuesses={rightGuesses} />
        </ div>
    )
};

export default Hangman