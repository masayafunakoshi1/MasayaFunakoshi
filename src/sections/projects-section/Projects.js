import React from "react";
import ProjectsPreview from "./ProjectsPreview";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects-Page-Container" id="projects">
      <div className="Section-Header Projects-Header">Projects</div>
      <ProjectsPreview />
    </div>
  );
};

export default Projects;
