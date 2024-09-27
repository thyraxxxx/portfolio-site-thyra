/*
File Name: NavBar.jsx
Student Name: Thyra Barnes
Student ID: 301068290
Date: September 26, 2024
*/


import { useState, useEffect} from "react";
import {Link} from "react-scroll";

function Navbar () {
    const [navActive, setNavActive] = useState(false);

    /* Open nav bar */
    const toggleNav = () => {
        setNavActive(!navActive);
    };

    /* close nav bar */
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize  = () => {
            if(window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        
    }, []);

    useEffect(() => {
            if(Window.innerWidth <= 1200) {
                closeMenu();
            }
        
    }, {});

    /* if nav bar is active, will say nav bar, if not display nothing */
    return (
        <nav className={`navbar ${navActive ? "active": ""}`}>
            <div>
                <img src="/Logo.png" alt="Logo" />
            </div>
            <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active--content"
                        spy={true} 
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="navbar--content"   
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active--content"
                        spy={true} 
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="navbar--content"   
                        >
                        Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active--content"
                        spy={true} 
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="AboutMe"
                        className="navbar--content"   
                        >
                        About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active--content"
                        spy={true} 
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Skills"
                        className="navbar--content"   
                        >
                        Skills
                        </Link>
                    </li>
                    <li>
                        <Link 
                        onClick={closeMenu}
                        activeClass="navbar--active--content"
                        spy={true} 
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="services"
                        className="navbar--content"   
                        >
                        Services
                        </Link>
                    </li>
                </ul>

            </div>
            <Link
            onClick={closeMenu}
            activeClass="navbar--active--content"
            spy={true} 
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary"
            
            >
            Contact Me

            </Link>

        </nav>
    );
}
export default Navbar;