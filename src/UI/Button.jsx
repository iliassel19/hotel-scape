import React from "react";

export const ButtonFilled = (props) => {
  return (
    <button
      className="bg-green-dark text-sm tracking-widest font-Sans-serif uppercase text-white px-9 h-[60px] relative transition-[background] hover:bg-green-very-dark"
      type={props.type ? props.type : "button"}
    >
      {props.text}
    </button>
  );
};

export const ButtonOutline = (props) => {
  return (
    <button
      className="text-sm tracking-widest border border-white font-Sans-serif uppercase text-white px-9 h-[50px] transition-all hover:bg-white hover:text-green-dark relative z-10"
      type={props.type ? props.type : "button"}
    >
      {props.text}
    </button>
  );
};
