import './Footer.scss';

import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__txt">
                <h5 className="footer__quote">
                    <div>I'm open to a new opportunity.</div>
                    <div>If you have something in mind,</div>
                    <div>please get in touch.</div>
                </h5>
            </section>
            <section className="footer__links">
                <NavLink to="/" className="footer__logo">
                    <div>Laurie</div>
                    <div>Villeton</div>
                </NavLink>
                <div className="footer__nav">
                    <NavLink to="/" className="footer__nav-link">Home</NavLink>
                    <NavLink to="/" className="footer__nav-link">Projects</NavLink>
                    <NavLink to="/" className="footer__nav-link">About</NavLink>
                    <NavLink to="/" className="footer__nav-link">Contact</NavLink>
                </div>
                <div className="footer__social">
                    <a className="footer__social-link" href="https://www.linkedin.com/in/laurie-villeton/" target="_blank">LinkedIn</a>
                    <a className="footer__social-link" href="https://github.com/LaurieGami" target="_blank">GitHub</a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
