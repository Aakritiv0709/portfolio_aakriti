import React from 'react'
import Requirement from '../../Component/Projects Component/Requirement';
import Footer from '../../Common Component/Footer Component/Footer';
import VideoAnimation from '../../Component/Projects Component/VideoAnimation';
import ProjectCard from '../../Component/Projects Component/ProjectCard';
import Header from '../../Common Component/Header Component/Header';

const Project = () => {
    return (
        <div>
            <Header />
            <ProjectCard heading="My Projects" />
            <Requirement />
            <VideoAnimation />
            <Footer />
        </div>
    )
}

export default Project;