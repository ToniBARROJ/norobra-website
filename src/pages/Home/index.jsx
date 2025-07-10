import React from "react";
import { BudgetButton } from "../../components/buttons/budgetButton";
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <>
            <section id="home" className={styles.home}>
                <p>Construimos futuro sobre bases sólidas.</p>
                <BudgetButton />
            </section>
        </>
    )
}