import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SideNavBar from "./components/SideNavBar";
import HomePage from "./pages/HomePage";
import Projects from "./sections/projects-section/Projects";
import AboutMe from "./sections/about-section/AboutMe";
import Contact from "./sections/contact-section/Contact";
import ScrollToTop from "./components/ScrollToTop";

//Navbar, footer, homepage

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <ScrollToTop />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;

{
  /* <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li> */
}
