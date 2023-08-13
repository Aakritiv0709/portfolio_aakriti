import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderStyles from "../Header Component/Header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className={HeaderStyles.navbar} >
                <Container>
                    <Navbar.Brand href="/" className={HeaderStyles.logo}>ChauMau</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={HeaderStyles.hamburgerparent}><FontAwesomeIcon icon={faBars} className={HeaderStyles.hamburger} /></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="/" className={HeaderStyles.navlinks}>Home</Nav.Link>
                            <Nav.Link eventKey={2} href="/about" className={HeaderStyles.navlinks}>
                                About Me
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/projects" className={HeaderStyles.navlinks}>
                                Projects
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="/contact" className={HeaderStyles.navlinks}>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
}

export default Header;





