import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./styles/NavBar.css";

const NavBar = () => {
  const [showCodeTitle, setShowCodeTitle] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false)

  const scrollFunc = () => {
    if (window.scrollY > 0) {
      setNavbarActive(true)
    } else {
      setNavbarActive(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  return (
    <nav className={`NavBar-Container ${navbarActive ? "active" : ""}`}>
      <div className="Grid-Item-NavBar-1">
        <span>
          <Link
            className="Title"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            onMouseEnter={() => setShowCodeTitle(true)}
            onMouseLeave={() => setShowCodeTitle(false)}
          >
            {!showCodeTitle ? (
              <span>masaya funakoshi</span>
            ) : (
              <span className="Title-Code">
                <>&#60;</>
                mf <>&#47;</>
                <>&#62;</>
              </span>
            )}
          </Link>
        </span>
      </div>
      <div className="NavBar-Items-All Grid-Item-NavBar-3">
        <span className="NavBar-Items">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-50}
          >
            Projects
          </Link>
        </span>
        <span className="NavBar-Items">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-50}
          >
            About
          </Link>
        </span>
        <span className="NavBar-Items">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1000}
          >
            Contact
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
