import React from "react";
import FooterStyles from "../Footer Component/Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (

        <footer className="container">

            <div className={FooterStyles.heading}>
                <h1>Let's Work Together</h1>
            </div>
            <div className={FooterStyles.parent}>
                <div className={FooterStyles.child1}>
                    <p>
                        Greetings!, I'm a B.Tech under graduate From Gyan Ganga Institute of
                        Technology .I'm currently having the "Front-End Developer" profile,
                        But my future plans are to step into full stack development.
                    </p>
                    <p className={FooterStyles.info}>
                        <FontAwesomeIcon icon={faPhone} className={FooterStyles.icons} />
                        <span>Call us at: 1-000-000-000</span>
                    </p>
                    <p className={FooterStyles.info}>
                        <FontAwesomeIcon icon={faEnvelope} className={FooterStyles.icons} />
                        <span>Contact us: aakritiv0709@gmail.com</span>
                    </p>
                    <p className={FooterStyles.info}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={FooterStyles.icons} />
                        <span>Location: vijaynagar jabalpur</span>
                    </p>
                    <div className={FooterStyles.follow_us}>
                        <span>Follow Us :</span>
                        <Link href="https://www.linkedin.com/in/aakriti-pandey-076abb26b/"> <FontAwesomeIcon icon={faLinkedin} className={FooterStyles.icon_link} /></Link>
                        <Link href="https://github.com/Aakritiv0709"> <FontAwesomeIcon icon={faGithub} className={FooterStyles.icon_link} /></Link>
                    </div>

                </div>
                <div className={FooterStyles.child2}>

                    <div className={FooterStyles.form_field}>

                        <input type="text" id="name" placeholder="Full Name" name="name" required />
                    </div>
                    <div className={FooterStyles.form_field}>

                        <input type="email" id="email" placeholder="Email" name="email" required />
                    </div>

                    <div className={FooterStyles.form_field}>
                        <button className={FooterStyles.button}><NavLink to="https://www.linkedin.com/in/aakriti-pandey-076abb26b/">Submit</NavLink></button>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr className={FooterStyles.horizontal}></hr>
                <p className={FooterStyles.copyright}>copyright &copy; Aakriti Pandey. All Rights Reserved</p>
            </div>

        </footer>

    );
};

export default Footer;
