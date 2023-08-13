import React from "react";
import AboutSectionStyles from "./AboutSection.module.css";
import { Container } from "react-bootstrap";
const AboutSection = () => {
    return (
        <>

            <div className={AboutSectionStyles.about_parent}>
                <div className={AboutSectionStyles.first_child}>
                    <h1>I’m Mark, a professional video editor & film maker</h1>
                </div>
                <div className={AboutSectionStyles.second_child}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu.</p>
                    <button className={AboutSectionStyles.readmore_button}>Read More</button>
                </div>
            </div>

        </>
    );
};

export default AboutSection;
