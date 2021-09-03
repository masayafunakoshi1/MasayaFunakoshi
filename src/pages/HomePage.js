import React, { useState, useEffect } from "react";
import "./styles/HomePage.css";

const HomePage = () => {
  const [pronounce, setPronounce] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="Homepage-Container" id="home">
      <div className="Homepage-Container-Subgrid">
        <div className="Homepage-Text Grid-Item-1">
          <div className="Homepage-Text-Norm">Hello!</div>
          <div className="Homepage-Text-Norm">
            <span className="Homepage-Text-nextToName">My name is</span>
            <span
              onMouseEnter={() => setPronounce(true)}
              onMouseLeave={() => setPronounce(false)}
              className="Homepage-Text-Name"
            >
              {!pronounce ? (
                <h1 className="Homepage-Text-Highlight"> MASAYA FUNAKOSHI </h1>
              ) : (
                <span className="Homepage-Text-Highlight Name-Pronounce">
                  {""} &nbsp;mah-sai-yah foo-nah-koe-she
                </span>
              )}
            </span>
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
