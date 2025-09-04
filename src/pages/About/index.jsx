import { lazy, Suspense } from "react";
import "./About.css";
import { AnimatedSection } from "../../components/animations/animatedSection";
import image from "../../assets/images/happy-worker.jpg";
import { Footer } from "../../components/Footer";
import { BudgetButton } from "../../components/buttons/budgetButton";

const Header = lazy(() => import("../../components/Header"));

export const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <AnimatedSection animation="slide-left">
                    <div className="image">
                        <img src={image} alt="happy worker" />
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-right">
                    <div className="text">
                        <h1>NOROBRA contigo de principio a fin</h1>
                        <h2>
                            Más de 15 años construyendo con responsibilidad y
                            precisión
                        </h2>
                        <p>
                            En NOROBRA Constructora nos especializamos en
                            desarrollar y ejecutar proyectos de construcción de
                            alta calidad. Combinamos experiencia técnica,
                            compromiso y atención al detalle para entregar obras
                            duraderas, funcionales y estéticamente cuidadas.
                            Nuestra prioridad es ofrecer soluciones que superen
                            las expectativas de cada cliente.
                        </p>
                        <BudgetButton />
                    </div>
                </AnimatedSection>
            </div>
            <div>
                <section id="about-us" className="about-us">
                    <h1 className="about-title">Quiénes somos</h1>
                    <p className="about-text">
                        En <strong>NOROBRA Constructora</strong> nos
                        especializamos en construir espacios duraderos,
                        funcionales y adaptados a las necesidades de cada
                        cliente. Nuestra experiencia, compromiso y enfoque
                        técnico nos permiten llevar a cabo proyectos
                        residenciales, comerciales e industriales con la máxima
                        calidad y eficiencia.
                    </p>
                    <AnimatedSection animation="slide-left">
                        <section className="about-section">
                            <h2 className="section-title">Nuestra historia</h2>
                            <p className="about-text">
                                Fundada en 2009, NOROBRA nació con el objetivo
                                de ofrecer un servicio integral y confiable en
                                el sector de la construcción. Desde entonces,
                                hemos crecido junto a nuestros clientes,
                                consolidando una reputación basada en el
                                cumplimiento, la seriedad y la excelencia
                                técnica.
                            </p>
                        </section>
                    </AnimatedSection>
                    <AnimatedSection animation="slide-right">
                        <section className="about-section">
                            <h2 className="section-title">Lo que nos define</h2>
                            <ul className="about-list">
                                <li>
                                    <strong>Compromiso:</strong> Cuidamos cada
                                    detalle y cumplimos cada plazo.
                                </li>
                                <li>
                                    <strong>Calidad:</strong> Seleccionamos
                                    materiales de alto rendimiento y ejecutamos
                                    con precisión.
                                </li>
                                <li>
                                    <strong>Transparencia:</strong> Comunicación
                                    constante con el cliente durante todo el
                                    proceso.
                                </li>
                                <li>
                                    <strong>Innovación:</strong> Aplicamos
                                    soluciones modernas, eficientes y
                                    sostenibles.
                                </li>
                            </ul>
                        </section>
                    </AnimatedSection>
                    <AnimatedSection animation="slide-left">
                        <section className="about-section">
                            <h2 className="section-title">Nuestro equipo</h2>
                            <p className="about-text">
                                Contamos con un equipo multidisciplinar de
                                arquitectos, ingenieros, técnicos y operarios
                                altamente cualificados. Gracias a su experiencia
                                y formación continua, aseguramos un resultado
                                profesional en cada proyecto.
                            </p>
                        </section>
                    </AnimatedSection>
                    <blockquote className="about-quote">
                        “Construimos más que estructuras: construimos
                        confianza.”
                        <footer className="quote-author">
                            – NOROBRA Constructora
                        </footer>
                    </blockquote>
                </section>
            </div>
            <Footer />
        </>
    );
};
