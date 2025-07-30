import React from "react";
import './TestimonialCarousel.css'
import { BudgetButton } from '../../buttons/budgetButton'

export const TestimonialCarousel = () => {
    return (
        <>
            <section className="testimonial-carousel">
                <h2 className="section-title">Lo que opinan nuestros clientes</h2>
                <div className="carousel-container">
                    <div class="testimonial-card">
                        <h3>María – Oviedo</h3>
                        <p>"Contratamos la empresa para reformar nuestra casa familiar y superaron todas nuestras expectativas. Serios y muy atentos."</p>
                    </div>
                    <div class="testimonial-card">
                        <h3>Javier – Santander</h3>
                        <p>"Nos ayudaron a construir nuestra vivienda desde cero. El trato fue excelente y la obra quedó perfecta."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Laura – Donostia</h3>
                        <p>"Gran equipo de profesionales. Puntuales, organizados y muy detallistas. 100% recomendables."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Ander – Bilbao</h3>
                        <p>"Reformaron nuestro local comercial en tiempo récord y con un acabado impecable. Muy buena comunicación en todo momento."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Nerea – Gijón</h3>
                        <p>"Mi experiencia fue muy buena. Se adaptaron a nuestro presupuesto y ofrecieron soluciones creativas para optimizar el espacio."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Rubén – Lugo</h3>
                        <p>"Desde la planificación hasta los últimos detalles, estuvieron pendientes de todo. Se nota que tienen experiencia."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Lucía – A Coruña</h3>
                        <p>"Gracias a su trabajo, ahora tengo la casa que siempre soñé. Serios, formales y muy profesionales."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Iván – Pamplona</h3>
                        <p>"Excelente atención al cliente. Escuchan lo que necesitas y lo traducen en resultados reales."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Ainhoa – Vitoria</h3>
                        <p>"No sabía cómo empezar con la reforma, pero me asesoraron desde el principio. Trabajo limpio y resultado de 10."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Carlos – Torrelavega</h3>
                        <p>"Reformaron el baño y la cocina y todo quedó espectacular. Cumplieron los plazos y cuidaron cada detalle."</p>
                    </div>

                    {/* Repetido para poder hacer un efecto bucle */}

                    <div class="testimonial-card">
                        <h3>María – Oviedo</h3>
                        <p>"Contratamos la empresa para reformar nuestra casa familiar y superaron todas nuestras expectativas. Serios y muy atentos."</p>
                    </div>
                    <div class="testimonial-card">
                        <h3>Javier – Santander</h3>
                        <p>"Nos ayudaron a construir nuestra vivienda desde cero. El trato fue excelente y la obra quedó perfecta."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Laura – Donostia</h3>
                        <p>"Gran equipo de profesionales. Puntuales, organizados y muy detallistas. 100% recomendables."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Ander – Bilbao</h3>
                        <p>"Reformaron nuestro local comercial en tiempo récord y con un acabado impecable. Muy buena comunicación en todo momento."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Nerea – Gijón</h3>
                        <p>"Mi experiencia fue muy buena. Se adaptaron a nuestro presupuesto y ofrecieron soluciones creativas para optimizar el espacio."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Rubén – Lugo</h3>
                        <p>"Desde la planificación hasta los últimos detalles, estuvieron pendientes de todo. Se nota que tienen experiencia."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Lucía – A Coruña</h3>
                        <p>"Gracias a su trabajo, ahora tengo la casa que siempre soñé. Serios, formales y muy profesionales."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Iván – Pamplona</h3>
                        <p>"Excelente atención al cliente. Escuchan lo que necesitas y lo traducen en resultados reales."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Ainhoa – Vitoria</h3>
                        <p>"No sabía cómo empezar con la reforma, pero me asesoraron desde el principio. Trabajo limpio y resultado de 10."</p>
                    </div>

                    <div class="testimonial-card">
                        <h3>Carlos – Torrelavega</h3>
                        <p>"Reformaron el baño y la cocina y todo quedó espectacular. Cumplieron los plazos y cuidaron cada detalle."</p>
                    </div>
                </div>
            </section>
            <div id="budgetButton">
                <BudgetButton />
            </div>
        </>
    )
}