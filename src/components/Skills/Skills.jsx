import React from "react";
import { faCode, faGlobe, faNetworkWired, faDatabase,faTools, faCloud } from '@fortawesome/free-solid-svg-icons';

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
      tags: ["JavaScript", "Python", "Java", "TypeScript", "C++", "PHP", "Kotlin", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: faGlobe, // replace with the appropriate icon
      tags: ["Tailwind CSS", "Bootstrap", "jQuery", "React.js", "React Native", "Next.js", "Node.js", "Express.js", "Laravel", "Yii2"]
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
      title: "Cloud Computing Platforms",
      icon: faCloud, // replace with the appropriate icon
      tags: ["AWS"]
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
