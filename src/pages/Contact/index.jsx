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
            <section class="contacto">
                <div class="contacto-contenido">
                    <div class="info-empresa">
                        <h2>Contacto</h2>
                        <p>En NOROBRA Constructora estamos comprometidos con la calidad y la transparencia en cada proyecto. Si tienes dudas, necesitas un presupuesto o quieres iniciar una obra, escríbenos.</p>

                        <ul class="datos">
                        <li><strong>Dirección:</strong> Calle Ficticia 123, Madrid, España</li>
                        <li><strong>Teléfono:</strong> +34 600 123 456</li>
                        <li><strong>Email:</strong> info@norobra.com</li>
                        <li><strong>Horario:</strong> Lunes a Viernes de 8:00 a 18:00</li>
                        </ul>
                    </div>
                    <BudgetButton />
                </div>
                <div class="contacto-imagen">
                    <img src={image4} alt="Obra con gruas" />
                </div>
            </section>
            <Footer />
        </>
    )
}