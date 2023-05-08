import React from "react";

const NavigationItem = (props) => {
  return (
    <li className="text-base font-Sans-serif capitalize relative text-green-very-dark hover:text-green-dark after:w-0 after:h-[1px] after:left-0 after:bottom-0 after:bg-green-dark after:origin-left after:absolute after:transition-[width] hover:after:w-full">
      <a href="/">{props.text}</a>
    </li>
  );
};

export default NavigationItem;
