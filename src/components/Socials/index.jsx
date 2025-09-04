import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import "./Socials.css";

export const Socials = () => {
    return (
        <section className="social-container">
            <h3 className="social-title">Síguenos en redes</h3>
            <ul className="social-links">
                <li>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook"
                    >
                        <FaFacebookF className="icon" />
                        Facebook
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                    >
                        <FaInstagram className="icon" />
                        Instagram
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                    >
                        <FaLinkedinIn className="icon" />
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube"
                    >
                        <FaYoutube className="icon" />
                        YouTube
                    </a>
                </li>
            </ul>
        </section>
    );
};
