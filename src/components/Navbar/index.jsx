import React from "react";
import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <ul className={`navlinks ${isOpen ? "open" : ""}`}>
                    <li>Inicio</li>
                    <li>Quienes somos</li>
                    <li>Servicios</li>
                    <li>Nuestras obras</li>
                    <li>Contacto</li>
                </ul>
                <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
            </nav>
        </>
    )
}