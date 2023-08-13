import React from "react";
import QualityStyles from "./Quality.module.css";
import picture1 from "../../../src/assets/pic1-home.png";
const Quality = () => {
    return (
        <div className="container">
            <div className={QualityStyles.parentclass}>
                <div className={QualityStyles.childclass1}>
                    <img src={picture1} className={QualityStyles.image1} alt="pic-1 home"></img>

                </div>
                <div className={QualityStyles.childclass2}>
                    <h3>EFFICIENT</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        fringilla, mattis ligula consectetur
                    </p>
                    <h3>PROFESSIONAL</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        fringilla, mattis ligula consectetur
                    </p>
                    <h3>EXPERIENCED</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        fringilla, mattis ligula consectetur
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Quality;
