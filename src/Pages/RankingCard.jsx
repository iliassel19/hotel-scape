import React from "react";
import { Link } from "react-router-dom";
const RankingCard = (props) => {
  return (
    <Link
      to={`/rankings/${props.id}`}
      className="col-start-1 col-end-[-1] block mt-4">
      <div className=" grid grid-cols-[44px_2.5fr_repeat(3,1fr)] items-center rounded-3xl bg-bgSec py-3 px-6">
        <div className="w-6 h-6 grid place-content-center bg-bg rounded-full">
          <p className="text-[14px] text-captionc font-space">{props.id}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={props.profil}
            className="w-12 h-12"
          />
          <h2 className="text-[20px] ml-2 text-white font-work">
            {props.user}
          </h2>
        </div>
        <p className="text-[#00aa00] font-space text-[14px]">+1.41%</p>
        <p className="font-space text-white text-[14px]">602</p>
        <h3 className="font-space text-white text-[14px]">12.4 ETH</h3>
      </div>
    </Link>
  );
};

export default RankingCard;
