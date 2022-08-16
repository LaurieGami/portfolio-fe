import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <h3 className="hero__quote">Hi, I'm Laurie 👋.</h3>
        <h3 className="hero__quote">I'm a full stack software developer 👩‍💻.</h3>
      </div>
      <h5 className="hero__location">
        📍 Based in Beautiful British-Columbia.
      </h5>
      <div className="hero__buttons">
        <a href="#projects">
          <button className="hero__btn">See Projects</button>
        </a>
        <a href="/about">
          <button className="hero__btn">Learn More</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
