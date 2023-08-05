import React from 'react'
import HeaderStyles from "../Header Component/Header.module.css"
const Header = () => {
    return (
        <>
            <div className={HeaderStyles.header}>
                <div className={HeaderStyles.logo}>
                    <h3>ChauMau</h3>
                </div>
                <div className={HeaderStyles.navbar}>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About me
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Work
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;