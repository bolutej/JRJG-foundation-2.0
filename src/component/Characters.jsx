import { useState } from "react";
import '../App.css';

    const MAX_LENGTH = 200;
    const WARNING_LENGTH = 50;

export default function Characters() {

     const [characters, setCharacters] = useState("");

     const handleChange = (e) => {
        setCharacters(e.target.value.slice(0, MAX_LENGTH));
     }

     const remaining = MAX_LENGTH - characters.length;
     const counterColor = remaining <= 10 ? "red" : remaining <= WARNING_LENGTH ? "orange" : "inherit";

    return (
        <>
            <div className="input-wrapper">
                <textarea className="textarea" id="message" placeholder="Tell us what you would like to do" value={characters} onChange={handleChange} rows={6}/><br/>
                <span style={{ color: counterColor}} className="text-side">{remaining}</span>
            </div>
             <button disabled={characters.trim().length === 0}>Submit</button>
        </>
    )
}