import React from 'react'
import BackgroundVideo from '../../Common Component/Background Video/BackgroundVideo'
import AboutSection from '../../Component/HomeComponent/AboutSection'
import Quality from '../../Component/HomeComponent/Quality'
import Footer from '../../Common Component/Footer Component/Footer'
import ProjectCard from '../../Component/Projects Component/ProjectCard'
import Header from '../../Common Component/Header Component/Header'
const Home = () => {
    return (
        <div>
            <Header />
            <BackgroundVideo />
            <AboutSection />
            <Quality />
            <ProjectCard heading="My recent Projects" />
            <Footer />
        </div>
    )
}

export default Home;