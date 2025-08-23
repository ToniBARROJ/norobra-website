import './budgetForm.css';
import { Header } from '../../components/Header/index';

export const BudgetForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        alert("Tu solicitud se ha enviado");
    };

    return (
        <>
            <div className="form-page">
                <Header />
                <div className="form-container">
                    <h1>Solicitud de Presupuesto</h1>
                    <form onSubmit={handleSubmit} className='form'>
                        <label htmlFor="name">Nombre completo</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="phone">Teléfono</label>
                        <input type="tel" id="phone" name="phone" />

                        <label htmlFor="service">Servicio requerido</label>
                        <select id="service" name="service" required>
                            <option value="">Seleccione una opción</option>
                            <option value="obra nueva">Obra nueva</option>
                            <option value="reforma integral">Reforma integral</option>
                            <option value="diseño">Diseño</option>
                            <option value="otros">Otros</option>
                        </select>

                        <label htmlFor="details">Detalles del proyecto</label>
                        <textarea id="details" name="details" placeholder="Describe tu proyecto..." required></textarea>

                        <button type="submit" className='form-submit'>Enviar solicitud</button>
                    </form>
                </div>
            </div>
        </>
    )
}