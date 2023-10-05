import React from 'react'
import HeroStyles from "./HeroContent.module.css"
import { NavLink } from 'react-router-dom'
const HeroContent = () => {
    return (
        <div className={HeroStyles.content}>
            <h1>We design your dreams into a new reality.</h1>
            <button className={HeroStyles.button}><NavLink to="https://www.linkedin.com/in/aakriti-pandey-076abb26b/">Contact Me</NavLink></button>
        </div>
    )
}
export default HeroContent;