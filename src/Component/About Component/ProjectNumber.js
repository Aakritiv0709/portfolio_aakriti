import React from "react";
import projectnumber from "./ProjectNumber.module.css"
const ProjectNumber = () => {
    return (
        <div className="container">
            <div className={projectnumber.projectMainContainer}>
                <h1 className={projectnumber.projectNumberHeading}>My Projects in Numbers</h1>
                <p className={projectnumber.projectSubHeading}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                    mattis ligula consectetur, ultrices mauris.
                </p>
            </div>
            <div className={projectnumber.numberOfProject}>
                <div className={projectnumber.subProjectNumber}>
                    <h2>1+</h2>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
                <div className={projectnumber.subProjectNumber}>
                    <h2>1+</h2>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
                <div className={projectnumber.subProjectNumber}>
                    <h2>1+</h2>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
                <div className={projectnumber.subProjectNumber}>
                    <h2>1+</h2>
                    <p>Enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectNumber;
