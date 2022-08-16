import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <h3 className="hero__quote">
        I am a full-stack software developer who's passionate about the outdoors
        and action sports 👩‍💻🌿.
      </h3>
      <h5 className="hero__location">📍 Currently based in Cranbrook, BC.</h5>
      <div className="hero__buttons">
        <a href="#projects">
          <button className="hero__btn">See Projects</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
