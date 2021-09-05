import React from "react";
import "./styles/BackdropGif.css";

const projectNames = [
  "Tired Nomads",
  "Photography Website V2",
  "MasaFuna Photos",
  "Yummy Recipes",
];

const projectSrc = [
  "https://github.com/masayafunakoshi1/Tired-Nomads",
  "https://github.com/masayafunakoshi1/photography-website-v2",
  "https://github.com/masayafunakoshi1/ReactFirebasePhotoGallery",
  "https://github.com/masayafunakoshi1/RecipeApp",
];

const projectDemos = [
  "https://www.tirednomads.com/",
  "https://dreamy-cori-899bee.netlify.app/",
  "https://naughty-chandrasekhar-9652f9.netlify.app/",
  "https://optimistic-minsky-28af7e.netlify.app/",
];

const projectDescriptions = [
  "Track down where you've slept on a roadtrip, complete with reviews, ratings, and trip markers. Uses React, Firebase, MUI for styling, and Google Maps API.",
  "Personal photography website showcasing my photos for clients. Uses React, Firebase, and MUI for styling",
  "Instagram clone photo gallery, with a responsive UI and animations. Uses React, Typescript, Firebase, Semantic UI and framer-motion for styling/animations",
  "Simple Recipe App using Edamam API. React, Edamam, and MUI for styling.",
];

const BackdropGif = ({ backdropCondHandler, backdropNum }) => {
  return (
    <div className="Backdrop-Container" onClick={() => backdropCondHandler()}>
      <div className="Backdrop-Subgrid">
        <span className="AppTitle">{projectNames[backdropNum]}</span>
        <div className="Backdrop-SubSubgrid">
          <div className="Project-Description">
            <span>{projectDescriptions[backdropNum]}</span>
          </div>
          <div className="Src-Code">
            <a
              href={projectSrc[backdropNum]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="Github"
                src="images/icons8-github-250.png"
                alt="Github-Icon"
              />
            </a>
          </div>
          <div className="Demo">
            <a
              href={projectDemos[backdropNum]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button id="Live-Demo">Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackdropGif;
