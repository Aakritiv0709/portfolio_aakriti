import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from './Header.module.css'; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={HeaderStyles.navbar}>
      <div className={HeaderStyles.container}>
        <div className={HeaderStyles.logo}>chau</div>

        <div className={HeaderStyles.menu_icon} onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={`${HeaderStyles.nav_element} ${showNavbar && HeaderStyles.active}`}>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeclassname="active">
                Project
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
