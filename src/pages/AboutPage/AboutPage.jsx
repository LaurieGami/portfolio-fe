import "./AboutPage.scss";

import { NavLink } from "react-router-dom";

const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript (ES6)",
  "React.js",
  "Node.js",
  "Express.js",
  "User Authentication",
  "OAuth",
  "REST APIs",
  "GraphQL APIs",
  "MySQL",
  "MongoDB",
  "Apollo - Server & Client",
  "Jest",
  "Enzyme",
  "WebPack",
  "Git",
  "GitHub",
  "Storybook",
  "Heroku",
  "Agile/Scrum",
];

function splitInColumns(array) {
  const bigColumns = [];
  let smallColumns = [];
  let row = [];
  array.forEach((skill, i) => {
    row.push(skill);
    if ((i + 1) % 5 === 0) {
      smallColumns.push(row);
      row = [];
    }
    if ((i + 1) % 10 === 0) {
      bigColumns.push(smallColumns);
      smallColumns = [];
    }
  });

  if (row.length > 0) {
    smallColumns.push(row);
    row = [];
    bigColumns.push(smallColumns);
    smallColumns = [];
  }

  return bigColumns;
}

function AboutPage() {
  const skillset = splitInColumns(skills);

  return (
    <article className="about-page">
      <div className="about-page__wrap">
        <section className="about-page__section">
          <h1 className="about-page__title">About</h1>
          <p className="about-page__txt">
            I am a full-stack software developer who's passionate about the
            outdoors and action sports 👩‍💻🌿.
          </p>

          <p className="about-page__txt">
            The world of tech first entered my life as a child when my dad
            started building computers from scratch as a hobby. Every time he
            built a new one, he gifted me the previous one.
          </p>

          <p className="about-page__txt">
            From spending countless hours playing the game Sims as a kid to
            creating fun visuals on Photoshop as a teen, I always knew I wanted
            a career working with computers.
          </p>

          <p className="about-page__txt">
            In 2015, I graduated with a Bachelor's degree in Digital
            Communications and Media. This is where I truly discovered the power
            of coding, studying the basics of HTML, CSS and JavaScript, and
            realizing that loving both creativity and logic was not
            contradictory.
          </p>

          <p className="about-page__txt">
            After half a decade working in marketing and keeping coding mainly
            on the recreational side, I decided to pursue a formal education in
            web development at{" "}
            <a
              className="about-page__link"
              target="_blank"
              rel="noreferrer"
              href="https://brainstation.io/"
            >
              BrainStation
            </a>{" "}
            where I graduated with a Diploma in Web Development.
          </p>

          <p className="about-page__txt">
            I then joined a passionate all-female dev team working on addressing
            the gender disparity in the Canadian healthcare referral system, and
            I am now on the look for my next adventure.
          </p>

          <p className="about-page__txt">
            If you think I'd be a good fit with your team or would like to chat,
            feel free to{" "}
            <NavLink to="/contact" className="about-page__link">
              send me a message
            </NavLink>
            .
          </p>

          <p className="about-page__txt">
            📍 Currently based in Cranbrook, BC.
          </p>
          <div className="about-page__buttons">
            <a href="/assets/files/Resume_Laurie-Villeton_Full-Stack-Software-Developer.pdf" target="_blank">
                <button className="about-page__btn">See Resume</button>
            </a>
            <a href="/assets/files/Resume_Laurie-Villeton_Full-Stack-Software-Developer.pdf" download>
                <button className="about-page__btn">Download Resume</button>
            </a>
        </div>
        </section>

        <section className="about-page__section">
          <h2 className="about-page__subtitle">Skillset</h2>
          <div className="about-page__group">
            {skillset.map((bigColumn, i) => {
              return (
                <div key={`bigColumn-${i}`} className="about-page__group-sub">
                  {bigColumn.map((smallColumn, i) => {
                    return (
                      <ul key={`smallColumn-${i}`} className="about-page__list">
                        {smallColumn.map((skill) => {
                          return (
                            <li key={skill} className="about-page__list-item">
                              {skill}
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </article>
  );
}

export default AboutPage;
