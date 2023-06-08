import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationList = () => {
  return (
    <ul className="flex items-center gap-12">
      <NavigationItem text="our story" />
      <NavigationItem text="packages" />
      <NavigationItem text="contact" />
    </ul>
  );
};

export default NavigationList;
