import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectCardStyles from "./ProjectCard.module.css"
import ProjectDetails from "./projects.json"
function ProjectCard(props) {


    return (
        <div className="container">
            <h1 className={ProjectCardStyles.heading}>{props.heading}</h1>
            <div className={ProjectCardStyles.project_card}>

                {
                    ProjectDetails.map(details => {
                        return (
                            <div key={details.projectId}>
                                <div className={ProjectCardStyles.projectcard}>
                                    <img src={details.projectImage} alt="image" />
                                    <div><h3 className={ProjectCardStyles.project_name}>{details.projectName}</h3></div>
                                    <p className={ProjectCardStyles.project_description}>{details.description}</p>
                                </div>
                                <button className={ProjectCardStyles.button}> <NavLink to={details.link} target="_blank" rel="noopener noreferrer">
                                    View project
                                </NavLink></button>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ProjectCard;