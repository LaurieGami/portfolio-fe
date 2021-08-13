import './Header.scss';

import { NavLink } from "react-router-dom";

function Header({show, setShow}) {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">Laurie Villeton</NavLink>

            <button className="header__btn" onClick={() => setShow(!show)}>
                {show ? <div>X</div> : <div>Open</div>}
            </button>
        </header>
    );
}

export default Header;
