import { logOut } from "../../services/api";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import sprite from '../../images/sprite/icons.svg';
import css from './UserMenu.module.css';


export default function UserMenu({ user }) {
    const [userName, setUserName] = useState(user?.displayName || "User");
    const auth = getAuth();

        useEffect(() => {
        const setName = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUserName(currentUser.displayName || "User");
            } else {
                setUserName("User");
            }
        });
    
        return () => setName();
        }, [auth]);
    
    const handleLogout = async () => {
        await logOut();
    }

    return (
        <div className={css.wrapper}>
            <p className={css.text}>Welcome, <span className={css.name}>{userName}</span></p>
            <button type="button" onClick={handleLogout} className={css.button}>
                <svg className={css.icon}>
                    <use xlinkHref={`${sprite}#${"icon-logout-icon"}`} />
                </svg>
            </button>
        </div>
    )
};