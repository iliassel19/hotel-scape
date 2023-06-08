import React from "react";
import HeaderBookingForm from "./HeaderBookingForm";
const Header = () => {
  return (
    <header className="relative pl-20 py-24 col-start-1 col-end-9 row-start-2 row-end-3">
      <h1 className="font-Serif w-2/3 text-7xl text-green-very-dark leading-[1.1]">
        <span className="text-green-dark font-HandWritten text-9xl leading-[0]">
          Memorable
        </span>
        <br />
        Hotels for moments {""}
        <span className="text-green-dark font-HandWritten text-9xl leading-[0]">
          Rich
        </span>
        <br /> in emotions
      </h1>
      <p className="text-xl font-Serif text-[#585855] my-12">
        Book now and get the best prices
      </p>
      <HeaderBookingForm />
    </header>
  );
};

export default Header;
