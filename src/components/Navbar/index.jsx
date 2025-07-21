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
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Quienes somos</Link></li>
                    <li><Link to="/services">Servicios</Link></li>
                    <li><Link to="/ourBuilds">Nuestras obras</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
            </nav>
        </>
    )
}