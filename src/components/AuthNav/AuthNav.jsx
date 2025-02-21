// import { useState } from 'react';
// import ModalWindow from '../ModalWindow/modalWindow';
// import Login from '../Login/Login';
// import Registration from '../Registration/Registration';
// import css from './AuthNav.module.css';
// import sprite from '../../images/sprite/icons.svg';

// export default function AuthNav() {
//      const [modal, setModal] = useState(null);
//         const openModal = (type) => setModal(type);
//         const closeModal = () => setModal(null);
    
//         return (
//             <div className={css.wrapper}>
//                 <div className={css.loginWrapper}>
//                     <button onClick={() => openModal("login")} className={css.loginButton}>
//                         Log in
//                         <svg className={css.icon}>
//                             <use xlinkHref={`${sprite}#${"icon-login-1"}`} />
//                         </svg>
//                         </button>
                        
//                     <button onClick={() => openModal("registration")} className={css.registerButton}>
//                         Registration
//                     </button>
//                 </div>
//                     <ModalWindow isOpen={!!modal} onClose={closeModal}>
//                         {modal === 'login' && <Login />}
//                         {modal === 'registration' && <Registration/>}
//                     </ModalWindow>
    
//             </div>
//         )
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Імпортуємо useNavigate
import ModalWindow from '../ModalWindow/modalWindow';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import css from './AuthNav.module.css';
import sprite from '../../images/sprite/icons.svg';

export default function AuthNav() {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate(); // Ініціалізуємо navigate для редіректу

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  // Функція для редіректу на сторінку логіну
  const handleLoginRedirect = () => {
    navigate('/login'); // Редірект на сторінку логіну
    openModal('login');  // Відкриваємо модальне вікно для логіну
  };

  // Функція для редіректу на сторінку реєстрації
  const handleRegistrationRedirect = () => {
    navigate('/registration'); // Редірект на сторінку реєстрації
    openModal('registration');  // Відкриваємо модальне вікно для реєстрації
  };

  return (
    <div className={css.wrapper}>
      <div className={css.loginWrapper}>
        <button onClick={handleLoginRedirect} className={css.loginButton}>
          Log in
          <svg className={css.icon}>
            <use xlinkHref={`${sprite}#${"icon-login-1"}`} />
          </svg>
        </button>

        <button onClick={handleRegistrationRedirect} className={css.registerButton}>
          Registration
        </button>
      </div>
      <ModalWindow isOpen={!!modal} onClose={closeModal}>
        {modal === 'login' && <Login />}
        {modal === 'registration' && <Registration />}
      </ModalWindow>
    </div>
  );
}