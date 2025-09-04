import { Link } from "react-router-dom";
import "./budgetButton.css";

export const BudgetButton = () => {
    return (
        <Link to="/budgetForm">
            <button type="button" className="budgetButton">
                SOLICITA TU PRESUPUESTO
            </button>
        </Link>
    );
};
