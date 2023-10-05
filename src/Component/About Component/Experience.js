import React from 'react'
import ExperienceStyles from "../About Component/Experience.module.css"
import Header from '../../Common Component/Header Component/Header'
import picture1 from "../../assets/pic1-home.png"
const Experience = () => {
    return (
        <div className="container">
            <div className={ExperienceStyles.parentclass}>

                <div className={ExperienceStyles.childclass2}>
                    <h3>1+ Years of Experience in the field</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                        Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
                        tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                        suscipit magna interdum eu.</p>
                    <button className={ExperienceStyles.resume_button}>View Linkedin</button>
                </div>
                <div className={ExperienceStyles.childclass1}>
                    <img src={picture1} className={ExperienceStyles.image1} alt="pic-1 home"></img>

                </div>
            </div>
        </div>
    )
}

export default Experience;