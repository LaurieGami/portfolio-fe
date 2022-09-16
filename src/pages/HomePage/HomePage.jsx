import "./HomePage.scss";

import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";

import projects_data from "../../data/projects.json";

function HomePage() {
  return (
    <article className="home-page">
      <Hero />
      <Projects projects={projects_data} />
      <About />
    </article>
  );
}

export default HomePage;
