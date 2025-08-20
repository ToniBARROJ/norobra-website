import { PopUp } from '../../PopUp';
import './budgetButton.css';

export const BudgetButton = () => {
    return (
        <>
            <button type="button" className='budgetButton'>SOLICITA TU PRESUPUESTO</button>
            <PopUp />
        </>
    )
}