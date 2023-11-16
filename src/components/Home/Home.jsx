import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useDencrypt } from "use-dencrypt-effect";
import Typed from "react-typed"

import portfolioProfilePic from "images/portfolio-profile-pic.jpg"
import cv from "docs/BryanZeYanLiow_CV.pdf";


// Material UI Icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';

// CSS
import "./home.css";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },
  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

const greeting = "Hello there!";
const myName = "I am Bryan Liow";

const Home = () => {
  const [result1, setResult1] = useDencrypt(greeting);
  const [result2, setResult2] = useDencrypt(myName);

  React.useEffect(() => {
    // Create a variable to hold the timeout, so it can be cleared on component unmount
    let timeoutId;

    const loop = async () => {
      timeoutId = setTimeout(async () => {
        setResult1(greeting);
        setResult2(myName);
      }, 2000); // Set delay to 2000 milliseconds (2 seconds)
    };

    loop();

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <section className="home-container" id="home">
      <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <span className="status-badge" onClick={() => window.open('https://www.linkedin.com/in/zeyanliow', '_blank')}>
          Available for work
        </span>
        <h2>{result1}</h2>
        <h2>{result2}</h2>
        <p style={{ fontSize: "1.2rem ", fontWeight: "600" }}>
          I am a
          <span style={{ marginLeft: "8px" }}>
            <Typed
              strings={[
                "Software Artisan",
                "React Ranger",
                "Full-Stack Maverick",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </span>
        </p>
        {/* Parent container for all buttons */}
        {/* <div className="buttons-parent-container"> */}
        {/* First row of buttons */}
        <div className="button-container">
          <a href="https://github.com/bryanliow" target="blank" className="button github">
            <GitHubIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/zeyanliow" target="blank" className="button linkedin">
            <LinkedInIcon /> LinkedIn
          </a>
          <Link
            to="contact"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            offset={-100}
            duration={500}
            className="button email" // Apply your styles and classes here
          >
            <EmailIcon /> Email
          </Link>
          <a href={cv} className="button cv" target="_blank" rel="noopener noreferrer">
            <DescriptionIcon /> CV
          </a>
        </div>
        {/* </div> */}
      </motion.div>
      <motion.div
        className="svg"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img className="profilePic" src={portfolioProfilePic} alt="Developer" />
      </motion.div>
    </section>
  );
};

export default Home;
