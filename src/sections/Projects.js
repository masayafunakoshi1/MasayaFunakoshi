import React from "react";
import "./styles/Projects.css";

const Projects = () => {
  return (
    <div className="Projects-Page-Container">
      <div className="Section-Header Projects-Header">Projects</div>
      <div className="Projects-Page-Container-Subgrid">
        {/* 2 rows 2 columns (one column is for side nav bar) */}
        <div className="Projects-Page-Container-SubSubgrid">
          content
          {/* 2 rows */}
          <div className="Projects-Page-Container-SubSubSubgrid">
            content
            <div className="Projects-Page-Container-Subx4grid"></div>
          </div>
          {/* 5 columns 4 rows */}
        </div>
        <div className="Projects-Page-Container-SubSubgrid">
          <div className="Projects-Page-Container-SubSubSubgrid">
            <div className="Projects-Page-Container-Subx4grid"></div>
          </div>
        </div>
        <div className="Projects-Page-Container-SubSubgrid">
          <div className="Projects-Page-Container-SubSubSubgrid">
            <div className="Projects-Page-Container-Subx4grid"></div>
          </div>
        </div>
        <div className="Projects-Page-Container-SubSubgrid">
          <div className="Projects-Page-Container-SubSubSubgrid">
            <div className="Projects-Page-Container-Subx4grid"></div>
          </div>
        </div>
        <div className="Projects-Page-Container-SubSubgrid">
          <div className="Projects-Page-Container-SubSubSubgrid">
            <div className="Projects-Page-Container-Subx4grid"></div>
          </div>
        </div>
        <div className="Projects-Page-Container-SubSubgrid">
          <div className="Projects-Page-Container-SubSubSubgrid">
            <div className="Projects-Page-Container-Subx4grid"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
