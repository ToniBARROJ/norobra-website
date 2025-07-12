import React from "react";
import {useInView} from "../../hooks/useInView"
import "./animatedSection.css"


export const AnimatedSection = ({ children, animation = "fade-in" }) => {
    const [ref, isVisible] = useInView();

    return (
        <section ref={ref} className={`animated-section ${animation} ${isVisible ? "visible" : ""}`} >
            {children}
        </section>
    )
}