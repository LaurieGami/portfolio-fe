import './HomePage.scss';

function HomePage() {
    return (
        <article className="home-page">
            <h3 className="home-page__quote">I'm a full-stack web developer, currently based in Kamloops, BC. My toolbox includes React, JavaScript, HTML, CSS, Sass, Node, Express & MySQL. I'm passionate about action sports and the outdoors.</h3>
            <div className="home-page__buttons">
                {/* <button className="home-page__btn">Learn More</button> */}
                <button className="home-page__btn">See Projects</button>
            </div>
        </article>
    );
}

export default HomePage;