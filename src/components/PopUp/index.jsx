import './popup.css';

export const PopUp = () => {

    const budgetButton = document.querySelector('.budgetButton');
    const showPopUp = document.querySelector('.popup-container')

    // budgetButton.addEventListener('click', () => {

    // })

    return (
        <>
            <div className='popup-container'>
                <div className='popup-header'>
                    <h2>Solicitar presupuesto</h2>
                    <button type="button">X</button>
                </div>
                
                <form action="">

                </form>
            </div>
        </>
    )
}