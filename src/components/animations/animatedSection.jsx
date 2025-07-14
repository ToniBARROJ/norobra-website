import React from "react";
import { useState, useEffect } from "react";
import {useInView} from "../../hooks/useInView"
import "./animatedSection.css"


export const AnimatedSection = ({ children, animation = "fade-in" }) => {
    const [ref, isVisible] = useInView();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect (() => {
        if(isVisible && !hasAnimated) {
            setHasAnimated(true)
        }
    }, [isVisible, hasAnimated])

    return (
        <section ref={ref} className={`animated-section ${animation} ${hasAnimated ? "visible" : ""}`} >
            {children}
        </section>
    )
}