import { React, useState, useEffect } from "react";
import NavigationList from "./NavigationList";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const Navigation = () => {
  let location = useLocation();

  const [openNav, isOpenNav] = useState(false);
  const mobileMenuHandler = () => {
    isOpenNav((prevState) => !prevState);
  };
  useEffect(() => {
    isOpenNav(false);
  }, [location]);
  return (
    <div className="py-8 px-6 max-w-[1340px] mx-auto xl:px-20 2xl:px-24 flex items-center justify-between h-[100px] min-[900px]:h-auto">
      <Link
        to={"/"}
        className="hover:scale-110">
        <motion.img
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          src="/Assets/Icons/Logo.svg"
          alt="Logo"
        />
      </Link>
      <NavigationList menuState={openNav} />

      <button
        className="z-40 w-9 h-9 relative overflow-hidden min-[900px]:hidden"
        onClick={mobileMenuHandler}>
        <span
          className={`block  h-[2px] bg-white absolute left-0 transition-all duration-200 delay-200 ${
            openNav ? "w-full top-1/2 rotate-[135deg]" : "top-2 w-3/4 rotate-0"
          }`}></span>
        <span
          className={`block w-full h-[2px] bg-white origin-left absolute top-1/2 transition-all duration-200 ${
            openNav ? "left-[100%] opacity-0" : "left-0 opacity-100 delay-300"
          }`}></span>
        <span
          className={`block  h-[2px] bg-white absolute left-0 transition-all duration-200 delay-200 ${
            openNav ? "w-full top-1/2 rotate-[-135deg]" : "top-7 w-3/4 rotate-0"
          }`}></span>
      </button>
    </div>
  );
};

export default Navigation;
