import React from "react";
import QualityStyles from "./Quality.module.css";
import picture1 from "../../../src/assets/developer_2.jpg";
const Quality = () => {
    return (
        <div className="container">
            <div className={QualityStyles.parentclass}>
                <div className={QualityStyles.childclass1}>
                    <img
                        src={picture1}
                        className={QualityStyles.image1}
                        alt="pic-1 home"
                    ></img>
                </div>
                <div className={QualityStyles.childclass2}>
                    <h3>EFFICIENT</h3>
                    <p>
                        As an efficient developer, I prioritize clean, organized code,
                        timely project delivery, and continuous learning to adapt to new
                        technologies and deliver high-quality solutions efficiently.
                    </p>
                    <h3>PROFESSIONAL</h3>
                    <p>
                        As a developer, I leverage my expertise to create robust, scalable
                        software solutions. I emphasize best practices, collaboration, and
                        effective communication to meet project goals and deliver value to
                        stakeholders.
                    </p>
                    <h3>EXPERIENCED</h3>
                    <p>
                        I possess deep technical knowledge, a proven track record of
                        successful projects, and a knack for tackling complex challenges. I
                        excel in mentorship, team leadership, and optimizing code for
                        performance and efficiency.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Quality;
