import { ClickAwayListener } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { debounce } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
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

  const widthChecker = () => {
    if (window.innerWidth <= 768) {
      setWidthMobile(true);
    } else {
      setWidthMobile(false);
    }
  };

  const debounceWidth = useMemo(() => debounce(widthChecker, 300), []);

  useEffect(() => {
    window.addEventListener("resize", debounceWidth);
  }, []);

  if (!widthMobile) {
    return (
      <AnimatePresence>
        {navbarActive ? (
          <motion.div
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            exit={{ x: -150 }}
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
        )}
      </AnimatePresence>
    );
  }
};

export default SideNavBar;
