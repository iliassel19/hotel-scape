import React from "react";
import Card from "../UI/Card";
const HowStep = (props) => {
  return (
    <Card className="cursor-pointer transition-transform hover:md:-translate-y-6">
      <div className="w-full h-full px-4 lg:px-6 py-8 flex md:flex-col items-center gap-6">
        <img
          src={props.icon}
          alt={`${props.heading} icon`}
          className="w-1/3 md:w-auto md:h-auto"
        />
        <div className="flex flex-col md:items-center gap-2 md:gap-4 font-work">
          <h4 className="text-[20px] font-semibold lg:text-h5 text-white capitalize">
            {props.heading}
          </h4>
          <p className="text-white text-[14px] sm:text-base md:text-center opacity-70">
            {props.text}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default HowStep;
