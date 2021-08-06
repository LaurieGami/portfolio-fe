import './NavBar.scss';

import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">Laurie Villeton</NavLink>

            <nav className="navbar">
                <div className="navbar__mobile">Menu</div>
                <div className="navbar__desktop">
                    <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Work</NavLink>
                    <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
                    <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Contact</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
