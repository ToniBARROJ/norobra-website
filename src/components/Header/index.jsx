import React from "react"
import "./header.css"
import logo from '../../assets/logos/logo-norobra.png'
import { Navbar } from "../Navbar"
import { Hamburger } from "../buttons/toggleButton"


export const Header = () => {
    return (
        <>
            <header className="siteHeader">
                <div className="header">
                    <img src={logo} alt="Logo NOROBRA" className="logo" />
                    
                    <Navbar />
                    <Hamburger />
                </div>
                
            </header>
        </>
    )
}