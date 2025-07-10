import React from "react"
import styles from "./header.module.css"


export const Header = () => {
    return (
        <>
            <header className="site-header">
                <div className={styles.header}>
                    <img src="/assets/images/logo-norobra.png" alt="Logo NOROBRA" className={styles.logo} />
                </div>
            </header>
        </>
    )
}