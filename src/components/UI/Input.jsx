import React from "react";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      className={`outline-none border-none bg-white rounded-full h-[60px] min-[900px]:rounded-none min-[900px]:bg-[transparent] w-full pl-6 min-[900px]:pl-4 placeholder:text-bgSec placeholder:opacity-80 font-work placeholder:font-semibold text-bg font-semibold ${
        props.className ? props.className : ""
      }`}
      type={props.type}
      required
      id={props.id}
      name={props.id}
    />
  );
};

export default Input;
