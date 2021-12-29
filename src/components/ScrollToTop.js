import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import { debounce } from "lodash";
import React, { useEffect, useMemo } from "react";
import { animateScroll as scroll } from "react-scroll";
import PopperComp from "./PopperComp";

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
    opacity: "1",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      left: "92%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "85%",
      top: "88%",
      zIndex: "100",
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "80%",
      top: "88%",
      zIndex: "100",
      width: "60px",
      height: "60px",
    },
  },
  keyUpIcon: {
    display: "flex",
    color: "white",
    fontSize: "70pt",
    textAlign: "center",
    alignItems: "center",
    marginTop: "30px",
    maxHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "60pt",
      marginTop: "23px",
    },
  },
  hidden: {
    opacity: "0",
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
    <PopperComp>
      <Fab
        onClick={scrollToTopHandler}
        className={scrollPos >= 500 ? classes.scrollToTopBtn : classes.hidden}
        id="BackToTop-Popover"
      >
        <div className={classes.keyUpIcon}>^</div>
      </Fab>
    </PopperComp>
  );
};

export default ScrollToTop;
