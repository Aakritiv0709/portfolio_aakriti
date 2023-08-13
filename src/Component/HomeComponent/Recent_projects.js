import React from 'react'
import ProjectStyles from "./Recent_projects.module.css";
import projectsData from "./projects.json";
import Video from "./video2.mp4" // Import the JSON data
const Recent_projects = () => {
    return (
        <div className="container">
            <h1 className={ProjectStyles.projectheading}>Recent Projects</h1>
            <div className={ProjectStyles.parent_project}>
                <div className={ProjectStyles.sub_project}>
                    <video autoPlay muted loop className={ProjectStyles.video1}>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <h4 className={ProjectStyles.project_name}>Project name</h4>
                    <p className={ProjectStyles.project_description}>Project description</p>
                </div>
                <div className={ProjectStyles.sub_project}>
                    <video autoPlay muted loop className={ProjectStyles.video2}>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <h4 className={ProjectStyles.project_name}>Project name</h4>
                    <p className={ProjectStyles.project_description}>Project description</p>
                </div>
                <div className={ProjectStyles.sub_project}>
                    <video autoPlay muted loop className={ProjectStyles.video3}>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <h4 className={ProjectStyles.project_name}>Project name</h4>
                    <p className={ProjectStyles.project_description}>Project description</p>
                </div>
            </div>
        </div>
    )
}

export default Recent_projects;
