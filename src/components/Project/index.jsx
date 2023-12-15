import React, { useState, useEffect } from "react";

// Styles
import "./project.css";

// Components
import { Heading } from "components/Heading/Heading";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";

import ProjectItem from "./ProjectItem/ProjectItem";
import aqualityProjectImg from "images/projects/aquality-project-bg.jpg"
import dBankProjectImg from "images/projects/dbank-project-bg.png"
import xmasProjectImg from "images/projects/xmas-project-bg.jpeg"
import triptalkProjectImg from "images/projects/triptalk-project-bg.webp"

const hardcodedData = [
  {
    category: "IoT",
    title: "Aquality 2.0",
    tagline: "DkIT Final Year Project",
    repositoryUrl: "https://github.com/cWenyu/CCCMI",
    liveUrl: "https://mahara.dkit.ie/view/view.php?id=84850",
    img: { asset: { url: aqualityProjectImg } }
  },
  {
    category: "Web",
    title: "Xmas Trip 2021",
    tagline: "",
    repositoryUrl: "https://github.com/BryanLiow/XmasTrip",
    liveUrl: "https://xmas-trip.netlify.app/",
    img: { asset: { url: xmasProjectImg } }
  },
  {
    category: "Web 3.0",
    title: "Dencentralised Bank Calculator",
    tagline: "A dencentralised application hosted on Internet Computer network.",
    repositoryUrl: "https://github.com/BryanLiow/DeFiBankBalancer",
    liveUrl: "",
    img: { asset: { url: dBankProjectImg } }
  }, 
  {
    category: "Web",
    title: "Triptalk- Next.js",
    tagline: "Frontend of a social media platform for sharing travel posts, built with Next.js and styled using Tailwind CSS.",
    repositoryUrl: "https://github.com/BryanLiow/travel_app",
    liveUrl: "",
    img: { asset: { url: triptalkProjectImg } }
  },
  {
    category: "Web",
    title: "Triptalk- Laravel",
    tagline: "Backend API for a travel post-sharing social media platform, developed using Laravel.",
    repositoryUrl: "https://github.com/BryanLiow/laravel_travel_app",
    liveUrl: "",
    img: { asset: { url: triptalkProjectImg } }
  },
];

const Project = () => {
  const [selected, setSelected] = useState("All");
  const [data, setData] = useState([]);

  // Categories for filter buttons
  const projectList = [
    "All",
    "IoT",
    "Web",
    "Web 3.0"
  ];

  useEffect(() => {
    // Filter projects based on the selected category
    const filteredData = selected === "All"
      ? hardcodedData
      : hardcodedData.filter(project => project.category === selected);

    setData(filteredData);
  }, [selected]); // Removed hardcodedData from dependencies

  return (
    <section
      data-aos="fade-left"
      className="project"
      name="project"
      id="project"
    >
      <Heading text="Projects" style={{ padding: "3rem" }} />
      <div className="list">
        {projectList.map((list) => (
          <ProjectItem
            title={list}
            key={list}
            active={selected === list}
            setSelected={setSelected}
            id={list}
          />
        ))}
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="column" key={index}>
            <img className="projectImg" src={item.img.asset.url} alt={item.title} />
            <div className="overlay">
              <div className="left">
                <h3>{item.title}</h3>
                <p>{item.tagline}</p>
              </div>
              <div className="right">
                {item.repositoryUrl.length > 0 && <a href={item.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="2x"
                    className="icon"
                    style={{ marginRight: "0.3em" }}
                    title="Github Repo"
                  />
                </a>}
                {item.liveUrl.length > 0 && <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faExternalLinkSquareAlt}
                    size="2x"
                    className="icon"
                    title="Live view"
                  />
                </a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
