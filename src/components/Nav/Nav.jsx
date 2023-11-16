import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faTasks, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";
import "./nav.css";

const Nav = () => {
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
                
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="nav-link"
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
                    className="nav-link"
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
                    className="nav-link"
                >
                    Get in Touch <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                {/* Include other components or links as needed */}
            </motion.div>
        </div>
    );
};

export default Nav;
