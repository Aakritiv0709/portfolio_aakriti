import React from 'react'
import Backgroundvideo from "../../assets/Background.mp4"
import BackgroundvideoStyles from "../Background Video/Backgroundvideo.module.css"
import Header from '../Header Component/Header'
const BackgroundVideo = () => {
    return (
        <>


            <div className={BackgroundvideoStyles.background_container}>
                <video autoPlay muted loop className={BackgroundvideoStyles.background_video}>
                    <source src={Backgroundvideo} type="video/mp4" />
                </video>
                <Header />

            </div>
        </>
    )
}

export default BackgroundVideo;