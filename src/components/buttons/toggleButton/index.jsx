import React from "react";
import { useState, useEffect } from "react";
import "./toggleButton.css";

export const Hamburger = () => {
    
    return (
        <>
            <div className="hamburger">
                <button className="toggleButton">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </>
    )


}
