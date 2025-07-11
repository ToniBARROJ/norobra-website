import React from "react";
import { BudgetButton } from "../../components/buttons/budgetButton";
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <>
            <section id="home" className={styles.home}>
                <div className={styles.heroImage}>
                    <h1>Construimos futuro sobre bases sólidas.</h1>
                    <BudgetButton />
                </div>
                
            </section>
        </>
    )
}