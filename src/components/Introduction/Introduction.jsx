import React from "react";

const Introduction = () => {
  return (
    <div className="row-start-3 row-end-4 col-span-11 grid grid-cols-2 border-b-[2px] border-grey-border">
      <div className="border-t-[2px] pl-20 pr-16 border-grey-border h-full flex items-center">
        <h2 className="text-green-very-dark font-Serif text-5xl leading-tight ">
          Here, local talents come together.
        </h2>
      </div>
      <div className="border-l-[2px] border-grey-border flex items-center justify-end pr-20 pl-12">
        <p className="text-base text-grey-basic font-Sans-serif text-right w-5/6 justify-self-end self-center leading-relaxed ">
          We let ourselves be{" "}
          <span className="font-medium text-green-very-dark">
            inspired by the rich history
          </span>{" "}
          as well <br /> as by contemporary artists of the city. For in the 21st
          century <br /> the city has so much more to offer than just medieval
          heritage.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
