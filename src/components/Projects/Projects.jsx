import "./Projects.scss";

function Projects({ projects }) {
  return (
    <article className="projects" id="projects">
      {projects.map((project) => {
        return (
          <section className="project" key={project.id}>
            <div className="project__left">
              <div className="project__img-container">
                <img
                  src={project.image}
                  className={`project__img ${
                    project.image_orientation === "landscape"
                      ? "project__img-landscape"
                      : "project__img-portrait"
                  }`}
                  alt={project.title}
                />
              </div>
            </div>
            <div className="project__right">
              <h2 className="project__title">{project.title}</h2>
              <p className="project__description">{project.description}</p>
              <div className="project__technologies">
                {project.technologies.map((techonology, index) => {
                  return (
                    <p key={index} className="project__technology">
                      {techonology}
                    </p>
                  );
                })}
              </div>
              <div className="project__buttons">
                <a
                  href={project.web_link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  <button className="project__btn">View Live</button>
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="project__link"
                >
                  <button className="project__btn">View Code</button>
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </article>
  );
}

export default Projects;
