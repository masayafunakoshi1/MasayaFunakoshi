import React, { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import "./styles/HomePage.css";

let audio = new Audio("/NamePronounciation.mp3");

const HomePage = () => {
  const [pronounce, setPronounce] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const namePronounce = () => {
    audio.play();
  };

  return (
    <div className="Homepage-Container" id="home">
      <div className="Homepage-Container-Subgrid">
        <div className="Homepage-Text Grid-Item-1">
          <div className="Homepage-Text-Norm" id="First-Line">
            Hello!
          </div>

          <div className="Homepage-Text-Norm" id="Second-Line">
            <span>My name is </span>
            <div
              onMouseEnter={() => setPronounce(true)}
              onMouseLeave={() => setPronounce(false)}
            >
              {!pronounce ? (
                <h1 className="Homepage-Text-Highlight" id="Second-Line-Name">
                  {" "}
                  MASAYA FUNAKOSHI{" "}
                </h1>
              ) : (
                <span
                  className="Homepage-Text-Highlight Name-Pronounce"
                  onClick={namePronounce}
                >
                  {""} &nbsp;mah-sai-yah foo-nah-koe-she
                </span>
              )}
            </div>
          </div>
          <div
            className="Homepage-Text-Norm Front-End-Dev-Text"
            id="Third-Line"
          >
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
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default HomePage;
