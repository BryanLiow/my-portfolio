import React from "react";

// Styles
import "./project-item.css";

const ProjectItem = ({ title, active, setSelected, id }) => {
  return (
    <div
      className={"project-item " + (active && "active")}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
};

export default ProjectItem;
