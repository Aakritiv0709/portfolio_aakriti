import React from 'react'
import Backgroundvideo from "../../assets/Background.mp4"
import BackgroundvideoStyles from "../Background Video/Backgroundvideo.module.css"
import HeroContent from '../Header Component/HeroContent'
const BackgroundVideo = () => {
    return (
        <>
            <div className={BackgroundvideoStyles.background_container}>
                <video autoPlay muted loop className={BackgroundvideoStyles.background_video}>
                    <source src={Backgroundvideo} type="video/mp4" />
                </video>
                <HeroContent />
            </div>
        </>
    )
}

export default BackgroundVideo;