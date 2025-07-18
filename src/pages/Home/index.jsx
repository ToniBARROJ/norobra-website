import React from "react";
import { BudgetButton } from "../../components/buttons/budgetButton";
import { AnimatedSection } from "../../components/animations/animatedSection";
import "./Home.css"
import { Header } from "../../components/Header";

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
                    <div>
                    </div>
                </section>
            </AnimatedSection>
        </>
    )
}