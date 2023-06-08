import React from "react";
import Card from "../UI/Card";

import { creator } from "../../utils/motion";
const CreatorCard = (props) => {
  return (
    <Card
      className="group transition-colors hover:bg-cta"
      id={props.id}
      variants={creator}
      whileInView="show">
      <div className="w-full h-full flex flex-row gap-4 xl:flex-col items-center px-6 py-4 relative cursor-pointer">
        <p
          className="bg-bg font-space text-captionc text-caption w-5 h-5 rounded-full grid place-content-center absolute top-6 left-5 
          lg:left-4 transition-colors group-hover:bg-cta-h group-hover:text-white">
          {props.id}
        </p>
        <img
          src={props.profil}
          alt={`${props.user} profil.`}
          className="w-14 h-14 lg:w-24 lg:h-24"
        />
        <div className="xl:text-center">
          <h4 className="text-[18px] text-white font-work mt-3 mb-2">
            {props.user}
          </h4>
          <p className="text-captionc font-work text-[14px]">
            Total sales:{" "}
            <span className="text-white font-space">34.53 ETH</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CreatorCard;
