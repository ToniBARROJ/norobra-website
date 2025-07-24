import React from "react";
import { BudgetButton } from "../../components/buttons/budgetButton";
import { AnimatedSection } from "../../components/animations/animatedSection";
import "./Home.css"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = () => {
    return (
        <>
            <Header />
            <AnimatedSection animation="slide-left">
                <section id="home" className="home">
                    <div className="heroImage">
                        <h1>Construimos futuro sobre bases sólidas.</h1>
                        <BudgetButton />
                    </div>
                </section>
            </AnimatedSection>
            <AnimatedSection animation="slide-left">
                <section id="milestones" className="milestones">
                    <div className="cards">
                        <div className="milestone">
                            <h2>Compromiso</h2>
                            <p>100%</p>
                        </div>
                        <div className="milestone">
                            <h2>Experiencia</h2>
                            <p>15 años</p>
                        </div>
                        <div className="milestone">
                            <h2>Cliente Satisfechos</h2>
                            <p>Más de 300</p>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            <Footer />
        </>
    )
}