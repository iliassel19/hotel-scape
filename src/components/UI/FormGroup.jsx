import React from "react";

const FormGroup = ({ children, className }) => {
  return (
    <div
      className={`w-auto flex min-[900px]:flex-row min-[900px]:bg-white ${
        className ? className : ""
      }`}>
      {children}
    </div>
  );
};

export default FormGroup;
