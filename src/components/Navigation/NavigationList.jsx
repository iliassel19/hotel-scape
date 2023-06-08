import React from "react";
import NavigationItem from "./NavigationItem";
import UserIcon from "../Icons/UserIcon";
import { Link } from "react-router-dom";

const NavigationList = (props) => {
  return (
    <nav
      className={`z-20 absolute left-0 w-full h-[340px] bg-bgSec min-[900px]:bg-bg min-[900px]:h-auto min-[900px]:relative min-[900px]:w-auto transition-all duration-500 ${
        !props.menuState ? "top-[-100%]" : "top-0"
      }`}>
      <ul className="flex flex-col items-start justify-center gap-6 absolute bottom-12 left-8 min-[900px]:flex-row min-[900px]:items-center min-[900px]:relative min-[900px]:gap-8 min-[900px]:h-full min-[900px]:bottom-0 min-[900px]:left-0">
        <NavigationItem to="/marketplace">Marketplace</NavigationItem>
        <NavigationItem to="/rankings">Ranking</NavigationItem>
        <NavigationItem to="/connect-wallet">Connect a wallet</NavigationItem>

        <Link
          to={"/signin"}
          className=" text-white flex items-center justify-center gap-2 px-8 rounded-[20px] h-[60px] font-work text-base font-semibold transition-all capitalize bg-cta hover:bg-cta-h">
          <UserIcon
            color="#fff"
            className="w-6 h-6"
          />
          <p>Sign up</p>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationList;
