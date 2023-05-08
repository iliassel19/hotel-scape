import React from "react";
import { ButtonFilled } from "./Button";
const FormContainer = (props) => {
  return (
    <form
      className={`flex items-center justify-between shadow-lg bg-white px-8 relative z-40 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
      <ButtonFilled type="submit" text={props.button} />
    </form>
  );
};

export default FormContainer;
