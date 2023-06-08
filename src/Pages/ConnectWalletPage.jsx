import React from "react";
import Button from "../Components/UI/Button";

const CreateAccount = () => {
  return (
    <main className="md:h-screen lg:h-auto grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <img
          src="/Assets/Images/ConnectWallet-img.png"
          className="w-full h-full hidden md:block"
        />
        <img
          src="/Assets/Images/ConnectWallet-Mobile.png"
          className="w-full h-full block md:hidden"
        />
      </div>
      <div className="p-8 lg:px-12 xl:px-20 flex flex-col justify-center md:py-0">
        <h1 className="text-h4 md:text-h3 xl:text-h2 font-semibold tracking-[0.015em] mb-6 text-white font-work leading-none">
          Connect Wallet
        </h1>
        <p className="md:text-base xl:text-[22px] capitalize opacity-80 text-white leading-snug font-work mb-12">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>

        <div className="w-full lg:w-3/4 xl:w-[60%]">
          <Button
            filled={false}
            className="bg-bgSec rounded-[20px] gap-4 mb-4">
            <img
              className="w-9 h-9"
              src="./Assets/Icons/Metamask.svg"
            />
            <p className="text-[18px]">Metamask</p>
          </Button>
          <Button
            filled={false}
            className="bg-bgSec rounded-[20px] gap-4 mb-4">
            <img
              className="w-9 h-9"
              src="./Assets/Icons/Coinbase.svg"
            />
            <p className="text-[18px]">Coinbase</p>
          </Button>
          <Button
            filled={false}
            className="bg-bgSec rounded-[20px] gap-4">
            <img
              className="w-9 h-9"
              src="./Assets/Icons/WalletConnect.svg"
            />
            <p className="text-[18px]">Wallet Connect</p>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CreateAccount;
