import Modal from "react-modal";
import css from './ModalWindow.module.css';
import sprite from '../../images/sprite/icons.svg';

Modal.setAppElement('#root');

export default function ModalWindow({ isOpen, onClose, children }) {
     return (
    <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}
            className={css.modal}
            overlayClassName={css.overlay}
         >
             <button className={css.button} onClick={onClose}>
                 <svg className={css.icon}>
                     <use xlinkHref={`${sprite}#${"icon-close-modal"}`} />
                 </svg>
             </button>
             {children}
    </Modal>
    )
};
