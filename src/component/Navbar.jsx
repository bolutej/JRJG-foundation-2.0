import { useState } from "react";
import "../App.css";
import logoIcon from "../assets/Logo.svg"
import lineIcon from "../assets/line.svg"

export default function Navbar ({ links }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return(
        <nav>
            <div className="brand">
        <img src={logoIcon}className ="logo"/>
        <img src={lineIcon} className="line"/>
        <p><span className="first">Jesus Revealed<br/> Jesus Glorified</span><br/><span className="span">Foundation</span></p>
    </div>
            <button 
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen((prev) => !prev)}
                type="button" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-nav"
            >
             <span></span>
            <span></span>
            <span></span>   
            </button>

            <div className={`sides ${menuOpen ? "open": ""}`} id="main-nav">
                {links.map((link) => (
                    <a key={link.id} href={link.url} onClick={closeMenu}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    )
}