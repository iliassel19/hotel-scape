import React from "react";
import NavigationList from "./NavigationList";
import Logo from "../../assets/Logo.svg";
const Navigation = () => {
  return (
    <div className="col-start-1 col-end-6 row-start-1 row-end-2 px-20 flex items-center border-b-[2px] border-grey-border">
      <nav className="flex items-center justify-between w-full">
        <a href="#" className="text-2x font-Serif text-green-dark">
          <img src={Logo} alt="Scape Hotel logo" className="w-24" />
        </a>
        <NavigationList />
      </nav>
    </div>
  );
};

export default Navigation;
