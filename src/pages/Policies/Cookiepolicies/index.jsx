import React from "react";

import './cookiePolicies.css';
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export const CookiePolicies = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Política de Cookies</h1>
                <p>En <strong>NOROBRA</strong> utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Al continuar navegando, usted acepta el uso de cookies de acuerdo con la presente política.</p>

                <h2>1. ¿Qué son las cookies?</h2>
                <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Sirven para que la web funcione correctamente, mejorar la navegación y recopilar información sobre la actividad del usuario.</p>

                <h2>2. Tipos de cookies que utilizamos</h2>
                <ul>
                    <li><strong>Cookies técnicas:</strong> necesarias para el correcto funcionamiento de la web.</li>
                    <li><strong>Cookies de personalización:</strong> permiten recordar sus preferencias (idioma, región, etc.).</li>
                    <li><strong>Cookies analíticas:</strong> nos ayudan a comprender cómo interactúan los usuarios con la web.</li>
                    <li><strong>Cookies de publicidad:</strong> utilizadas para mostrar anuncios relevantes para usted.</li>
                </ul>

                <h2>3. Cookies propias y de terceros</h2>
                <p>Utilizamos tanto cookies propias, gestionadas directamente por nosotros, como cookies de terceros, gestionadas por servicios externos como Google Analytics, para fines analíticos y publicitarios.</p>

                <h2>4. ¿Cómo puede gestionar o eliminar las cookies?</h2>
                <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador que utilice:</p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank">Microsoft Edge</a></li>
                </ul>

                <h2>5. Cambios en la política de cookies</h2>
                <p>Nos reservamos el derecho a actualizar esta política de cookies en cualquier momento. Cualquier cambio se publicará en esta página con la fecha de la última actualización.</p>

                <p><strong>Última actualización:</strong> 14 de agosto de 2025</p>
            </div>
            <Footer />
        </>
    )
}