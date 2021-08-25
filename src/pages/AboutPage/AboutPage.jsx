import './AboutPage.scss';

import { NavLink } from "react-router-dom";

function AboutPage() {
    return (
        <article className="about-page">
            <div className="about-page__wrap">
                <section className="about-page__section">
                    <h1 className="about-page__title">About</h1>
                    <p className="about-page__txt">I'm a full-stack web developer based in Kamloops, BC, Canada.</p>
                    <p className="about-page__txt">The world of tech entered my life as a kid when my dad started building computers from scratch as a hobby. From the age of 10 onwards, every time my dad built a newer, more powerful, computer, he gifted me the previous one.</p>
                    <p className="about-page__txt">My first recollection of hacking any software is from playing the video game Sims. I was obsessed with that game and always wanted to earn more money to build bigger, better, houses (<a className="about-page__link" target="_blank" href="https://www.ea.com/games/the-sims/the-sims-4/pc/how-to-cheat">#motherlode</a>), then I went on to creating fun visuals instead, on a simplified version of Photoshop, and the rest is history. Computers were fun. I was hooked!</p>
                    <p className="about-page__txt">In 2015, I graduated with a Bachelor's degree in Communication and Media. This is where I truly discovered the power of coding, studying the basics of HTML, CSS and JavaScript, and realizing that loving both creativity and logic was not contradictory.</p>
                    <p className="about-page__txt">After half a decade working in marketing and keeping coding mainly on the recreational side, I decided to pursue a formal education in web development at <a className="about-page__link" target="_blank" href="https://brainstation.io/">BrainStation</a> where I graduated with a Diploma in Web Development.</p>
                    <p className="about-page__txt">I am now looking for my next adventure in the tech industry. If you have something in mind, feel free to <NavLink to="/contact" className="about-page__link">say hello</NavLink>!</p>
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