import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./skills-card.css";

export const SkillsCard = ({ icon, tags, title }) => {
  return (
    <div className="skills-card">
      <div className="icon-container">
        {icon && <FontAwesomeIcon icon={icon} />}
      </div>
      <h2>{title}</h2>
      <div className="tags">
        {tags?.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
