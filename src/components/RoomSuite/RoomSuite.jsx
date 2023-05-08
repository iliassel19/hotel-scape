import React, { useState } from "react";
import { ButtonFilled } from "../../UI/Button";
import BathroomImage from "../../assets/bathroom.jpg";
import GuestRoomImage from "../../assets/guest-room.jpg";

const RoomSuite = () => {
  const [clicked, setIsClicked] = useState(false);

  const nextClickHandler = () => {
    setIsClicked(true);
  };
  const backClickHandler = () => {
    setIsClicked(false);
  };
  return (
    <div className="border-b-[2px] border-grey-border pt-20 pl-12 col-start-7 col-end-[-1]">
      <div className="flex items-center justify-between pr-20 mb-16">
        <h2 className="text-2xl font-Serif text-gray-600 uppercase leading-snug">
          Room <br />{" "}
          <span className="font-HandWritten text-5xl leading-[0]">&</span> suite
        </h2>
        <div className="flex items-center gap-4">
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
      <div className="flex items-center gap-8 h-[600px] overflow-hidden mb-16">
        <img
          src={BathroomImage}
          className={`w-[350px] h-full transition-transform ${
            clicked ? "-translate-x-full" : "translate-x-0"
          }`}
        />
        <img
          src={GuestRoomImage}
          className={`w-[350px] h-full transition-transform ${
            clicked ? "-translate-x-full" : "translate-x-0"
          }`}
        />
      </div>
      <div className="mb-8 flex flex-col gap-6 pr-20">
        <p className="text-base text-grey-basic font-Sans-serif">
          Sleep well and look good while doing it. At Hotel Scape our unique
          style blends classic medieval without ever sacrificing comfort. Here
          400-thread count sheets and rainfall showers come standard.
        </p>
        <p className="text-base text-grey-basic font-Sans-serif">
          Close enough that you can walk, far enough away that you can sleep.
        </p>
      </div>
      <ButtonFilled text="Discover room" />
    </div>
  );
};

export default RoomSuite;
