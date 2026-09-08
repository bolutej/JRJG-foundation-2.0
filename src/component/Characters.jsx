// import { useState } from "react";
import '../App.css';

    const MAX_LENGTH = 200;
    const WARNING_LENGTH = 50; 

export default function Characters({ value="" , onChange = () => {}}) {
     const remaining = MAX_LENGTH - value.length;
     const counterColor = remaining <= 10 ? "red" : remaining <= WARNING_LENGTH ? "orange" : "inherit";
        
     const handleChange = (e) => {
        onChange(e.target.value.slice(0, MAX_LENGTH));
     }
    return (
        <>
            <div className="input-wrapper">
                <textarea className="textarea" id="message" placeholder="Tell us what you would like to do" value={value} onChange={handleChange}/><br/>
                <span style={{ color: counterColor}} className="text-side">{remaining}</span>
            </div>
             <button type="submit" disabled={value.trim().length === 0}>Submit</button>
        </>
    )
}