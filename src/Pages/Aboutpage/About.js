import React from 'react'
import AboutMe from '../../Component/About Component/AboutMe'
import ProjectNumber from '../../Component/About Component/ProjectNumber'
import Experience from '../../Component/About Component/Experience'
import Footer from '../../Common Component/Footer Component/Footer'
import Header from '../../Common Component/Header Component/Header'

const About = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <ProjectNumber />
            <Experience />
            <Footer />
        </div>
    )
}

export default About