import React from "react";
import "./styles/HomePage.css";
//Import sections

const HomePage = () => {
  return (
    <div className="Homepage-container">
      <div className="Homepage-Text grid-item-2">
        <div className="Homepage-Text-Norm">Hello!</div>
        <div className="Homepage-Text-Norm">
          My name is
          <h1 className="Homepage-Text-Highlight"> MASAYA FUNAKOSHI</h1>
        </div>
        <div className="Homepage-Text-Norm">
          A <h2 className="Homepage-Text-Highlight"> Front-End Developer</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
