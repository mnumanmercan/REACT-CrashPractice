import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) {
    const navigate = useNavigate();
    function closeHandler() {
        navigate('..'); // bir önceki route varsa parent route'a gidiyor
    }

    return (
        <>
            <div className={classes.backdrop} onClick={closeHandler}></div>
            <dialog open className={classes.modal}>{children}</dialog>
        </>
    )
}

export default Modal; 