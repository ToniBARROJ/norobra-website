import React from "react"
import "./header.css"


export const Header = () => {
    return (
        <>
            <header className="siteHeader">
                <div className="header">
                    <img src="/assets/images/logo-norobra.png" alt="Logo NOROBRA" className="logo" />
                    
                    <div className="navbar">
                        <ul>
                            <li>Inicio</li>
                            <li>Quienes somos</li>
                            <li>Servicios</li>
                            <li>Nuestras obras</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                </div>
                
            </header>
        </>
    )
}