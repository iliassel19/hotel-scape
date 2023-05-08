import React from "react";
import { ButtonOutline } from "../../UI/Button";
const Facilities = () => {
  return (
    <section
      className=" col-start-1 col-end-[-1] my-24 h-[100vh] bg-[url('./assets/facilities.jpg')] bg-cover bg-center flex flex-col items-center justify-center 
    "
    >
      <h3 className="text-base tracking-[2px] uppercase font-Sans-serif text-white mb-8">
        Spa suite at hotel scape
      </h3>
      <h2 className="font-Serif font-normal text-7xl text-white mb-12">
        Beauty <span className="text-8xl font-HandWritten leading-[0]">&</span>{" "}
        Wellness
      </h2>
      <p className="font-Sans-serif text-lg text-white w-1/2 text-center mb-16">
        Advocating an immersive enriching journey. The Hotel Scape SPA Suite
        offer moments of relaxed pleasure and ssensory revitalization.
      </p>
      <ButtonOutline text="Read more" />
    </section>
  );
};

export default Facilities;
