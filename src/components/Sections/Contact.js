import React, { useState } from "react";

import Form from "../Form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "../Button";
import Seperator from "../Seperator";

import iconTwitter from "../../assets/icon-twitter.svg";
import iconWhatsapp from "../../assets/icon-whatsapp.svg";
import iconMessenger from "../../assets/icon-messenger.svg";

import "../styling/Contact.sass";

function About() {
  const [showAlert, setShowAlert] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  const facebook = "https://www.facebook.com/sade.sade.908",
    twitter = "https://twitter.com/so3da2001",
    whatsapp = "https://wa.link/hb2cvi";

  return (
    <section className="contact container" id="contact">
      <header>
        <h2>Get started</h2>
        <span>
          Prepare for your fairy tail love story. Don't raise expectations.
        </span>
      </header>

      <div className="casual contact-mean">
        <Seperator text="Casual queen" />
        <div className="social-media">
          <Button
            text="Messenger"
            icon={iconMessenger}
            varient="contact-btn"
            onClick={() => openUrl(facebook)}
          />
          <Button
            text="Whatsapp"
            icon={iconWhatsapp}
            varient="contact-btn"
            onClick={() => openUrl(whatsapp)}
          />
          <Button
            text="Twitter"
            icon={iconTwitter}
            varient="contact-btn"
            onClick={() => openUrl(twitter)}
          />
        </div>
      </div>

      <div className="formal contact-mean">
        <Seperator text="Formal queen" />
        <Form onFormSubmitted={() => setShowAlert(true)} />
      </div>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          className="alert"
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleAlertClose}
        >
          <AlertTitle className="title">Message sent successfully</AlertTitle>
          Saied will contact you shortly — <strong>Dress up</strong>
        </Alert>
      </Snackbar>
    </section>
  );
}

const openUrl = (url) => {
  window.open(url, "_blank").focus();
};

export default About;
