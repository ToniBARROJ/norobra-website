import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TestimonialCarousel } from "../../components/carousels/Testimonies";
import { Builds } from "../../components/carousels/Builds";

export const OurBuilds = () => {
    return (
        <>
            <Header />
            <Builds />
            <TestimonialCarousel />
            <Footer />
        </>
    )
}