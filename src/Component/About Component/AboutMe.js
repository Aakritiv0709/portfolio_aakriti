import React from 'react'
import AboutMeStyles from "../About Component/AboutMe.module.css"
import Header from '../../Common Component/Header Component/Header'
import picture1 from "../../assets/pic1-home.png"
const AboutMe = () => {
    return (
        <div className="container">
            <div className={AboutMeStyles.parentclass}>
                <div className={AboutMeStyles.childclass1}>
                    <img src={picture1} className={AboutMeStyles.image1} alt="pic-1 home"></img>

                </div>
                <div className={AboutMeStyles.childclass2}>
                    <h3>I’m Mark, a professional video editor & film maker</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu.</p>
                    <button className={AboutMeStyles.resume_button}>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;