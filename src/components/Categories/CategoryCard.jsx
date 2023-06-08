import React from "react";
import Card from "../UI/Card";
import { creator } from "../../utils/motion";
const CategoryCard = (props) => {
  return (
    <Card
      key={props.id}
      variants={creator}
      whileInView="show">
      <div className="w-full relative shadow-lg">
        <img
          src={props.img}
          alt={`${props.category} NFT`}
          className="h-full w-full object-cover blur-sm"
        />
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
          <img
            src={props.icon}
            alt={`${props.category} icon`}
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-[18px] text-white font-work capitalize">
          {props.category}
        </h3>
      </div>
    </Card>
  );
};

export default CategoryCard;
