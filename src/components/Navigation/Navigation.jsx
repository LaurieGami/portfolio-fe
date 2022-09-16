import "./Navigation.scss";

import { Link } from "react-scroll";

function Navigation({ show, setShow }) {
  const showHideClassName = show ? "navigation--show" : "navigation--hide";

  return (
    <section className={`navigation ${showHideClassName}`}>
      <nav className="navbar">
        <Link
          className="navbar__link"
          activeClass="navbar__link--active"
          to="home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onClick={() => setShow(!show)}
        >
          Home
        </Link>
        <Link
          className="navbar__link"
          activeClass="navbar__link--active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setShow(!show)}
        >
          Projects
        </Link>
        <Link
          className="navbar__link"
          activeClass="navbar__link--active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => setShow(!show)}
        >
          About
        </Link>
        <Link
          className="navbar__link"
          activeClass="navbar__link--active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          onClick={() => setShow(!show)}
        >
          Contact
        </Link>
      </nav>
    </section>
  );
}

export default Navigation;
