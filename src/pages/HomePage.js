import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import { motion } from "framer-motion";
import "./styles/HomePage.css";
import PopperComp from "../components/PopperComp";

let audio = new Audio("/NamePronounciation.mp3");

const HomePage = () => {
  const [doneType, setDoneType] = useState(false);
  const [pronounce, setPronounce] = useState(false);
  const [newColorHex, setNewColorHex] = useState(null);

  const colors = [
    "#FF0000",
    "#FF00AB",
    "#AB00FF",
    // "#3300FF",
    "#4D00FF",
    "#0044FF",
    "#00C4FF",
    "#00FFF7",
    "#00FF89",
    "#00FF2B",
    "#B3FF00",
    "#F7FF00",
    // "#FFAB00",
    // "#FF4D00",
    "#ffe600",
  ];

  const namePronounce = () => {
    audio.play();
  };

  const getRandomColor = () => {
    // 16777215 (decimal) == ffffff in hexidecimal
    let newColorNum = Math.floor(Math.random() * 12);
    setNewColorHex(newColorNum);
    console.log("clicked");
  };

  return (
    <div className="Homepage-Container" id="home">
      <div className="Homepage-Container-Subgrid">
        <div className="Homepage-Text Grid-Item-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0, type: "spring", stiffness: 30 }}
            className="Homepage-Text-Norm"
            id="First-Line"
          >
            Hello!
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 30 }}
            className="Homepage-Text-Norm"
            id="Second-Line"
          >
            My name is
            {doneType ? (
              <div
                className="Pronounce-Container"
                onMouseEnter={() => setPronounce(true)}
                onMouseLeave={() => setPronounce(false)}
              >
                {!pronounce ? (
                  <PopperComp>
                    <h1
                      className="Homepage-Text-Highlight-Name Second-Line-Name"
                      id="HomePage-Popover-Name"
                    >
                      {" "}
                      MASAYA FUNAKOSHI{" "}
                    </h1>
                  </PopperComp>
                ) : (
                  <PopperComp>
                    <span
                      className="Homepage-Text-Highlight-Name Name-Pronounce"
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
                <Typing speed={60} startDelay={1300}>
                  <h1
                    className="Homepage-Text-Highlight-Name"
                    id="Second-Line-Name"
                  >
                    {" "}
                    MASAYA FUNAKOSHI{" "}
                  </h1>
                </Typing>
              </div>
            )}
          </motion.div>

          <div className="Homepage-Text-Norm" id="Third-Line">
            <div className="Homepage-Text-FirstLine">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.1, type: "spring", stiffness: 30 }}
                className="Homepage-Text-FirstLine1"
              >
                A
              </motion.div>

              <Typing
                speed={70}
                startDelay={6500}
                onFinishedTyping={() => setDoneType(true)}
                className="Homepage-Text-FirstLine2"
              >
                <PopperComp>
                  <motion.h2
                    animate={{ color: colors[newColorHex] }}
                    transition={{ type: "spring" }}
                    onTap={() => getRandomColor()}
                    className="Homepage-Text-Highlight-FrontEnd "
                    id="HomePage-Popover-FrontEnd"
                  >
                    Front-End Developer
                  </motion.h2>
                </PopperComp>
              </Typing>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, type: "spring", stiffness: 30 }}
              className="Descriptor-Text Photographer"
            >
              <span>Photographer</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.8, type: "spring", stiffness: 30 }}
              className="Descriptor-Text Hiker"
            >
              <span>Hiker</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.6, type: "spring", stiffness: 30 }}
              className="Descriptor-Text Artist"
            >
              <span>Artist</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, type: "tween", duration: 1 }}
          className="Grid-Item-2"
        >
          <PopperComp>
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ type: "tween", duration: 0.3 }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={1}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              className="Homepage-Img"
              src="images/Masaya-Funakoshi-Arts-Management2.jpg"
              alt="Picture of Masaya Funakoshi"
              id="HomePage-Popover-ImgOfMe"
            />
          </PopperComp>
        </motion.div>
      </div>

      {/* <ScrollToTop /> */}
    </div>
  );
};

export default HomePage;
