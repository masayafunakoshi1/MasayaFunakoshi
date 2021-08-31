import React from "react";
import { Link } from "react-scroll";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-Container">
      <div className="Grid-Item-NavBar-1">
        <span>
          <Link className="Title">masaya funakoshi</Link>
          <Link className="Title-Code">
            <span>&#60;</span>
            mf <span>&#47;</span>
            <span>&#62;</span>
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
          >
            About
          </Link>
        </span>
        <span className="NavBar-Items">
          <Link
            activeClass="active"
            to="content"
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
