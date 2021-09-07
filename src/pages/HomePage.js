import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import "./styles/HomePage.css";
import PopperComp from "../components/Popper";

let audio = new Audio("/NamePronounciation.mp3");

const HomePage = () => {
  const [doneType, setDoneType] = useState(false);
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
            <Typing speed={40}>Hello!</Typing>
          </div>
          <div className="Homepage-Text-Norm" id="Second-Line">
            <Typing speed={40} startDelay={1000}>
              My name is
            </Typing>
            {doneType ? (
              <div
                className="Pronounce-Container"
                onMouseEnter={() => setPronounce(true)}
                onMouseLeave={() => setPronounce(false)}
              >
                {!pronounce ? (
                  <h1 className="Homepage-Text-Highlight" id="Second-Line-Name">
                    {" "}
                    MASAYA FUNAKOSHI{" "}
                  </h1>
                ) : (
                  <PopperComp>
                    <span
                      className="Homepage-Text-Highlight Name-Pronounce"
                      onClick={namePronounce}
                      id="HomePage-Popover-Name"
                    >
                      {""} &nbsp;mah-sai-yah foo-nah-koe-she
                    </span>
                  </PopperComp>
                )}
              </div>
            ) : (
              <div>
                <Typing speed={60} startDelay={2000}>
                  <h1 className="Homepage-Text-Highlight" id="Second-Line-Name">
                    {" "}
                    MASAYA FUNAKOSHI{" "}
                  </h1>
                </Typing>
              </div>
            )}
          </div>

          <div className="Homepage-Text-Norm" id="Third-Line">
            <div className="Homepage-Text-FirstLine">
              <Typing
                speed={40}
                startDelay={4500}
                className="Homepage-Text-FirstLine1"
              >
                A
              </Typing>

              <Typing
                speed={70}
                startDelay={8500}
                onFinishedTyping={() => setDoneType(true)}
                className="Homepage-Text-FirstLine2"
              >
                <PopperComp>
                  <h2
                    className="Homepage-Text-Highlight"
                    id="HomePage-Popover-FrontEnd"
                  >
                    Front-End Developer
                  </h2>
                </PopperComp>
              </Typing>
            </div>
            <Typing
              speed={40}
              startDelay={5000}
              className="Descriptor-Text Photographer"
            >
              <span>Photographer</span>
            </Typing>
            <Typing
              speed={40}
              startDelay={6000}
              className="Descriptor-Text Hiker"
            >
              <span>Hiker</span>
            </Typing>
            <Typing
              speed={40}
              startDelay={7000}
              className="Descriptor-Text Artist"
            >
              <span>Artist</span>
            </Typing>
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
