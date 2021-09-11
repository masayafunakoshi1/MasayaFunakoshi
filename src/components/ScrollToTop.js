import React, { useState, useEffect, useMemo } from "react";
import { animateScroll as scroll } from "react-scroll";
import { debounce } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  scrollToTopBtn: {
    backgroundColor: "#ffe600",
    top: "88%",
    left: "93%",
    position: "fixed",
    width: "65px",
    height: "65px",
    transition: "ease-in-out",
    transitionDuration: "0.3s",
    opacity: "100%",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      left: "92%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "78%",
      top: "88%",
      zIndex: "100",
      width: "50px",
      height: "50px",
    },
  },
  keyUpIcon: {
    display: "flex",
    color: "white",
    fontSize: "50pt",
    textAlign: "center",
    alignItems: "center",
    marginTop: "20px",
    maxHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40pt",
      marginTop: "13px",
    },
  },
  hidden: {
    opacity: "0%",
    pointerEvents: "none",
    top: "88%",
    left: "93%",
    position: "fixed",
    transition: "ease-out",
    transitionDuration: "0.3s",
  },
}));

const ScrollToTop = ({ scrollPos, setScrollPos }) => {
  const classes = useStyles();

  const scrollFunc = () => {
    setScrollPos(window.scrollY);
  };

  const debounceScroll = useMemo(() => debounce(scrollFunc, 300), []);

  useEffect(() => {
    window.addEventListener("scroll", debounceScroll);
  }, []);

  const scrollToTopHandler = () => {
    scroll.scrollToTop({ duration: 1000, smooth: "true" });
  };
  return (
    <Fab
      onClick={scrollToTopHandler}
      className={scrollPos >= 500 ? classes.scrollToTopBtn : classes.hidden}
      id="BackToTop-Popover"
    >
      <div className={classes.keyUpIcon}>^</div>
    </Fab>
  );
};

export default ScrollToTop;
