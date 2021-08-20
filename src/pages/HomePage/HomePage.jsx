import './HomePage.scss';

function HomePage() {
    return (
        <article className="home-page">
            <div className="home-page__wrap">
                <h3 className="home-page__quote">I'm a full-stack web developer, currently based in Kamloops, BC.</h3>
                <div className="home-page__buttons">
                    {/* <button className="home-page__btn">Learn More</button> */}
                    <button className="home-page__btn">See Projects</button>
                </div>
            </div>
        </article>
    );
}

export default HomePage;