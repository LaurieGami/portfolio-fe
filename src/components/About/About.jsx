import "./About.scss";

const skills = [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "Redux",
    "User Authentication",
    "OAuth",
    "REST APIs",
    "GraphQL APIs",
    "MySQL",
    "MongoDB",
    "Apollo (Server & Client)",
    "Jest",
    "Enzyme",
    "WebPack",
    "Git",
    "GitHub",
    "Storybook",
    "Heroku",
    "Agile/Scrum",
];

function About() {
    return (
        <article className="about" id="about">
            <section className="about__section">
                <div className="about__profile">
                    <div className="about__picture">
                        <div className="about__img-container">
                            <img className="about__img" src="/assets/images/About_Laurie-Villeton.jpg" alt="Laurie Villeton" />
                        </div>
                    </div>
                    <div className="about__bio">
                        <p className="about__paragraph">I'm a full stack software developer originally from France, now living in British-Columbia, Canada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non odio dui. Suspendisse id lobortis dolor.</p>
                        <p className="about__paragraph">Currently looking for my next adventure.</p>
                    </div>
                </div>
                <div className="about__info">
                    <div className="about__list-container">
                        <h2 className="about__subtitle">Experience</h2>
                        <ul className="about__list">
                            <li className="about__list-item">
                                <h4>Full Stack Software Developer</h4>
                                <p>Clinnect</p>
                            </li>
                        </ul>
                    </div>
                    <div className="about__list-container">
                        <h2 className="about__subtitle">Skills</h2>
                        <ul className="about__list--skills">
                            {skills.map(skill => (
                                <li className="about__list-item" key={skill}>
                                    <h4>{skill}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="about__list-container">
                        <h2 className="about__subtitle">Education</h2>
                        <ul className="about__list">
                            <li className="about__list-item">
                                <h4>Web Development Diploma</h4>
                                <p>BrainStation</p>
                            </li>
                            <li className="about__list-item">
                                <h4>BS Digital Communications & Media</h4>
                                <p>Université Savoie Mont Blanc</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </article>
    );
}

export default About;
