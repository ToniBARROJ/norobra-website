import React, { use, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Este código hace scroll automático al top de la página, para evitar empezar a mitad de página, una vez nos movamos de págna a página.

// Este código se ejecuta cuando abrimos una de las rutas que hemos determinado.

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};
