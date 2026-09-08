import { useState, useEffect } from "react";
import "../App.css"

const WORDS = [
    'Compassion.',
    'Charity.',
    'Empathy.',
    'Solicitude.',
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 300;

export default function Typewriter() {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
       const word = WORDS[wordIndex]; 
       let timeout;

            if (!isDeleting) {
                if(charIndex < word.length) {
                    timeout = setTimeout(() => {
                        setCharIndex((c) => c + 1);
                        setText(word.slice(0, charIndex + 1));
                    }, TYPE_SPEED);
                } else {
                    timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER);
                }
            } else {
                if (charIndex > 0) {
                    timeout = setTimeout(() => {
                        setCharIndex((c) => c - 1);
                        setText(word.slice(0, charIndex - 1));
                    }, DELETE_SPEED);
                } else {
                    timeout = setTimeout(() => {
                        setIsDeleting(false);
                        setWordIndex((w) => (w + 1) % WORDS.length);
                    }, PAUSE_BEFORE)
                }
            }
            return () => clearTimeout(timeout);
        }, [charIndex, isDeleting, wordIndex]);

        return (<><span id="tw">{text}</span><span className="cursor"></span></>)
    }