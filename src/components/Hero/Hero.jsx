import "./Hero.scss";

import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__wrap">
        <h3 className="hero__quote">Hey!</h3>
        <h3 className="hero__quote">My name is Laurie.</h3>
        <h3 className="hero__quote">I'm a software engineer.</h3>
      </div>
      <h5 className="hero__location">
        📍 Based in Beautiful British-Columbia.
      </h5>
      <div className="hero__buttons">
        <Link
          className="hero__btn"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          See Projects
        </Link>
        <Link
          className="hero__btn"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Hero;
