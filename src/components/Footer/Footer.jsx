import "./Footer.scss";

import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <section className="footer__txt">
        <h5 className="footer__quote">
          Say hi at{" "}
          <a
            className="footer__link"
            href="mailto:laurievilleton@gmail.com?subject=Saying hi!"
          >
            laurievilleton@gmail.com
          </a>
          .
        </h5>
      </section>
      <section className="footer__links">
        <Link
          className="footer__logo"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          <div>Laurie</div>
          <div>Villeton</div>
        </Link>
        <div className="footer__social">
          <a
            className="footer__social-link"
            href="https://www.linkedin.com/in/laurie-villeton/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer__social-link"
            href="https://github.com/LaurieGami"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
