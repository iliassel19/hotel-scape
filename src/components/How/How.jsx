import React from "react";
import Container from "../UI/Container";
import HowStep from "./HowStep";

const howSteps = [
  {
    icon: "/Assets/Icons/SetupWalletIcon.svg",
    heading: "Setup your wallet",
    text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    icon: "/Assets/Icons/CreateCollectionIcon.svg",
    heading: "Create collection",
    text: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    icon: "/Assets/Icons/StartEarningIcon.svg",
    heading: "Start earning",
    text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];
const How = () => {
  return (
    <Container>
      <h2 className="text-h4 lg:text-h3 text-white capitalize font-work font-semibold mb-2">
        How it works
      </h2>
      <p className="text-base lg:text-[18px] capitalize text-white opacity-80">
        Find out how to get started
      </p>
      <div className="grid gap-6 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 md:mt-16 mt-10">
        {howSteps.map((step, i) => (
          <HowStep
            key={`${i} step`}
            icon={step.icon}
            text={step.text}
            heading={step.heading}
          />
        ))}
      </div>
    </Container>
  );
};

export default How;
