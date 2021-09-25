import './HomePage.scss';

import Projects from '../../components/Projects/Projects';

import projects_data from '../../data/projects.json';

function HomePage() {
    return (
        <article className="home-page">
            <div className="home-page__wrap">
                <h3 className="home-page__quote">I'm a full-stack web developer based in Kamloops, BC.</h3>
                <div className="home-page__buttons">
                    {/* <button className="home-page__btn">Learn More</button> */}
                    <button className="home-page__btn">See Projects</button>
                </div>
            </div>
            <div className="home-page__wrap">
                <Projects projects={projects_data} />
            </div>
        </article>
    );
}

export default HomePage;