import React from "react";
import AboutMeTechStack from "./AboutMeTechStack";
import FadeInSections from "../../components/FadeInSections";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe-Container" id="about">
      <div className="AboutMe-Header Section-Header">
        <FadeInSections>About Me</FadeInSections>
      </div>
      <div className="AboutMe-Subgrid">
        <div className="AboutMe-SubSubgrid">
          {/* <div className="AboutMe-SubSubSubgrid"> */}
          <FadeInSections>
            <div className="AboutMe-PictureSubgrid">
              <img
                src="images/DSC03037.jpg"
                alt="Alaska_Picture_of_ME"
                className="PicOfMe"
              />
            </div>
          </FadeInSections>
          <FadeInSections>
            <AboutMeTechStack />
          </FadeInSections>
          {/* </div> */}
        </div>
        <div className="AboutMe-TextSubgrid">
          <span className="AboutMe-Text">
            <FadeInSections>
              Hey there! My name's Masaya Funakoshi, 22-years-old, born and
              raised in Tarrytown, NY. Experienced with Front-End Web
              Development, primarily focusing on HTML, CSS, JS and React.
              Currently working on gaining a deeper understanding of
              Object-Oriented-Programming, Design Patterns, and clean code.
              <p>
                I graduated in the Spring of 2020 with a BA in Arts Management,
                right at the peak of the pandemic. The Arts took quite a hit
                from the quarantine, leaving me with no internships and alot of
                time. With this new-found freedom, I decided to do something
                I've always wanted to do, which was learn how to code. And of
                course, you know how the story goes... I fell in love with it.
              </p>
              <p>
                I believe everyone has that "Aha!" moment when they realize
                their passion for coding. Mine was when I wrote my first
                console.log("Hello World!") in JavaScript. Seeing my words
                magically appear on the console BLEW MY MIND. The machine was
                TALKING TO ME. Or maybe it was more me... talking to myself?
                Anyways, it made me feel like wrinkly Emperor Palpatine in this
                Star Wars
                <a
                  href="https://www.youtube.com/watch?v=Sg14jNbBb-8"
                  alt="Emperor Palpatine Unlimited Power scene"
                  target="_blank"
                  className="AboutMe-Link-Text"
                >
                  &#160;scene.
                </a>
              </p>
              <p>
                Throughout this journey, it's been a series of ups and downs.
                The euphoria you feel when you solve an issue that's been
                bugging you for days, as well as the frustration of a small
                problem leading you down a rabbit hole. At the end of the day,
                it's taught me a mindset, any problem can be solved with enough
                perserverance, logical thinking, and Google. I appreciate the
                experiences I've had so far, and am looking forward to
                adventures that await!
              </p>
            </FadeInSections>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
