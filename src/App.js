import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import SideNavBar from "./components/SideNavBar";
import HomePage from "./pages/HomePage";
import AboutMe from "./sections/about-section/AboutMe";
import Contact from "./sections/contact-section/Contact";
import Projects from "./sections/projects-section/Projects";

function App() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    document.title = "Masaya Funakoshi";
  }, []);

  window.onunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <NavBar />
      <SideNavBar scrollPos={scrollPos} />
      <HomePage scrollPos={scrollPos} />
      <ScrollToTop scrollPos={scrollPos} setScrollPos={setScrollPos} />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
