import React, { useState } from "react";
import FadeInSections from "../../components/FadeInSections";
import "./Contact.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from 'emailjs-com';

const ContactTexfields = () => {
  const [contactData, setContactData] = useState({
    email: "",
    fullName: "",
    message: "",
    subject: "",
  });
  const [validation, setValidation] = useState(true);

  const validationChecker = () => {
    if (
      contactData.email !== "" &&
      contactData.fullName !== "" &&
      contactData.message !== "" &&
      contactData.subject !== ""
    ) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  const handleSubmit = () => {
    sendEmail();
    resetForm();
    setValidation(true);
  };

  const sendEmail = () => {
    let templateParams = {
      from_name: `${contactData.fullName} - ${contactData.email}`,
      to_name: "masayafunakoshi1@gmail.com",
      subject: contactData.subject,
      message: contactData.message,
    };

    emailjs
      .send(
        "MasayaFunakoshi_Gmail",
        "template_sy50nvw",
        templateParams,
        "user_ph9ZjY5dtwpN9mMnjDOuv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    setContactData({
      email: "",
      fullName: "",
      message: "",
      subject: "",
    });
  };

  //Styles
  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "white",
    },
    smallTextfield: {
      background: "#FAFAFA",
      width: "35ch",
      marginBottom: "30px",
      colorSecondary: "white",
      [theme.breakpoints.down("md")]: {
        width: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
      },
    },
    bigTextfield: {
      background: "#FAFAFA",
      width: "35ch",
      marginBottom: "10px",
      [theme.breakpoints.down("md")]: {
        width: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%",
      },
    },
    submitBtn: {
      left: "24%",
      filter: "invert(100%) ",
      [theme.breakpoints.down("xs")]: {
        marginRight: "12%",
      },
    },
    typography: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return (
    <div className="ContactPage-Form" onChange={validationChecker}>
      <form noValidate autoComplete="off" className={classes.root}>
        <FadeInSections>
          <TextField
            className={classes.smallTextfield}
            type="text"
            label="Full-Name"
            variant="filled"
            value={contactData.fullName}
            onChange={(e) => {
              const val = e.target.value;
              setContactData((prevState) => {
                return { ...prevState, fullName: val };
              });
            }}
          />
        </FadeInSections>
        <div>
          <FadeInSections>
            <TextField
              className={classes.smallTextfield}
              type="text"
              label="Email"
              variant="filled"
              value={contactData.email}
              onChange={(e) => {
                const val = e.target.value;
                setContactData((prevState) => {
                  return { ...prevState, email: val };
                });
              }}
            />
          </FadeInSections>
        </div>
        <div>
          <FadeInSections>
            <TextField
              className={classes.smallTextfield}
              type="text"
              label="Subject"
              variant="filled"
              value={contactData.subject}
              onChange={(e) => {
                const val = e.target.value;
                setContactData((prevState) => {
                  return { ...prevState, subject: val };
                });
              }}
            />
          </FadeInSections>
        </div>
        <FadeInSections>
          <TextField
            className={classes.bigTextfield}
            type="text"
            value={contactData.message}
            onChange={(e) => {
              const val = e.target.value;
              setContactData((prevState) => {
                return { ...prevState, message: val };
              });
            }}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={10}
            variant="filled"
          />
        </FadeInSections>
        <div>
          <Button
            className={classes.submitBtn}
            disabled={validation}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            {" "}
            Submit{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactTexfields;
