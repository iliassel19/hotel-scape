import React from "react";
import Button from "../UI/Button";
import Container from "../UI/Container";
const Auction = () => {
  return (
    <Container className="relative h-screen bg-auction bg-cover bg-no-repeat bg-center flex md:items-end">
      <div className="absolute top-0 left-0 w-full h-full from-cta to-transparent bg-gradient-to-t z-0"></div>
      <div className="flex flex-col md:flex-row w-full justify-center gap-12 md:items-end md:justify-between z-10">
        <div className="flex flex-col items-start gap-6">
          <div className="w-[140px] h-10 bg-bg flex items-center justify-center gap-2 rounded-full">
            <img
              src="/Assets/Images/Avatars/Avatar7.png"
              alt="Shroomie profil."
              className="w-6 h-6"
            />
            <h4 className="text-white font-work text-[14px]">Shroomie</h4>
          </div>
          <h2 className="text-white font-work text-[44px] leading-tight sm:text-h3 min-[900px]:text-[44px] font-semibold">
            Magic Mashrooms
          </h2>
          <Button
            filled={true}
            className="bg-white opacity-100 hidden md:flex md:w-[200px] group justify-center gap-2 rounded-[20px]">
            <img
              src="/Assets/Icons/Eye.svg"
              alt="Eye icon"
              className="w-6 h-6"
            />
            <p className="text-bg group-hover:text-white">See NFT</p>
          </Button>
        </div>
        <div className="bg-bg bg-opacity-40 backdrop-blur-md px-9 py-6 rounded-3xl min-[900px]:w-[380px] flex flex-col items-start gap-2 text-white font-space">
          <p className="text-base">Auction ends in:</p>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2 w-full">
            <h3 className="text-h3 min-[900px]:text-h2 font-semibold flex items-center justify-between">
              59<span>:</span>
            </h3>
            <h3 className="text-h3 min-[900px]:text-h2 font-semibold flex items-center justify-between">
              59<span>:</span>
            </h3>
            <h3 className="text-h3 min-[900px]:text-h2 font-semibold">59</h3>
            <p className="text-base">Hours</p>
            <p className="text-base">Minutes</p>
            <p className="text-base">Seconds</p>
          </div>
        </div>
        <Button
          filled={true}
          className="bg-white opacity-100 flex md:hidden justify-center gap-2 rounded-[20px] group">
          <img
            src="/Assets/Icons/Eye.svg"
            alt="Eye icon"
            className="w-6 h-6"
          />
          <p className="text-bg group-hover:text-white">See NFT</p>
        </Button>
      </div>
    </Container>
  );
};

export default Auction;
