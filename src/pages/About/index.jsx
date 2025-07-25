import React from "react";
import './About.css'
import { Header } from "../../components/Header";
import { AnimatedSection } from "../../components/animations/animatedSection";
import image from '../../assets/images/happy-worker.jpg'
import { Footer } from "../../components/Footer";

export const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <AnimatedSection animation="slide-left">
                    <div className="image">
                        <img src={image} alt="happy worker"/>
                    </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-right">
                    <div className="text">
                        <h1>NOROBRA contigo de principio a fin</h1>
                        <h2>Más de 15 años construyendo con responsibilidad y precisión</h2>
                        <p>En NOROBRA Constructora nos especializamos en desarrollar y ejecutar proyectos de construcción de alta calidad. Combinamos experiencia técnica, compromiso y atención al detalle para entregar obras duraderas, funcionales y estéticamente cuidadas. Nuestra prioridad es ofrecer soluciones que superen las expectativas de cada cliente.</p>
                    </div>
                </AnimatedSection>
            </div>
            <Footer />
            
            
        </>
        
    )
}