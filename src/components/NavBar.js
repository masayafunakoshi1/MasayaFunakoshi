import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles/NavBar.css";

const NavBar = () => {
  const [showCodeTitle, setShowCodeTitle] = useState(false);

  return (
    <nav className="NavBar-Container">
      <div className="Grid-Item-NavBar-1">
        <span>
          <Link
            className="Title"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1500}
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
      <ul className="NavBar-Items-All Grid-Item-NavBar-3">
        <li className="NavBar-Items">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={1500}
            offset={-50}
          >
            Project
          </Link>
        </li>
        <li className="NavBar-Items">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1500}
            offset={-50}
          >
            About
          </Link>
        </li>
        <li className="NavBar-Items">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
