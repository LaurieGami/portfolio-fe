import './Navigation.scss';

import { NavLink } from "react-router-dom";

function Navigation({show}) {
    const showHideClassName = show ? "navigation--show" : "navigation--hide";

    return (
        <section className={`navigation ${showHideClassName}`}>
            <nav className="navbar">
                <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Work</NavLink>
                <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
                <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Contact</NavLink>
            </nav>

            <div>
                Say Hello
            </div>
        </section>
    );
}

export default Navigation;
