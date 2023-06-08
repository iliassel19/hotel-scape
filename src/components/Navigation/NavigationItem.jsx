import React from "react";
import { Link } from "react-router-dom";
const NavigationItem = (props) => {
  return (
    <li
      className={`font-work font-semibold text-base text-white transition-colors ${props.className} hover:text-cta group`}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
};

export default NavigationItem;
