import css from "./Header.module.css"
import {NavLink} from "react-router";
import clsx from "clsx";
import Logo from '../../assets/logo.svg?react';

function Header () {
    const buildLinkClass = ({isActive}) => {
        return clsx(css['header-nav-link'], isActive && css['header-nav-link--active']);
    };

    return (
        <>
            <div className={css['header']}>
                <NavLink to="/" className={css.logo}>
                    <Logo />
                </NavLink>

                <nav className={css['header-nav']}>
                    <NavLink to="/" className={buildLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/catalog" className={buildLinkClass}>
                        Catalog
                    </NavLink>
                </nav>
            </div>
        </>
    )
}

export default Header
