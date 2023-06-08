import React from "react";

const Button = (props) => {
  return (
    <button
      className={`w-full text-white flex items-center px-8 h-[64px] font-work text-base font-semibold transition-all capitalize focus:outline-none ${
        props?.className ? props.className : ""
      } ${
        props.filled
          ? "bg-cta hover:bg-cta-h"
          : "border-[2px] border-cta opacity-100 hover:bg-bgSec"
      }`}
      type={props.type ? props.type : "button"}>
      {props.children}
    </button>
  );
};

export default Button;
