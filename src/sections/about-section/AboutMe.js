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
              raised in Tarrytown, NY. Currently specializing in Front-End Web
              Development, primarily focusing on HTML, CSS, JS and React.
              Completely self-taught for the past 9-months and going strong till
              I find my first dev role!
              <p>
                I graduated in the Spring of 2020 with a BA in Arts
                Management... right at the peak of the pandemic 😅. The Arts
                took quite a hit from the quarantine, so with my lack of
                jobs/internships and newly found time, I actually decided to do
                something productive and learned how to code! And of course, you
                know how the story goes... I fell in love with it 😍
              </p>
              <p>
                I always thought I was too dumb to learn how to code, and saying
                I wasn't good at Math or Science is putting it lightly. BUT
                despite all that, a friend inspired me try a website called{" "}
                <a
                  className="AboutMe-Link-Text"
                  href="https://www.internetingishard.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interneting Is Hard{" "}
                </a>
                , teaching me the basics of HTML and CSS. It wasn't a "Hello
                World!" for me, no, it was when I was able to change the size
                and color of a blue HTML &#60;div&#62; to red with a seperate
                CSS doc. It blew my mind. I was hooked. I had to know more.
              </p>
              <p>
                Throughout this journey, it's been a series of ups and downs.
                The euphoria you feel when you solve an issue that's been
                bugging you for days, as well as the frustration of a small
                problem leading you down a rabbit hole, eventually creating even
                more problems than you thought possible. At the end of the day,
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
