import React from 'react'
import BackgroundVideo from '../../Common Component/Background Video/BackgroundVideo'
import AboutSection from '../../Component/HomeComponent/AboutSection'
import Quality from '../../Component/HomeComponent/Quality'
import Recent_projects from '../../Component/HomeComponent/Recent_projects'
import Footer from '../../Common Component/Footer Component/Footer'
const Home = () => {
    return (
        <div>
            <BackgroundVideo />
            <AboutSection />
            <Quality />
            <Recent_projects />
            <Footer />
        </div>
    )
}

export default Home