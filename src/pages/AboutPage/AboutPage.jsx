import "./AboutPage.scss";

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
          <p className="about-page__paragraph">
            I’m a full stack software developer originally from France, now
            living in Cranbrook, BC.
          </p>
          <p className="about-page__paragraph">
            I bring with me a highly dedicated and adaptable personality, always
            building digital solutions with a smile.
          </p>
          <p className="about-page__paragraph">
            I'm interested in making the world a better place by crafting
            software that have a positive impact on people, whether it be about
            improving their general health or making their daily life a little
            easier.
          </p>
          <p className="about-page__paragraph">
            Currently looking for my next adventure.
          </p>

          <div className="about-page__buttons">
            <a
              href="/assets/files/Resume_Laurie-Villeton_Full-Stack-Software-Developer.pdf"
              target="_blank"
            >
              <button className="about-page__btn">See Resume</button>
            </a>
            <a
              href="/assets/files/Resume_Laurie-Villeton_Full-Stack-Software-Developer.pdf"
              download
            >
              <button className="about-page__btn">Download Resume</button>
            </a>
          </div>
        </section>

        <section className="about-page__section">
          <h2 className="about-page__subtitle">Skills</h2>
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

        <section className="about-page__section">
          <h2 className="about-page__subtitle">Education</h2>
          <div className="about-page__group">
            <div className="about-page__group-sub--edu">
              <div className="about-page__txt--bold">
                Web Development Diploma
              </div>
              <div className="about-page__txt">BrainStation</div>
              <div className="about-page__txt">2021</div>
            </div>
            <div className="about-page__group-sub--edu">
              <div className="about-page__txt--bold">
                BS Media & Communication
              </div>
              <div className="about-page__txt">
                University Savoie Mont Blanc
              </div>
              <div className="about-page__txt">2015</div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default AboutPage;
