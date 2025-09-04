import React from "react";
import "./header.css";
import logo from "../../assets/logos/logo-norobra.png";
import { Navbar } from "../Navbar";

const Header = () => {
    return (
        <>
            <header className="siteHeader">
                <div className="header">
                    <img src={logo} alt="Logo NOROBRA" className="logo" />

                    <Navbar />
                </div>
            </header>
        </>
    );
};

export { Header, Header as default };
