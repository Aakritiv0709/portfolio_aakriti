import React from 'react'
import HeroStyles from "./HeroContent.module.css"

const HeroContent = () => {
    return (
        <div className={HeroStyles.content}>
            <h1>Turning Websites to a Cinematic Masterpiece</h1>
            <button className={HeroStyles.button}>Contact Me</button>
        </div>
    )
}
export default HeroContent;