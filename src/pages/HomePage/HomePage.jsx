import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";

import projects_data from "../../data/projects.json";

function HomePage() {
  return (
    <article className="home-page">
      <div className="home-page__wrap">
        <Hero />
      </div>
      <div className="home-page__wrap">
        <Projects projects={projects_data} />
      </div>
    </article>
  );
}

export default HomePage;
