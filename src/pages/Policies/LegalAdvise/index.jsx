import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import './legalAdvise.css';

export const LegalAdvise = () => {
    return (
        <>
            <Header />
            <div className="legalAdvise-container">
                <div className="legalAdvise-title">
                    <h1>Aviso Legal</h1>                    
                </div>
                <div className="legalAdvise-textbox">
                    <div className="textbox">
                        <h2>Titularidad del sitio web</h2>
                        <ul>
                            <li><b>Este sitio web es titularidad de:</b></li>
                            <li>Nombre empresa: NOROBRA</li>
                            <li>NIF: [Número fiscal]</li>
                            <li>Domicilio social: [Dirección completa]</li>
                            <li>Email de contacto: <a href="mailto:info-norobra@gmail.com?subject=Contactar con asistecia al cliente.">info-norobra@gmail.com</a></li>
                            <li>Dominio web: [www.tudominio.com]</li>
                        </ul>
                    </div>
                    <div className="textbox">
                        <h2>Propiedad intelectual e industrial</h2>
                        <p>Todos los contenidos del sitio web (textos, imágenes, diseños, logotipos, código fuente, etc.) están protegidos por la normativa vigente sobre propiedad intelectual. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
                    </div>
                    <div className="textbox">
                        <h2>Responsabilidad</h2>
                        <p>El titular no se responsabiliza del mal uso que se realice del contenido del sitio web, ni de los daños que puedan derivarse del uso de la información.</p>
                    </div>
                    <div className="textbox">
                        <h2>Enlaces externos</h2>
                        <p>Este sitio puede contener enlaces a páginas externas. El titular no se responsabiliza del contenido ni de la política de privacidad de dichas páginas.</p>
                    </div>
                    <div className="textbox">
                        <h2>Legislación y jurisdicción</h2>
                        <p>El presente Aviso Legal se rige por la legislación española. Para cualquier controversia que pudiera derivarse, las partes se someten a los Juzgados y Tribunales de Madrid.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}