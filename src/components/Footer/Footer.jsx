import './Footer.scss';

import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__txt">
                <h5>I'm currently looking for a new opportunity. If you like my portfolio, please get in touch.</h5>
            </section>
            <section className="footer__links">
                <div className="footer__nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Projects</NavLink>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/">Contact</NavLink>
                </div>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/laurie-villeton/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/LaurieGami" target="_blank">GitHub</a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
