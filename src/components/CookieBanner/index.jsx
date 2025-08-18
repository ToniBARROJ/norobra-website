import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './CookiePopUp.css';

export const CookieBanner = () => {

    const [showBanner, setShowBanner] = useState(true);

    // Busqueda previa en las cookies para no visualizar el banner
    useEffect(() => {
        const hasConsent = document.cookie.includes('cookieConsent=accepted');

        if (hasConsent) {
            setShowBanner(false)
        }

    }, []);

    // Función para crear cookie y quitar banner de la pantalla
    const handleAccept = () => {
        setShowBanner(false)

        const now = new Date();
        const oneDay = 86400000;
        now.setTime(now.getTime() + oneDay);
        const expirationDate = now.toUTCString();
        document.cookie = `cookieConsent=accepted; expires=${expirationDate}; path=/; secure`;
    }

    // Función para no añadir cookie y quitar el banner de la pantalla
    const handleReject = () => {
        setShowBanner(false)
    }

    return (
        <>
            {showBanner && (
                <div className="cookie-consent">
                    <div className="cookie-container">
                        <p>
                            Este sitio web utiliza cookies propias y de terceros para analizar el tráfico y personalizar el contenido. Puedes consultar nuestra <Link id="link" to="/cookiePolicies">política de cookies</Link> para más información y configurar tus preferencias.
                        </p>
                        <div className="cookie-buttons">
                            <button className="reject-cookies" onClick={handleReject}>Rechazar</button>
                            <button className="accept-cookies" onClick={handleAccept}>Aceptar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}