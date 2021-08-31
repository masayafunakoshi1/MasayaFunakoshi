import "./App.css";
import HomePage from "./pages/HomePage";
import Projects from "./sections/projects-section/Projects";
import AboutMe from "./sections/about-section/AboutMe";
import Contact from "./sections/contact-section/Contact";

//Navbar, footer, homepage

function App() {
  return (
    <div className="App">
      <HomePage />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
