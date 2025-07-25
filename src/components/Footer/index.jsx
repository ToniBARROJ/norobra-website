import React from "react";
import logo from '../../assets/logos/logo-norobra.png'
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerLinks">
                    <div className="logoDescription">
                        <img src={logo} alt="NOROBRA LOGO" className="footerLogo"/>
                        <p className="footerDescription">Construcciones Norobra es tu constructora en el norte de España. Con más de 15 años de experiencia, somos especialistas en proyectos de obra nueva, reformas integrales y refuerzos estructurales.</p>
                    </div>
                    <div className="footerMenu">
                        <h3>Menú</h3>
                        <ul>
                            <li>
                                <Link to="/" className="links">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/about" className="links">Quienes somos</Link>
                            </li>
                            <li>
                                <Link to="/services" className="links">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/ourBuilds" className="links">Nuestras obras</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="links">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="interestLinks">
                        <h3>Links de Interés</h3>
                        <ul> {/* Aquí tengo que poner Link nativos de React hacia páginas dedicadas a los temas de la lista */}
                            <li>Aviso legal</li>
                            <li>P. de Privacidad</li>
                            <li>P. de Cookies</li>
                            <li>Preferencias de Cookies</li>
                        </ul>
                    </div>
                    <div className="contactUs">
                        <h3>Contáctanos</h3>
                        <a href="tel:+34686102617">
                            <span>
                                <svg className="phonePath" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                                </svg>
                            </span>
                            <span>+34 686 10 26 17</span>
                        </a>
                    </div>
                </div>
                <div className="footerRights">
                    <p>© 2025 Construcciones Norobra. Todos los Derechos Reservados.</p>
                </div>
            </div>
            
        </>
    )
}