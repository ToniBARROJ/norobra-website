import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AnimatedSection } from "../../components/animations/animatedSection";
import { BudgetButton } from "../../components/buttons/budgetButton";
import './Services.css'
import image1 from "../../assets/images/reforma1.jpg";
import image2 from "../../assets/images/obraNueva1.jpg"
import image3 from "../../assets/images/direccionTecnica.jpg"

export const Services = () => {
    return (
        <>
            <Header />
            <div className="services">
                <AnimatedSection animation="slide-left">
                    <div className="service1" id="service">
                        <img src={image1} alt="Reforma de interior moderno en un piso" id="reformaInterior"/>
                        <div className="textSection">
                            <h2>Reformas integrales</h2>
                            <p>Transformamos espacios residenciales y comerciales con soluciones funcionales, modernas y eficientes. Nos encargamos de la planificación, demolición, instalaciones, acabados y todos los detalles para que no tengas que preocuparte por nada.</p>
                            <BudgetButton />
                        </div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection animation="slide-right">
                    <div className="service2" id="service">
                        <img src={image2} alt="Construcción de vivienda unifamiliar moderna" id="obraNueva"/>
                        <div className="textSection">
                            <h2>Construcción de obra nueva</h2>
                            <p>Desarrollamos proyectos completos de construcción desde los cimientos hasta la entrega final. Ya sea una vivienda, local o nave industrial, trabajamos con materiales de alta calidad y un equipo técnico especializado que garantiza resultados duraderos, seguros y a medida.</p>
                            <BudgetButton />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-left">
                    <div className="service3" id="service">
                        <img src={image3} alt="Técnico revisando planos en una obra en construcción" id="direccionTecnica"/>
                        <div className="textSection">
                            <h2>Dirección técnica y gestión de obra</h2>
                            <p>Ofrecemos supervisión y coordinación profesional en cada etapa del proyecto. Controlamos plazos, costes, seguridad y calidad, asegurando que cada obra se ejecute según la normativa y las expectativas del cliente.</p>
                            <BudgetButton />
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <Footer />
        </>
    )
}