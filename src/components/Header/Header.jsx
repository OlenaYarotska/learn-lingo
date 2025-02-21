import Navigation from "../Navigation/Navigation";
import sprite from '../../images/sprite/icons.svg';
import css from './Header.module.css';
import AppBar from "../AppBar/AppBar";


export default function Header() {
    return (
        <div className={css.wrapper}>
            <div className={css.logoWrapper}>
                <svg className={css.logo}>
                    <use xlinkHref={`${sprite}#${"icon-logo"}`} />
                </svg>
            </div>
            <Navigation />
            <AppBar />
        </div>
    )
}