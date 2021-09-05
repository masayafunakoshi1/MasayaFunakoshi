import React, { useState } from "react";
import "./Projects.css";
import BackdropGif from "../../components/BackdropGif";

const ProjectsPreview = () => {
  const [showGif, setShowGif] = useState(0);
  const [backdropShow, setBackdropShow] = useState(null);
  const [backdropNum, setBackdropNum] = useState(null);

  const gifSrc = [
    "project-gifs/Tired-Nomads-App.gif",
    "project-gifs/Photography-Wesbite-Gif.gif",
    "project-gifs/MasaFuna-Photo-Gallery.gif",
    "project-gifs/Recipe-App.gif",
  ];

  const imgSrc = [
    "project-gifs/Tired-Nomads-App.png",
    "project-gifs/Photography-Website.png",
    "project-gifs/MasaFuna-Photo-Gallery.png",
    "project-gifs/Recipe-App.png",
  ];

  const backdropCondHandler = async (num) => {
    setBackdropNum(num);
    if (backdropShow === num) {
      setBackdropShow(null);
    } else {
      console.log("showing");
      setBackdropShow(num);
    }
  };

  return (
    <div className="Projects-Page-Container-Subgrid">
      {/* 2 rows 2 columns (one column is for side nav bar) */}
      <div className="Projects-Page-Container-SubSubgrid">
        {/* 2 rows */}
        <div className="Projects-Page-Container-SubSubSubgrid">
          <img
            onMouseEnter={() => setShowGif(1)}
            onMouseLeave={() => setShowGif(0)}
            className="Projects-Gifs"
            src={showGif === 1 ? gifSrc[0] : imgSrc[0]}
            // src={gifSrc[0]}
            alt="TiredNomadsAppGif"
            onClick={() => backdropCondHandler(0)}
          />

          {backdropShow === 0 ? (
            <BackdropGif
              backdropNum={backdropNum}
              backdropCondHandler={backdropCondHandler}
            />
          ) : (
            ""
          )}

          <div className="Projects-Page-Container-Subx4grid">
            <div className="Tech-Stack-Container Grid-Location-1">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">React</span>
              </a>
            </div>

            <div className="Tech-Stack-Container Grid-Location-2">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Firebase</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">CSS3</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-4">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Javascript</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-5-ext extension">
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Material UI</span>
              </a>
            </div>
          </div>
        </div>
        {/* 5 columns 4 rows */}
      </div>
      <div className="Projects-Page-Container-SubSubgrid">
        <div className="Projects-Page-Container-SubSubSubgrid">
          <img
            onMouseEnter={() => setShowGif(2)}
            onMouseLeave={() => setShowGif(0)}
            className="Projects-Gifs"
            src={showGif === 2 ? gifSrc[1] : imgSrc[1]}
            // src={gifSrc[1]}
            alt="PhotographyWebsiteGif"
            onClick={() => backdropCondHandler(1)}
          />

          {backdropShow === 1 ? (
            <BackdropGif
              backdropNum={backdropNum}
              backdropCondHandler={backdropCondHandler}
            />
          ) : (
            ""
          )}

          <div className="Projects-Page-Container-Subx4grid">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Tech-Stack-Container Grid-Location-1">
                <span className="Tech-Stack-Text">React</span>
              </div>
            </a>
            <div className="Tech-Stack-Container Grid-Location-2">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Firebase</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">CSS3</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-4">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Javascript</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-5-ext extension">
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Material UI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects-Page-Container-SubSubgrid">
        <div className="Projects-Page-Container-SubSubSubgrid">
          <img
            onMouseEnter={() => setShowGif(3)}
            onMouseLeave={() => setShowGif(0)}
            className="Projects-Gifs"
            src={showGif === 3 ? gifSrc[2] : imgSrc[2]}
            // src={gifSrc[2]}
            alt="MasaFunaPhotoGalleryGif"
            onClick={() => backdropCondHandler(2)}
          />

          {backdropShow === 2 ? (
            <BackdropGif
              backdropNum={backdropNum}
              backdropCondHandler={backdropCondHandler}
            />
          ) : (
            ""
          )}

          <div className="Projects-Page-Container-Subx4grid">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Tech-Stack-Container Grid-Location-1">
                <span className="Tech-Stack-Text">React</span>
              </div>
            </a>
            <div className="Tech-Stack-Container Grid-Location-2">
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Firebase</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">CSS3</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-4">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Typescript</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-5-ext extension">
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Framer-Motion</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-6-ext extension">
              <a
                href="https://semantic-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Semantic UI</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects-Page-Container-SubSubgrid">
        <div className="Projects-Page-Container-SubSubSubgrid">
          <img
            onMouseEnter={() => setShowGif(4)}
            onMouseLeave={() => setShowGif(0)}
            className="Projects-Gifs"
            src={showGif === 4 ? gifSrc[3] : imgSrc[3]}
            // src={gifSrc[3]}
            alt="RecipeAppGif"
            onClick={() => backdropCondHandler(3)}
          />

          {backdropShow === 3 ? (
            <BackdropGif
              backdropNum={backdropNum}
              backdropCondHandler={backdropCondHandler}
            />
          ) : (
            ""
          )}

          <div className="Projects-Page-Container-Subx4grid">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="Tech-Stack-Container Grid-Location-1">
                <span className="Tech-Stack-Text">React</span>
              </div>
            </a>
            <div className="Tech-Stack-Container Grid-Location-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Javascript</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-3">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">CSS3</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-4-ext extension">
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Material UI</span>
              </a>
            </div>
            <div className="Tech-Stack-Container Grid-Location-5-ext extension">
              <a
                href="https://developer.edamam.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="Tech-Stack-Text">Edamam API</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects-Page-Container-SubSubgrid">
        <div className="Projects-Page-Container-SubSubSubgrid">
          <img className="Projects-Gifs" src="" alt="" />
          <div className="Projects-Page-Container-Subx4grid"></div>
        </div>
      </div>
      <div className="Projects-Page-Container-SubSubgrid">
        <div className="Projects-Page-Container-SubSubSubgrid">
          <img className="Projects-Gifs" src="" alt="" />
          <div className="Projects-Page-Container-Subx4grid"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;
