import React from "react";
import FooterStyles from "../Footer Component/Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
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
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
                        fringilla, mattis ligula consectetur, ultrices mauris.
                    </p>
                    <p className={FooterStyles.info}>
                        <FontAwesomeIcon icon={faPhone} className={FooterStyles.icons} />
                        <span>Call us at: 123-456-7890</span>
                    </p>
                    <p className={FooterStyles.info}>
                        <FontAwesomeIcon icon={faEnvelope} className={FooterStyles.icons} />
                        <span>Contact us: example@example.com</span>
                    </p>
                    <p className={FooterStyles.info}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={FooterStyles.icons} />
                        <span>Our Location: 123 Main St, City</span>
                    </p>
                    <div className={FooterStyles.follow_us}>
                        <span>Follow Us :</span>
                        <Link href="/"> <FontAwesomeIcon icon={faLinkedin} className={FooterStyles.icon_link} /></Link>

                        <Link href="/"> <FontAwesomeIcon icon={faGithub} className={FooterStyles.icon_link} /></Link>
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
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr className={FooterStyles.horizontal}></hr>
                <p className={FooterStyles.copyright}>copyright &copy; Aakriti Rajul Verma. All Rights Reserved</p>
            </div>

        </footer>

    );
};

export default Footer;
