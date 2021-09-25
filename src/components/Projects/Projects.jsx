import './Projects.scss';

function Projects({projects}) {
    return (
        <article className="projects">
            <section className="projects__container">
                {projects.map(project => {
                    return (
                        <section className="project" key={project.id}>
                            <div className="project__left">
                                <div className="project__img-container">
                                    <img src={project.image} className="project__img" alt={project.title}/>
                                </div>
                            </div>
                            <div className="project__right">
                                <h2 className="project__title">{project.title}</h2>
                                <p className="project__description">{project.description}</p>
                                {project.technologies.map((techonology, index) => {
                                    return (
                                    <span key={index}>{techonology}</span>
                                    )
                                })}
                                <a href={project.web_link}><button>View Live</button></a>
                                <a href={project.github_link}><button>View Code</button></a>
                            </div>
                        </section>
                    )
                })}
            </section>
        </article>
    );
}

export default Projects;