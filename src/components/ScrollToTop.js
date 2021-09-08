import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const ScrollToTop = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const scrollFunc = () => {
    if (scrollPos <= 500) {
      setScrollPos(window.scrollY);
    } else {
      setScrollPos(500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);

  const useStyles = makeStyles((theme) => ({
    ScrollToTopBtn: {
      backgroundColor: "#ffe600",
      top: "88%",
      left: "93%",
      position: "fixed",
      zIndex: 20,
      width: "65px",
      height: "65px",
      transition: "ease-in",
      transitionDuration: "0.2s",
      opacity: "100%",
    },
    KeyUpIcon: {
      display: "flex",
      color: "white",
      fontSize: "50pt",
      textAlign: "center",
      alignItems: "center",
      marginTop: "20px",
      maxHeight: "40px",
    },
    hidden: {
      opacity: "0%",
    },
  }));

  const classes = useStyles();
  return (
    <Fab
      aria-label="ScrollToTop"
      onClick={() => scroll.scrollToTop({ duration: 1000, smooth: "true" })}
      className={scrollPos >= 500 ? classes.ScrollToTopBtn : classes.hidden}
      id="BackToTop-Popover"
    >
      <span className={classes.KeyUpIcon}>^</span>
    </Fab>
  );
};

export default ScrollToTop;
