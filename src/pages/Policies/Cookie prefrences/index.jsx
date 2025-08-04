import React from "react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export const CookiePreferences = () => {
    return (
        <>
            <Header />
            <div className="cookie-preferences-container">
                <div className="cookie-preferences-title">
                    <h1>Personalizar Cookies</h1>                    
                </div>
                <div className="cookie-preferences-textbox">
                    <div className="first-checkbox">
                        <h3></h3>
                        <div className="radioInputs">
                            <input type="radio" id="accept-all-cookies" /><label for="accept-all-cookies">Activar</label>
                            <input type="radio" id="reject-all-cookies" /><label for="reject-all-cookies">Desactivar</label>
                        </div>
                    </div>
                    <div className="technicalCookies">

                    </div>
                    <div className="analysisCookies">

                    </div>
                    <div className="socialCookies">

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}