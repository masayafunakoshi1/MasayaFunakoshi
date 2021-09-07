import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Popper, Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: "black",
    fontSize: "12pt",
    backgroundColor: "white",
    height: "auto",
    textAlign: "center",
    lineHeight: "30px",
    padding: "5px",
  },
}));

const PopperComp = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElId, setAnchorElId] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleHover = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setAnchorElId(anchorEl ? null : event.currentTarget.children[0].id);
  };

  useEffect(() => {
    console.log(anchorEl);
    console.log(anchorElId);
  }, [anchorEl, anchorElId]);

  let popoverText;

  switch (anchorElId) {
    case null:
      popoverText = "The content of the Popper.";
      break;
    case "HomePage-Popover-Name":
      popoverText = "🔊 Click to hear pronounciation";
      break;
    case "HomePage-Popover-FrontEnd":
      popoverText = "Click me!";
      break;
    case "ProjectGif-Popover":
      popoverText = "Hover to watch Gif. Click for more info";
      break;
    case "ProjectGif-Popover-UnderDevelopment":
      popoverText = "🛠 Currently under development ⚒";
      break;
  }

  return (
    <>
      <div onMouseEnter={handleHover} onMouseLeave={() => setAnchorEl(null)}>
        {props.children}
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="top"
        transition
      >
        {/* <div className={classes.paper}>Click to hear pronounciation.</div> */}
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={400}>
            <div className={classes.paper}>{popoverText}</div>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default PopperComp;
