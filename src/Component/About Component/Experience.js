import React from "react";
import ExperienceStyles from "../About Component/Experience.module.css";
import { NavLink } from "react-router-dom";
import picture1 from "../../assets/developer_2.jpg";
const Experience = () => {
    return (
        <div className="container">
            <div className={ExperienceStyles.parentclass}>
                <div className={ExperienceStyles.childclass2}>
                    <h4>Developing a Frontend projects from more than 6 months</h4>
                    <p>
                        Frontend development, often referred to as client-side development,
                        is a crucial aspect of web development that focuses on creating the
                        user interface and user experience of websites and web application.
                        Frontend developers are responsible for crafting the visual and
                        interactive elements that users see and interact with when they
                        visit a website or use a web application.Frontend developers work
                        closely with UI/UX designers to implement the design vision,
                        ensuring that it translates effectively into the final product. They
                        also collaborate with backend developers to integrate frontend and
                        backend systems seamlessly.
                    </p>
                    <button className={ExperienceStyles.button}><NavLink to="https://www.linkedin.com/in/aakriti-pandey-076abb26b/">View Linkedin</NavLink></button>
                </div>
                <div className={ExperienceStyles.childclass1}>
                    <img
                        src={picture1}
                        className={ExperienceStyles.image1}
                        alt="pic-1 home"
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default Experience;
