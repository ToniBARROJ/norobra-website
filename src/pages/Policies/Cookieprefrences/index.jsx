import React from "react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import "./cookiePreferences.css";

export const CookiePreferences = () => {
    const handleAccept = () => {
        const checkboxes = document.getElementsByTagName("input");
        let count = 0;

        for (let index = 0; index < checkboxes.length; index++) {
            if (
                checkboxes[index].type === "checkbox" &&
                checkboxes[index].checked === true
            ) {
                count++;
            }
        }

        // Con este for loop podriamos añadir más complejidad y crear una cookie para cada checkbox dando condiciones al if statement. Esto solo cuenta el número de checkboxes que hemos apretado.

        const now = new Date();
        const oneDay = 86400000;
        now.setTime(now.getTime() + oneDay * 30);
        const expirationDate = now.toUTCString();
        document.cookie = `cookiePreferences=${count} saved; expires=${expirationDate}; path=/; secure`;
    };

    function rejectAll() {
        const checkboxes = document.querySelectorAll(".toggle");
        checkboxes.forEach((checkbox) => {
            if (!checkbox.disabled) checkbox.checked = false;
        });
    }

    return (
        <>
            <Header />
            <div className="cookie-preferences-container">
                <h1>Preferencias de Cookies</h1>
                <p>
                    En <strong>NOROBRA</strong> respetamos su privacidad y le
                    damos la opción de elegir qué tipos de cookies desea
                    aceptar. Puede modificar sus preferencias en cualquier
                    momento.
                </p>
                <form id="cookiePreferencesForm">
                    <div className="cookie-category">
                        <h2>Cookies necesarias</h2>
                        <input
                            type="checkbox"
                            checked
                            disabled
                            className="toggle"
                        />
                    </div>
                    <p>
                        Estas cookies son esenciales para el correcto
                        funcionamiento del sitio web y no pueden desactivarse.
                    </p>
                    <div className="cookie-category">
                        <h2>Cookies de personalización</h2>
                        <input
                            type="checkbox"
                            name="personalizacion"
                            className="toggle"
                        />
                    </div>
                    <p>
                        Permiten recordar sus preferencias, como el idioma o la
                        región, para mejorar su experiencia.
                    </p>
                    <div className="cookie-category">
                        <h2>Cookies analíticas</h2>
                        <input
                            type="checkbox"
                            name="analiticas"
                            className="toggle"
                        />
                    </div>
                    <p>
                        Nos ayudan a entender cómo los usuarios interactúan con
                        el sitio para mejorar su funcionamiento.
                    </p>
                    <div className="cookie-category">
                        <h2>Cookies de publicidad</h2>
                        <input
                            type="checkbox"
                            name="publicidad"
                            className="toggle"
                        />
                    </div>
                    <p>
                        Utilizadas para mostrar anuncios relevantes y
                        personalizados en función de sus intereses.
                    </p>
                    <div className="buttons">
                        <button
                            type="submit"
                            className="save"
                            onClick={handleAccept}
                        >
                            Guardar preferencias
                        </button>
                        <button
                            type="button"
                            className="reject"
                            onClick={rejectAll}
                        >
                            Rechazar todas
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};
