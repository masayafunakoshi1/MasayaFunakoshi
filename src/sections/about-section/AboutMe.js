import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe-Container">
      <div className="AboutMe-Header Section-Header">About Me</div>
      <div className="AboutMe-Subgrid">
        <div className="AboutMe-SubSubgrid">
          {/* <div className="AboutMe-SubSubSubgrid"> */}
          <div className="AboutMe-PictureSubgrid">
            <img
              src="images/DSC03037.jpg"
              alt="Alaska_Picture_of_ME"
              className="PicOfMe"
            />
          </div>
          <div className="AboutMe-TechStackSubgrid">
            <div className="HTML">
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="tech-stack/icons8-html-5.svg"
                  alt="HTML5_Logo"
                  className="TechStack"
                />
              </a>
            </div>
            <div className="CSS">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="tech-stack/icons8-css3.svg"
                  alt="CSS3_Logo"
                  className="TechStack"
                />
              </a>
            </div>
            <div className="JS">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="tech-stack/icons8-javascript.svg"
                  alt="JS_Logo"
                  className="TechStack"
                />
              </a>
            </div>
            <div className="Firebase">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="tech-stack/icons8-firebase.svg"
                  alt="Firebase_Logo"
                  className="TechStack"
                />
              </a>
            </div>
            <div className="React">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="tech-stack/logo192.png"
                  alt="React_Logo"
                  className="TechStack"
                />
              </a>
            </div>
            <div className="MUI">
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="tech-stack/icons8-material-ui.svg"
                  alt="MUI_Logo"
                  className="TechStack MUI"
                />
              </a>
            </div>
          </div>

          {/* </div> */}
        </div>
        <div className="AboutMe-TextSubgrid">
          <span className="AboutMe-Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
