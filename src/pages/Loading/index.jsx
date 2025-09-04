import logo from "../../assets/logos/logo-imagen-norobra.png";
import "./Loading.css";

export const LoadingPage = () => {
    return (
        <>
            <div className="loading-container">
                <img src={logo} alt="logo norobra" id="logo-image" />
            </div>
        </>
    );
};
