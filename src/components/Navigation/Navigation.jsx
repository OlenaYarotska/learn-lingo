import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './Navigation.module.css';
import clsx from 'clsx';

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() { 
    return (
        <div>
            <nav>
                <NavLink to='/' className={getLinkClass}>Home</NavLink>
                <NavLink to='/teachers' className={getLinkClass}>Teachers</NavLink>
                 {/* <NavLink to='/favorites' className={getLinkClass}>Favorites</NavLink> */}
            </nav>
            <Suspense fallback="Loading...">
                <Outlet/>
            </Suspense>
        </div>
    )

};