import React from "react";
import RestaurantImg from "../../assets/restaurant.jpg";
import { ButtonFilled } from "../../UI/Button";
const Restaurant = () => {
  return (
    <div className="col-start-1 col-end-[-1] row-start-4 row-end-5 px-20 py-24 flex flex-col items-center border-b-[2px] border-grey-border">
      <img
        src={RestaurantImg}
        alt="Scape Hotel restaurant"
        className="w-full h-full"
      />
      <h2 className="text-green-very-dark font-Serif text-4xl w-3/4 leading-tight text-center mt-16 mb-10">
        The best gateway you can dream of Culture, Nature, Beaches and
        Gastronomy. Enjoy your vacation with your family or partner in a fishing
        village with a medieval past.
      </h2>
      <ButtonFilled text="Know more" />
    </div>
  );
};

export default Restaurant;
