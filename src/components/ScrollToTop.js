import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const ScrollToTop = () => {
  const useStyles = makeStyles((theme) => ({
    ScrollToTopBtn: {
      backgroundColor: "#ffe600",
      top: "88%",
      left: "93%",
      position: "fixed",
      zIndex: 20,
      width: "65px",
      height: "65px",
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
  }));

  const classes = useStyles();
  return (
    <Fab
      aria-label="ScrollToTop"
      onClick={() => scroll.scrollToTop()}
      className={classes.ScrollToTopBtn}
    >
      <span className={classes.KeyUpIcon}>^</span>
    </Fab>
  );
};

export default ScrollToTop;
