import React from "react";
import FadeInSections from "../../components/FadeInSections";
import "./Projects.css";
import ProjectsPreview from "./ProjectsPreview";

const Projects = () => {
  return (
    <div className="Projects-Page-Container" id="projects">
      <div className="Section-Header Projects-Header">
        {" "}
        <FadeInSections>Projects </FadeInSections>
      </div>

      <ProjectsPreview />
    </div>
  );
};

export default Projects;
