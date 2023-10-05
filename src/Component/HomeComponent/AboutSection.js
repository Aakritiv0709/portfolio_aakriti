import React from "react";
import AboutSectionStyles from "./AboutSection.module.css";
import { NavLink } from "react-router-dom";
const AboutSection = () => {
    return (
        <>

            <div className={AboutSectionStyles.about_parent}>
                <div className={AboutSectionStyles.first_child}>
                    <h1>I’m Aakriti, a Frontend Developer</h1>
                </div>
                <div className={AboutSectionStyles.second_child}>
                    <p>Greetings!, I'm a B.Tech under graduate From Gyan Ganga Institute of
                        Technology .I'm currently having the "Front-End Developer" profile,
                        But my future plans are to step into full stack development, i've
                        done few project's as a individual in react, I'm adding and working
                        on new skills and technologies into my skill sets, able to create
                        highly optimized web application.
                        I want to achieve a challenging
                        position in software Development in a result-oriented company, where
                        I can utilize my acquired skills and education towards continued
                        growth and advancement.</p>
                    <button className={AboutSectionStyles.button}><NavLink to="https://www.linkedin.com/in/aakriti-pandey-076abb26b/">Read More</NavLink></button>
                </div>
            </div>

        </>
    );
};

export default AboutSection;
