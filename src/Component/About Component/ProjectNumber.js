import React from "react";
import projectnumber from "./ProjectNumber.module.css";
const ProjectNumber = () => {
    return (
        <div className="container">
            <div className={projectnumber.projectMainContainer}>
                <h1 className={projectnumber.projectNumberHeading}>
                    Project Qualities
                </h1>
                <p className={projectnumber.projectSubHeading}>
                    Certainly, here are four key qualities that are important in a
                    frontend project:
                </p>
            </div>
            <div className={projectnumber.numberOfProject}>
                <div className={projectnumber.subProjectquality}>
                    <h2>User-Centric Design</h2>
                    <p>
                        A strong emphasis on user experience (UX) is crucial. The frontend
                        should be intuitive, visually appealing, and easy to navigate to
                        ensure a positive user interaction.
                    </p>
                </div>
                <div className={projectnumber.subProjectquality}>
                    <h2>Responsiveness</h2>
                    <p>
                        Enim ad minim veniam, quis nostrud exercitation ullamcoThe project
                        should be designed to work seamlessly across various devices and
                        screen sizes. This includes mobile phones, tablets, and desktops,
                        ensuring accessibility for a wide audience.
                    </p>
                </div>
                <div className={projectnumber.subProjectquality}>
                    <h2>Performance Optimization</h2>
                    <p>
                        Fast loading times and efficient code are essential. Optimizing
                        images, using code splitting, and minimizing HTTP requests help
                        ensure a snappy user experience.
                    </p>
                </div>
                <div className={projectnumber.subProjectquality}>
                    <h2>Cross-Browser Compatibility</h2>
                    <p>
                        Compatibility with different web browsers (such as Chrome, Firefox,
                        Safari, and Edge) is vital to reach a broad audience. Testing and
                        debugging for compatibility issues is essential to ensure a
                        consistent experience for all users.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectNumber;
