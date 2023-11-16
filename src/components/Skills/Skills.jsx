import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faNetworkWired, faDatabase,faTools } from '@fortawesome/free-solid-svg-icons';

// Styles
import "./skills.css";

// Card
import { SkillsCard } from "components/Skills/SkillsCard/SkillsCard";
import { Heading } from "components/Heading/Heading";

const Skills = () => {
  const skills = [
    {
      title: "Languages",
      icon: faCode, // replace with the appropriate icon
      tags: ["JavaScript", "Python", "Java", "TypeScript", "C++", "PHP", "Kotlin"]
    },
    {
      title: "Web 2.0",
      icon: faGlobe, // replace with the appropriate icon
      tags: ["HTML5", "CSS3", "Bootstrap", "jQuery", "Laravel", "React", "Node.js", "Express.js", "Yii2"]
    },
    {
      title: "Web 3.0",
      icon: faNetworkWired, // replace with the appropriate icon
      tags: ["Internet Computer"]
    },
    {
      title: "Databases",
      icon: faDatabase, // replace with the appropriate icon
      tags: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Others",
      icon: faTools, // replace with the appropriate icon
      tags: ["Git", "Bash"]
    },
    // Add more skills as needed
  ];

  return (
    <section className="skills-container" data-aos="fade-right" id="skills">
      <Heading text="Skill Sets" />
      <div className="skills-cards">
        {skills.map(({ title, icon, tags }, index) => (
          <SkillsCard
            key={index}
            icon={icon}
            title={title}
            tags={tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
