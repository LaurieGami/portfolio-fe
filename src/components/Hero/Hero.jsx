import './Hero.scss';

function Hero() {
    return (
        <section className="hero">
            <h3 className="hero__quote">I'm a full-stack web developer based out of Kamloops, BC.</h3>
            <div className="hero__buttons">
                <a href="#projects"><button className="hero__btn">See Projects</button></a>
            </div>
        </section>
            
    );
}

export default Hero;