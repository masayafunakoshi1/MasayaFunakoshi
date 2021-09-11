import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import PopperComp from "./PopperComp";
import { ClickAwayListener } from "@material-ui/core";
import "./styles/SideNavBar.css";

const SideNavBar = ({ scrollPos }) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [widthMobile, setWidthMobile] = useState(false);
  const [sideNavPull, setSideNavPull] = useState(false);

  useEffect(() => {
    if (scrollPos >= 20) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  }, [scrollPos]);

  useEffect(() => {
    if (window.innerWidth <= 490) {
      setWidthMobile(true);
    } else {
      setWidthMobile(false);
    }
  }, []);

  if (!widthMobile) {
    return (
      <AnimatePresence>
        {navbarActive ? (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: -200 }}
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
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/SideNavBar-Imgs/icons8-home-50.png"
                  alt="HomeIcon"
                  id="Home-Icon"
                ></img>
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
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/SideNavBar-Imgs/icons8-wrench-50.png"
                  alt="ProjectsIcon"
                  id="Projects-Icon"
                ></img>
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
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/SideNavBar-Imgs/icons8-contact-48.png"
                  alt="AboutIcon"
                  id="About-Icon"
                ></img>
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
                <img
                  className="SideNavBar-Icons invert-color"
                  src="images/icons8-email-128.png"
                  alt="ContactIcon"
                  id="Contact-Icon"
                ></img>
              </Link>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    );
  }

  if (widthMobile) {
    return (
      <AnimatePresence>
        {sideNavPull ? (
          <ClickAwayListener onClickAway={() => setSideNavPull(false)}>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ type: "spring", stiffness: 40 }}
              className="SideNavBar-Container"
            >
              <div className="SideNavBar-Home">
                <Link
                  className="Title"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  onClick={() => setSideNavPull(false)}
                >
                  <img
                    className="SideNavBar-Icons invert-color"
                    src="images/SideNavBar-Imgs/icons8-home-50.png"
                    alt="HomeIcon"
                    id="Home-Icon"
                  ></img>
                </Link>
              </div>
              <div className="SideNavBar-Projects">
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-50}
                  onClick={() => setSideNavPull(false)}
                >
                  <img
                    className="SideNavBar-Icons invert-color"
                    src="images/SideNavBar-Imgs/icons8-wrench-50.png"
                    alt="ProjectsIcon"
                    id="Projects-Icon"
                  ></img>
                </Link>
              </div>
              <div className="SideNavBar-About">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  offset={-50}
                  onClick={() => setSideNavPull(false)}
                >
                  <img
                    className="SideNavBar-Icons invert-color"
                    src="images/SideNavBar-Imgs/icons8-contact-48.png"
                    alt="AboutIcon"
                    id="About-Icon"
                  ></img>
                </Link>
              </div>
              <div className="SideNavBar-Contact">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1500}
                  onClick={() => setSideNavPull(false)}
                >
                  <img
                    className="SideNavBar-Icons invert-color"
                    src="images/icons8-email-128.png"
                    alt="ContactIcon"
                    id="Contact-Icon"
                  ></img>
                </Link>
              </div>
            </motion.div>
          </ClickAwayListener>
        ) : (
          <PopperComp>
            <motion.div
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: -20 }}
              transition={{ type: "spring", stiffness: 40 }}
              onClick={() => setSideNavPull(true)}
              className="SideNavBar-PullBtn"
              id="SideNav-PullOut"
            >
              <span>&#10095;</span>
            </motion.div>
          </PopperComp>
        )}
      </AnimatePresence>
    );
  }
};

export default SideNavBar;
