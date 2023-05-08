import React from "react";
import AwardImg from "../../assets/award-image.jpg";
const Award = () => {
  return (
    <div className="relative pl-20 pr-12 pt-20 pb-24 border-r-[2px] border-b-[2px] border-grey-border col-start-1 col-end-7 flex flex-col gap-16">
      <img
        src={AwardImg}
        alt="Master bedroom from Scape Hotel"
        className="w-full h-full"
      />
      <h2 className="w-2/3 leading-tight text-6xl font-Serif text-green-very-dark">
        Award{" "}
        <span className="text-green-dark font-HandWritten text-8xl leading-[0]">
          Winning
        </span>{" "}
        style and comfort
      </h2>
      <h3 className="text-green-dark text-sm uppercase px-4 bg-background font-medium tracking-wider rotate-90 absolute right-0 top-28 translate-x-1/2">
        01 - Signature
      </h3>
    </div>
  );
};

export default Award;
