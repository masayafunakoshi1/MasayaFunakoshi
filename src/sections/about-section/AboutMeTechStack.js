import React from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

const AboutMeTechStack = () => {
  return (
    <div className="AboutMe-TechStackSubgrid">
      <div className="HTML">
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween", duration: 0.1 }}
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
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween", duration: 0.1 }}
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
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween", duration: 0.1 }}
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
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween", duration: 0.1 }}
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
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween", duration: 0.1 }}
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
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ type: "tween", duration: 0.1 }}
            src="tech-stack/icons8-material-ui.svg"
            alt="MUI_Logo"
            className="TechStack MUI"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMeTechStack;
