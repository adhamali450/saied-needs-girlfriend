import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "./Button";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import "./styling/Form.sass";

const firebaseConfig = {
  databaseURL: "https://saied-needs-girlfriend-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Form(props) {
  const [emailEditied, setEmailEditied] = useState(false);
  const [formData, setFormData] = useState({
    name: undefined,
    email: undefined,
    message: undefined,
  });

  const [canSubmit, setCanSubmit] = useState({
    legalAge: false,
    validName: false,
    validEmail: false,
    validMessage: false,
  });

  const nameChangeHandler = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });

    setCanSubmit({
      ...canSubmit,
      validName: validInput("name", e.target.value),
    });
  };

  const emailChangeHandler = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });

    setEmailEditied(true);

    setCanSubmit({
      ...canSubmit,
      validEmail: validInput("email", e.target.value),
    });
  };

  const messageChangeHandler = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });

    setCanSubmit({
      ...canSubmit,
      validMessage: validInput("message", e.target.value),
    });
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();

    set(ref(db, "users/" + formData.name), {
      username: formData.name,
      email: formData.email,
      message: formData.message,
      time: dateTimeNow(),
    });

    setFormData({ name: undefined, email: undefined, message: undefined });
    setCanSubmit({
      legelAge: false,
      validName: false,
      validEmail: false,
      validMessage: false,
    });
    setEmailEditied(false);

    props.onFormSubmitted();
  };

  return (
    <form id="form" onSubmit={onSumbitHandler}>
      <TextField
        className="text-field"
        variant="filled"
        size="small"
        label="Queen's Name"
        type="text"
        onChange={nameChangeHandler}
        value={formData.name || ""}
        error={!validInput("name", formData.name)}
        helperText={
          !validInput("name", formData.name) ? "Queen must have a name" : ""
        }
      />

      <TextField
        className="text-field"
        variant="filled"
        size="small"
        label="Queen's Email Address"
        type="email"
        onChange={emailChangeHandler}
        value={formData.email || ""}
        error={emailEditied && !validInput("email", formData.email)}
        helperText={
          emailEditied && !validInput("email", formData.email)
            ? "Incorrect email address"
            : ""
        }
      />

      <TextField
        className="text-area"
        variant="filled"
        size="small"
        rows="3"
        multiline
        label="Say hi"
        type="text"
        onChange={messageChangeHandler}
        value={formData.message || ""}
        error={!validInput("message", formData.message)}
        helperText={
          !validInput("message", formData.message)
            ? "Can't be shy around here"
            : ""
        }
      />

      <FormControlLabel
        className="checkbox"
        control={
          <Checkbox
            checked={canSubmit.legalAge}
            onChange={(e) =>
              setCanSubmit({ ...canSubmit, legalAge: e.target.checked })
            }
          />
        }
        label={
          <span className="checkbox-label">
            I'm above the age of{" "}
            <a
              target="_blank"
              href="https://www.law.cornell.edu/wex/age_of_majority"
            >
              legal majority
            </a>
          </span>
        }
      />

      <Button
        id="btn-submit"
        text="Book a date"
        disabled={
          !(
            canSubmit.legalAge &&
            canSubmit.validName &&
            canSubmit.validEmail &&
            canSubmit.validMessage
          )
        }
        type="submit"
      />
    </form>
  );
}

// util functions
const validInput = (inputClass, input) => {
  return {
    name: input != "",
    email: validEmail(input),
    message: input != "",
  }[inputClass];
};

const validEmail = (str) => {
  return str &&
    str.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    ? true
    : false;
};

const dateTimeNow = () => {
  const currentdate = new Date();
  let hours = currentdate.getHours(),
    suffix = hours >= 12 ? "PM" : "AM";
  hours = ((hours + 11) % 12) + 1;

  return (
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    hours +
    ":" +
    currentdate.getMinutes() +
    " " +
    suffix
  );
};

export default Form;
