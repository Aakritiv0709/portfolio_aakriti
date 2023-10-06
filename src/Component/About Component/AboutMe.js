import React from "react";
import AboutMeStyles from "../About Component/AboutMe.module.css";
import picture1 from "../../assets/developer_2.jpg";
import { NavLink } from "react-router-dom";
const AboutMe = () => {
    return (
        <div className="container">
            <div className={AboutMeStyles.parentclass}>
                <div className={AboutMeStyles.childclass1}>
                    <img
                        src={picture1}
                        className={AboutMeStyles.image1}
                        alt="pic-1 home"
                    ></img>
                </div>
                <div className={AboutMeStyles.childclass2}>
                    <h3>I’m Aakriti pandey, A Frontend Developer</h3>
                    <p>
                        Hello, I'm creating a responsive frontend website means designing a website
                        that adapts and looks good on various devices and screen sizes, such
                        as desktop computers, tablets, and mobile phones. This involves
                        using flexible layouts, media queries, and scalable elements to
                        ensure that the content and design adjust seamlessly to provide an
                        optimal user experience across different platforms.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
