import './AboutPage.scss';

import { NavLink } from "react-router-dom";

function AboutPage() {
    return (
        <article className="about-page">
            <div className="about-page__wrap">
                <section className="about-page__section">
                    <h1 className="about-page__title">About</h1>
                    <p className="about-page__txt">I'm a fullstack software developer based in Kamloops, BC, Canada.</p>
                    <p className="about-page__txt">The world of tech first entered my life as a child when my dad started building computers from scratch as a hobby. Every time he built a new one, he gifted me the previous one.</p>
                    <p className="about-page__txt">From spending countless hours playing the game Sims as a kid to creating fun visuals on Photoshop as a teen, I always knew I wanted a career working with computers.</p>
                    <p className="about-page__txt">In 2015, I graduated with a Bachelor's degree in Digital Communications and Media. This is where I truly discovered the power of coding, studying the basics of HTML, CSS and JavaScript, and realizing that loving both creativity and logic was not contradictory.</p>
                    <p className="about-page__txt">After half a decade working in marketing and keeping coding mainly on the recreational side, I decided to pursue a formal education in web development at <a className="about-page__link" target="_blank" rel="noreferrer" href="https://brainstation.io/">BrainStation</a> where I graduated with a Diploma in Web Development.</p>
                    <p className="about-page__txt">I am now looking for my next adventure in the tech industry. If you think I'd be a good fit with your team or just want to chat, feel free to <NavLink to="/contact" className="about-page__link">send me a message</NavLink>!</p>
                </section>

                <section className="about-page__section">
                    <h2 className="about-page__subtitle">Skillset</h2>
                    <div className="about-page__group">
                        <div className="about-page__group-left">
                            <ul className="about-page__list">
                                <li className="about-page__list-item">HTML5</li>
                                <li className="about-page__list-item">CSS</li>
                                <li className="about-page__list-item">Sass</li>
                                <li className="about-page__list-item">JavaScript (ES6)</li>
                                <li className="about-page__list-item">React.js</li>
                            </ul>
                            <ul className="about-page__list">
                                <li className="about-page__list-item">Node.js</li>
                                <li className="about-page__list-item">Express.js</li>
                                <li className="about-page__list-item">REST APIs</li>
                                <li className="about-page__list-item">User Authentication</li>
                                <li className="about-page__list-item">OAuth</li>
                            </ul>
                        </div>
                        <div className="about-page__group-right">
                            <ul className="about-page__list">
                                <li className="about-page__list-item">Git Version Control</li>
                                <li className="about-page__list-item">GitHub</li>
                                <li className="about-page__list-item">WebPack</li>
                                <li className="about-page__list-item">MySQL</li>
                                <li className="about-page__list-item">Jest</li>
                            </ul>
                            <ul className="about-page__list">
                                <li className="about-page__list-item">Enzyme</li>
                                <li className="about-page__list-item">Adobe Photoshop</li>
                                <li className="about-page__list-item">Adobe Illustrator</li>
                                <li className="about-page__list-item">Adobe InDesign</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
}

export default AboutPage;