import './Footer.scss';

import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <section className="footer__txt">
                    <h5 className="footer__quote">
                        I'm looking for my next adventure in the tech industry. If you have something in mind, please <NavLink to="/contact" className="footer__quote-link">get in touch</NavLink>.
                    </h5>
                </section>
                <section className="footer__links">
                    <NavLink to="/" className="footer__logo">
                        <div>Laurie</div>
                        <div>Villeton</div>
                    </NavLink>
                    <div className="footer__nav">
                        <NavLink to="/" className="footer__nav-link">Home</NavLink>
                        <NavLink to="/about" className="footer__nav-link">About</NavLink>
                        <NavLink to="/contact" className="footer__nav-link">Contact</NavLink>
                    </div>
                    <div className="footer__social">
                        <a className="footer__social-link" href="https://www.linkedin.com/in/laurie-villeton/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a className="footer__social-link" href="https://github.com/LaurieGami" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
