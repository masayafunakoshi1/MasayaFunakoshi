import React from "react";
import "./Contact.css";
import ContactTexfields from "./ContactTexfields";

const Contact = () => {
  return (
    <div className="ContactPage-Container">
      <div className="ContactPage-Header Section-Header">Contact Me</div>
      <div className="ContactPage-Subgrid">
        <ContactTexfields />
        <div className="ContactPage-ContactInfo">
          <div className="ContactInfo-Location">
          <a 
            href="https://www.google.com/maps/place/Westchester+County,+NY/@41.1187086,-74.0131808,10z/data=!3m1!4b1!4m5!3m4!1s0x89c2c96a9d6b59af:0x370ed86222bddb89!8m2!3d41.1220194!4d-73.7948516" 
            target="_blank">
              <img src="images/icons8-location-100.png" alt="Location-Icon" className="location invert-color"/>
            <span className="Contact-Info-Text">Westchester, New York</span>
          </a>
          </div>
          <div className="ContactInfo-Email">
          <a 
            href="mailto:masayafunakoshi1@gmail.com?subject=Subject&body=message%20goes%20here" className="contactsText">
              <img src="images/icons8-email-128.png" alt="Email-Icon" className="email invert-color"/>
            <span className="Contact-Info-Text">masayafunakoshi1@gmail.com</span>
          </a>
          </div>
          <div className="ContactPage-ContactInfo-Socials">
            <div className="LinkedIn">
            <a
                href="https://www.linkedin.com/in/masayafunakoshi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/icons8-linkedin.svg" alt="LinkedIn-Icon" className="Socials"/>
            </a>
            </div>
            <div className="Github invert-color">
            <a
                href="https://github.com/masayafunakoshi1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                // src="images/icons8-github.gif" 
                src="images/icons8-github-250.png" alt="Github-Icon" 
                className="Socials"/>
            </a>
            </div>
            <div className="Codepen invert-color">
            <a
                href="https://codepen.io/mfunakoshi98/pens/public"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src="images/icons8-codepen-100.png" alt="Codepen-Icon" className="Socials" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
