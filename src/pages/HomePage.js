import React from "react";
import "./styles/HomePage.css";

//Import sections
import NavBar from "../components/NavBar";

const HomePage = () => {
  return (
    <div className="Homepage-Container">
      <NavBar />
      <div className="Homepage-Container-Subgrid">
        <div className="Homepage-Text Grid-Item-1">
          <div className="Homepage-Text-Norm">Hello!</div>
          <div className="Homepage-Text-Norm">
            My name is
            <h1 className="Homepage-Text-Highlight"> MASAYA FUNAKOSHI</h1>
          </div>
          <div className="Homepage-Text-Norm Front-End-Dev-Text">
            A <h2 className="Homepage-Text-Highlight"> Front-End Developer</h2>
            <br />A Photographer
            <br />A Adventurer
            <br />A Artist
          </div>
        </div>
        <div className="Grid-Item-2">
          <img
            className="Homepage-Img"
            src="images/Masaya-Funakoshi-Arts-Management2.jpg"
            alt="Picture of Masaya Funakoshi"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
