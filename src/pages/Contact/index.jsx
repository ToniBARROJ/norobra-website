import React from "react";
import { Header } from "../../components/Header";
import './Contact.css';
import image4 from '../../assets/images/building-with-crane2.jpg'
import { BudgetButton } from '../../components/buttons/budgetButton'
import { Footer } from "../../components/Footer";

export const Contact = () => {
    return (
        <>
            <Header />
            <section className="contacto">
                <div className="contacto-contenido">
                    <div className="info-empresa">
                        <h2>Contacto</h2>
                        <p>En NOROBRA Constructora estamos comprometidos con la calidad y la transparencia en cada proyecto. Si tienes dudas, necesitas un presupuesto o quieres iniciar una obra, escríbenos.</p>

                        <ul className="datos">
                        <li><strong>Dirección:</strong> Calle Ficticia 123, Madrid, España</li>
                        <li><strong>Teléfono:</strong> +34 600 123 456</li>
                        <li><strong>Email:</strong><a href="mailto:infonorobra@gmail.com?subject=Contactar%20con%20asistecia%20al%20cliente."> infonorobra@gmail.com</a></li>
                        <li><strong>Horario:</strong> Lunes a Viernes de 8:00 a 18:00</li>
                        </ul>
                    </div>
                    <BudgetButton />
                </div>
                <div className="contacto-imagen">
                    <img src={image4} alt="Obra con gruas" />
                </div>
            </section>
            <Footer />
        </>
    )
}