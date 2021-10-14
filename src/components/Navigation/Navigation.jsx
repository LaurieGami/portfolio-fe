import './Navigation.scss';

import { NavLink } from "react-router-dom";

function Navigation({show, setShow}) {
    const showHideClassName = show ? "navigation--show" : "navigation--hide";

    return (
        <section className={`navigation ${showHideClassName}`}>
            <nav className="navbar">
                <NavLink exact to="/" className="navbar__link" activeClassName="navbar__link--active" onClick={() => setShow(!show)}>Home</NavLink>
                {/* <NavLink to="/projects" className="navbar__link" activeClassName="navbar__link--active" onClick={() => setShow(!show)}>Projects</NavLink> */}
                <NavLink to="/about" className="navbar__link" activeClassName="navbar__link--active" onClick={() => setShow(!show)}>About</NavLink>
                <NavLink to="/contact" className="navbar__link" activeClassName="navbar__link--active" onClick={() => setShow(!show)}>Contact</NavLink>
            </nav>
        </section>
    );
}

export default Navigation;
