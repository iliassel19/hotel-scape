import React, { useState } from "react";
import Person1 from "../../assets/person-1.jpg";
import Person2 from "../../assets/person-2.jpg";
import Quote from "../../assets/quotes.png";
const Testamonials = () => {
  const [clicked, setIsClicked] = useState(false);

  const nextClickHandler = () => {
    setIsClicked(true);
  };
  const backClickHandler = () => {
    setIsClicked(false);
  };
  return (
    <section className="col-start-1 col-end-[-1] grid grid-cols-[repeat(14,1fr)] border-y-[2px] mb-32">
      <div className="col-start-1 col-end-9 relative border-r-[2px] border-grey-border py-12 pr-12 pl-20">
        <h4 className="text-sm uppercase text-green-dark bg-background font-Sans-serif font-medium tracking-wider px-6 absolute -top-2 left-20">
          Testamonials
        </h4>
        <div className="w-full h-screen overflow-hidden relative">
          <img
            src={Person1}
            className={`absolute top-0 w-full h-full object-cover object-top transition-all ${
              clicked ? "left-0 opacity-100" : "-left-full opacity-0"
            }`}
          />
          <img
            src={Person2}
            className={`absolute top-0 w-full h-full object-cover object-center transition-all ${
              !clicked ? "left-0 opacity-100" : "left-full opacity-0"
            }`}
          />
        </div>
      </div>
      <div className="col-start-9 col-end-[-1] pt-16 pl-12 pr-20 relative">
        <div className="w-full h-full relative">
          <img
            src={Quote}
            alt="Outline quotes"
            className="w-32 absolute left-0 -top-12 rotate-180 opacity-5 z-[-1]"
          />
          <div className="relative">
            <h2
              className={`font-Serif text-[36px] leading-tight text-green-very-dark mb-12 ${
                !clicked
                  ? "relative opacity-100"
                  : "absolute top-0 left-0 opacity-0"
              }`}
            >
              They are not the typical hotels you see out there. They have taken
              care of every last detail. They are very comfortable and the truth
              is that you are almost better than at home. We will comeback for
              sure!
            </h2>
            <h2
              className={`font-Serif text-[36px] leading-tight text-green-very-dark mb-12 ${
                clicked
                  ? "relative opacity-100"
                  : "absolute top-0 left-0 opacity-0"
              }`}
            >
              What you are promised is what you get! The moments that we got
              here are just incredible. I realy hope that I get the chance to
              relive these days in the Scape Hotel.
            </h2>
          </div>
          <div className="relative">
            <h3
              className={`font-Serif text-green-dark uppercase text-2xl pb-2 border-b border-grey-border w-[120px] ${
                !clicked
                  ? "relative opacity-100"
                  : "absolute top-0 left-0 opacity-0"
              }`}
            >
              Farah
            </h3>
            <h3
              className={`font-Serif text-green-dark uppercase text-2xl pb-2 border-b border-grey-border w-[120px] ${
                clicked
                  ? "relative opacity-100"
                  : "absolute top-0 left-0 opacity-0"
              }`}
            >
              Ilyass
            </h3>
          </div>
          <div className="relative">
            <h4
              className={`mt-3 text-sm uppercase font-Sans-serif text-green-dark font-medium tracking-widest ${
                !clicked
                  ? "relative opacity-100"
                  : "absolute top-0 left-0 opacity-0"
              }`}
            >
              May 2022
            </h4>
            <h4
              className={`mt-3 text-sm uppercase font-Sans-serif text-green-dark font-medium tracking-widest ${
                clicked
                  ? "relative opacity-100"
                  : "absolute top-0 left-0 opacity-0"
              }`}
            >
              December 2022
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-background px-8 absolute bottom-0 translate-y-1/2 left-0">
          <button
            className="border border-green-dark transition-colors grid place-content-center w-[52px] h-[52px] hover:bg-green-dark group"
            onClick={backClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 transition-colors text-green-dark group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-green-dark transition-colors grid place-content-center w-[52px] h-[52px] hover:bg-green-dark group"
            onClick={nextClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 transition-colors text-green-dark group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testamonials;
