import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <ul className={`navlinks ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" className="links">Inicio</Link></li>
                    <li><Link to="/about" className="links">Quienes somos</Link></li>
                    <li><Link to="/services" className="links">Servicios</Link></li>
                    <li><Link to="/ourBuilds" className="links">Nuestras obras</Link></li>
                    <li><Link to="/contact" className="links">Contacto</Link></li>
                </ul>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
            </nav>
        </>
    )
}