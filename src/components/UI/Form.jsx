import React from "react";

const Form = ({ children, className }) => {
  return <form className={`${className} w-full`}>{children}</form>;
};

export default Form;
