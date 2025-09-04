import React from "react";
import { Link } from "react-router-dom";

import "./privacyPolicies.css";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export const PrivacyPolicies = () => {
    function print() {
        window.print();
    }

    return (
        <>
            <Header />
            <div className="container">
                <main className="page" role="main">
                    <header>
                        <h1 id="policy-title">Política de Privacidad</h1>
                        <div className="meta">
                            Última actualización: <strong>11/08/2025</strong>
                        </div>
                    </header>

                    <nav className="index">
                        <ul>
                            <li>
                                <a href="#responsable">Responsable</a>
                            </li>
                            <li>
                                <a href="#datos">Datos que recogemos</a>
                            </li>
                            <li>
                                <a href="#finalidad">Finalidad y base legal</a>
                            </li>
                            <li>
                                <a href="#conservacion">Conservación</a>
                            </li>
                            <li>
                                <a href="#destinatarios">Destinatarios</a>
                            </li>
                            <li>
                                <a href="#derechos">Derechos</a>
                            </li>
                            <li>
                                <a href="#seguridad">Seguridad</a>
                            </li>
                            <li>
                                <a href="#cookies">Cookies</a>
                            </li>
                            <li>
                                <a href="#cambios">Cambios</a>
                            </li>
                            <li>
                                <a href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </nav>

                    <section id="intro">
                        <p>
                            En <strong>NOROBRA</strong> (en adelante, “la
                            Empresa”) nos comprometemos a proteger su privacidad
                            y a garantizar un tratamiento legítimo, transparente
                            y seguro de sus datos personales, conforme al
                            Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica
                            3/2018 (LOPDGDD).
                        </p>
                        <p>
                            Esta Política de Privacidad explica qué datos
                            recopilamos, con qué finalidades, durante cuánto
                            tiempo los conservamos, con quién los compartimos y
                            cómo puede ejercer sus derechos.
                        </p>
                    </section>

                    <section id="responsable">
                        <h2 id="h-responsable">
                            1. Responsable del tratamiento
                        </h2>
                        <p>
                            <strong>Nombre / Razón social:</strong> NOROBRA{" "}
                            <br />
                            <strong>NIF/CIF:</strong> [Número] <br />
                            <strong>Domicilio social:</strong> [Dirección
                            completa] <br />
                            <strong>Correo de contacto:</strong>{" "}
                            <a href="mailto:info-norobra@gmail.com?subject=Contactar con asistecia al cliente.">
                                info-norobra@gmail.com
                            </a>{" "}
                            <br />
                            <strong>Teléfono:</strong> [Teléfono]
                        </p>
                    </section>

                    <section id="datos">
                        <h2 id="h-datos">2. Datos que recopilamos</h2>
                        <p>
                            Podemos recoger y tratar las siguientes categorías
                            de datos personales:
                        </p>
                        <ul>
                            <li>
                                <strong>
                                    Datos identificativos y de contacto:
                                </strong>{" "}
                                nombre, apellidos, dirección postal, correo
                                electrónico y teléfono.
                            </li>
                            <li>
                                <strong>Datos de navegación:</strong> dirección
                                IP, páginas visitadas, tipo de navegador,
                                dispositivo, fecha y hora de acceso.
                            </li>
                            <li>
                                <strong>Datos de uso:</strong> información sobre
                                cómo utiliza nuestros servicios o interacciona
                                con el sitio web.
                            </li>
                            <li>
                                <strong>
                                    Datos facilitados voluntariamente:
                                </strong>{" "}
                                información incluida en formularios, solicitudes
                                de presupuesto o correspondencia.
                            </li>
                        </ul>
                    </section>

                    <section id="finalidad">
                        <h2 id="h-finalidad">
                            3. Finalidad del tratamiento y base legal
                        </h2>
                        <p>
                            Tratamos sus datos para las siguientes finalidades:
                        </p>
                        <ul>
                            <li>
                                <strong>Prestar y gestionar servicios:</strong>{" "}
                                gestionar solicitudes, contratos, presupuestos y
                                atención al cliente. <em>Base legal:</em>{" "}
                                ejecución de contrato o actuaciones
                                precontractuales.
                            </li>
                            <li>
                                <strong>Comunicación comercial:</strong> envío
                                de boletines, promociones y noticias (solo con
                                su consentimiento). <em>Base legal:</em>{" "}
                                consentimiento del interesado.
                            </li>
                            <li>
                                <strong>Mejora del servicio:</strong> análisis y
                                métricas para optimizar la experiencia en la
                                web. <em>Base legal:</em> interés legítimo.
                            </li>
                            <li>
                                <strong>Cumplimiento legal:</strong>{" "}
                                conservación de facturas y obligaciones
                                fiscales. <em>Base legal:</em> obligación legal.
                            </li>
                        </ul>
                    </section>

                    <section id="conservacion">
                        <h2 id="h-conservacion">4. Plazo de conservación</h2>
                        <p>
                            Conservarémos sus datos solamente durante el tiempo
                            necesario para cumplir con la finalidad para la que
                            se recabaron y para atender posibles
                            responsabilidades legales. Cuando el tratamiento se
                            base en el consentimiento, conservaremos los datos
                            hasta que el interesado lo revoque.
                        </p>
                        <p>
                            Para obligaciones contables o fiscales, sus datos se
                            conservarán durante los plazos exigidos por la
                            normativa aplicable.
                        </p>
                    </section>

                    <section id="destinatarios">
                        <h2 id="h-destinatarios">
                            5. Destinatarios y transferencias
                        </h2>
                        <p>Sus datos podrán ser comunicados a:</p>
                        <ul>
                            <li>
                                Proveedores tecnológicos que prestan servicios
                                (hosting, correo, plataformas de gestión).
                            </li>
                            <li>
                                Administraciones públicas cuando exista
                                obligación legal.
                            </li>
                            <li>
                                Proveedores de servicios de análisis y marketing
                                (p.ej. Google Analytics), siempre con las
                                garantías apropiadas.
                            </li>
                        </ul>
                        <p>
                            En caso de transferencias internacionales fuera del
                            Espacio Económico Europeo, adoptaremos las garantías
                            exigidas por la normativa (cláusulas contractuales
                            tipo, decisiones de adecuación, etc.) y se lo
                            comunicaremos cuando proceda.
                        </p>
                    </section>

                    <section id="derechos">
                        <h2 id="h-derechos">6. Derechos del interesado</h2>
                        <p>
                            Usted puede, en cualquier momento, ejercer los
                            derechos reconocidos por la normativa de protección
                            de datos:
                        </p>
                        <ul>
                            <li>
                                <strong>Acceso:</strong> obtener confirmación
                                sobre si tratamos sus datos y acceder a los
                                mismos.
                            </li>
                            <li>
                                <strong>Rectificación:</strong> solicitar la
                                corrección de datos inexactos.
                            </li>
                            <li>
                                <strong>Supresión:</strong> solicitar la
                                eliminación de sus datos cuando ya no sean
                                necesarios.
                            </li>
                            <li>
                                <strong>Limitación del tratamiento:</strong>{" "}
                                solicitar la restricción del tratamiento en
                                ciertos supuestos.
                            </li>
                            <li>
                                <strong>Oposición:</strong> oponerse al
                                tratamiento por motivos relacionados con su
                                situación particular.
                            </li>
                            <li>
                                <strong>Portabilidad:</strong> solicitar la
                                portabilidad de sus datos a otro responsable
                                cuando proceda.
                            </li>
                        </ul>
                        <p>
                            Para ejercer sus derechos, puede enviar una
                            solicitud por escrito a{" "}
                            <a href="mailto:info-norobra@gmail.com?subject=Contactar con asistecia al cliente.">
                                info-norobra@gmail.com
                            </a>
                            , indicando el derecho que desea ejercitar y
                            adjuntando copia de su documento identificativo.
                        </p>
                        <p>
                            También tiene derecho a presentar una reclamación
                            ante la Agencia Española de Protección de Datos:{" "}
                            <a
                                href="https://www.aepd.es/"
                                target="_blank"
                                rel="noopener"
                            >
                                www.aepd.es
                            </a>
                            .
                        </p>
                    </section>

                    <section id="seguridad">
                        <h2 id="h-seguridad">7. Medidas de seguridad</h2>
                        <p>
                            Adoptamos medidas técnicas y organizativas para
                            garantizar la seguridad de los datos y evitar su
                            alteración, pérdida, tratamiento o acceso no
                            autorizado. Entre otras, utilizamos cifrado TLS en
                            las comunicaciones, control de accesos y copias de
                            seguridad periódicas.
                        </p>
                    </section>

                    <section id="cookies">
                        <h2 id="h-cookies">8. Cookies y tecnología similar</h2>
                        <p>
                            Nuestra web utiliza cookies y otras tecnologías
                            similares para mejorar la experiencia, realizar
                            análisis y ofrecer contenidos personalizados. Para
                            más información sobre las cookies que empleamos,
                            finalidades y cómo gestionarlas, consulte nuestra
                            <Link to="/cookiePolicies">
                                Política de Cookies
                            </Link>
                            .
                        </p>
                    </section>

                    <section id="cambios">
                        <h2 id="h-cambios">9. Cambios en la política</h2>
                        <p>
                            Esta Política de Privacidad puede ser actualizada.
                            La versión vigente estará siempre disponible en esta
                            página con la fecha de última modificación. Cuando
                            los cambios sean relevantes, se le notificará con
                            antelación cuando proceda.
                        </p>
                    </section>

                    <section id="contacto">
                        <h2 id="h-contacto">10. Contacto</h2>
                        <p>
                            Si tiene preguntas sobre esta Política de Privacidad
                            o desea ejercer sus derechos, póngase en contacto
                            con nosotros:
                        </p>
                        <div className="contact-card" role="region">
                            <p>
                                <strong>Responsable:</strong> NOROBRA
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:info-norobra@gmail.com?subject=Contactar con asistecia al cliente.">
                                    info-norobra@gmail.com
                                </a>
                            </p>
                            <p>
                                <strong>Dirección:</strong> [Dirección completa]
                            </p>
                            <p>
                                <strong>Teléfono:</strong> [Teléfono]
                            </p>

                            <div className="actions">
                                <a
                                    href="/politica-de-cookies"
                                    className="btn secondary"
                                >
                                    Política de Cookies
                                </a>
                                <button className="print-btn" onClick={print}>
                                    Imprimir
                                </button>
                            </div>
                        </div>
                    </section>

                    <footer>
                        <p>
                            © <strong>NOROBRA</strong> — Todos los derechos
                            reservados.
                        </p>
                    </footer>
                </main>
            </div>
            <Footer />
        </>
    );
};
