import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles/NavBar.css";

const NavBar = () => {
  // const [showCodeTitle, setShowCodeTitle] = useState(false);

  return (
    <nav className="NavBar-Container ">
      <Link
        className="Title Grid-Item-NavBar-1"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={1500}
        // onMouseEnter={() => setShowCodeTitle(true)}
        // onMouseLeave={() => setShowCodeTitle(false)}
      >
        <div className="">
          <span>
            <span>masaya funakoshi</span>
            {/* 
            Figure out how to make the code words do cool animation
            {!showCodeTitle ? (
              <span>masaya funakoshi</span>
            ) : (
              <span className="Title-Code">
                <>&#60;</>
                mf <>&#47;</>
                <>&#62;</>
              </span>
            )} */}
          </span>
        </div>
      </Link>
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
