import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import PopperComp from "./PopperComp";
import "./styles/SideNavBar.css";
import { Popper } from "@material-ui/core";

const SideNavBar = ({ scrollPos }) => {
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    if (scrollPos >= 20) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  }, [scrollPos]);

  return (
    <AnimatePresence>
      {navbarActive ? (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 40 }}
          // className={`SideNavBar-Container ${navbarActive ? "active" : ""}`}
          className="SideNavBar-Container"
        >
          <div className="SideNavBar-Home">
            <Link
              className="Title"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <PopperComp>
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/SideNavBar-Imgs/icons8-home-50.png"
                  alt="HomeIcon"
                  id="Home-Icon"
                ></img>
              </PopperComp>
            </Link>
          </div>
          <div className="SideNavBar-Projects">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-50}
            >
              <PopperComp>
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/SideNavBar-Imgs/icons8-wrench-50.png"
                  alt="ProjectsIcon"
                  id="Projects-Icon"
                ></img>
              </PopperComp>
            </Link>
          </div>
          <div className="SideNavBar-About">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-50}
            >
              <PopperComp>
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/SideNavBar-Imgs/icons8-contact-48.png"
                  alt="AboutIcon"
                  id="About-Icon"
                ></img>
              </PopperComp>
            </Link>
          </div>
          <div className="SideNavBar-Contact">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <PopperComp>
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/icons8-email-128.png"
                  alt="ContactIcon"
                  id="Contact-Icon"
                ></img>
              </PopperComp>
            </Link>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
};

export default SideNavBar;
