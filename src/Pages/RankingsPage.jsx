import React, { useState } from "react";
import { creators } from "../data/data";
import RankingCard from "./RankingCard";
import Container from "../Components/UI/Container";
const Rankings = () => {
  const [isActive, setIsActive] = useState("today");
  return (
    <main>
      <Container>
        <h1 className="text-h4 md:text-h3 xl:text-h2 font-semibold tracking-[0.015em] mb-4 text-white font-work leading-none">
          Top Creators
        </h1>
        <p className="md:text-base xl:text-[20px] capitalize opacity-80 text-white leading-snug font-work">
          Welcome! Enter your details and start creating, collecting and selling
          NFTs
        </p>

        <div className="mt-16">
          <nav className="grid grid-cols-4">
            <button
              className={`font-work text-[20px] font-semibold pb-2 ${
                isActive == "today"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("today");
              }}>
              Today
            </button>
            <button
              className={`font-work text-[20px] font-semibold pb-2 ${
                isActive == "week"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("week");
              }}>
              This Week
            </button>
            <button
              className={`font-work text-[20px] font-semibold pb-2 ${
                isActive == "month"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("month");
              }}>
              This Month
            </button>
            <button
              className={`font-work text-[20px] font-semibold pb-2 ${
                isActive == "all"
                  ? "border-white text-white border-b"
                  : "border-none text-captionc"
              }`}
              onClick={() => {
                setIsActive("all");
              }}>
              All Time
            </button>
          </nav>
          <div className="mt-12">
            <div className="border-[2px] border-bgSec rounded-full px-6 py-2 grid grid-cols-[44px_2.5fr_repeat(3,1fr)] items-center col-start-1 col-end-[-1]">
              <span className="text-captionc">#</span>
              <p className="text-[14px] font-space text-captionc">Artist</p>
              <p className="text-[14px] font-space text-captionc">Change</p>
              <p className="text-[14px] font-space text-captionc">NFTs Sold</p>
              <p className="text-[14px] font-space text-captionc">Volume</p>
            </div>

            {creators.map((creator) => (
              <RankingCard
                key={creator.name}
                id={creator.id}
                profil={creator.profil}
                user={creator.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Rankings;
