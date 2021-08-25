import './Header.scss';

import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/icons/menu_icon.svg";
import closeIcon from "../../assets/icons/close_icon.svg";

function Header({show, setShow}) {
    return (
        <header className="header">
            <div className="header__wrap">
                <NavLink to="/" className="header__logo">Laurie Villeton</NavLink>
                <div className="header__btn" onClick={() => setShow(!show)}>
                    {
                        show
                        ? <img className="header__icon" src={closeIcon} alt="close icon"/>
                        : <img className="header__icon" src={menuIcon} alt="hamburger menu icon"/>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
