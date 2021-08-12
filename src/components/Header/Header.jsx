import './Header.scss';

import { NavLink } from "react-router-dom";

function Header({show, setShow}) {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">Laurie Villeton</NavLink>

            <button className="header__btn" onClick={() => setShow(!show)}>
                {show ? <div>X</div> : <div>Open</div>}
            </button>
            {/* <nav className="navbar navbar--hide">
                <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Work</NavLink>
                <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">About</NavLink>
                <NavLink to="/" className="navbar__link" activeClassName="navbar__link--active">Contact</NavLink>
            </nav> */}
        </header>
    );
}

export default Header;
