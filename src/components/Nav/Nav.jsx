import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTasks, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";
import "./nav.css";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={"nav-wrapper"}>
            <motion.div
                id="navbar"
                className={"nav-container"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <span className={"logo"} onClick={() => scroll.scrollToTop()}>
                    Bryan Liow
                </span>
                {/* Navigation Links for Large Screens */}
                <div className="nav-links-outer">
                    <Link
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link-outer"
                    >
                        Skill Sets <FontAwesomeIcon icon={faCode} />
                    </Link>
                    <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link-outer"
                    >
                        Projects <FontAwesomeIcon icon={faTasks} />
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-link-outer"
                    >
                        Get in Touch <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                </div>
                {/* Hamburger Menu Icon */}
                <div className={"menu-icon"} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {/* Side Menu for Small Screens */}
                <div className={`nav-links-inner ${isMenuOpen ? 'menuActive' : ''}`}>
                    <div className="close-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div className="nav-link-inner-container">
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link-inner"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skill Sets <FontAwesomeIcon icon={faCode} />
                        </Link>
                        <Link
                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link-inner"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects <FontAwesomeIcon icon={faTasks} />
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link-inner"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get in Touch <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Nav;
