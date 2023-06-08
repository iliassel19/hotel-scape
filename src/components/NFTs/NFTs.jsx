import React from "react";
import Button from "../UI/Button";
import Container from "../UI/Container";
import NFTCard from "./NFTCard";
import { motion } from "framer-motion";
import { heading, text, button } from "../../utils/motion";
const NFTData = [
  {
    title: "Distant Galaxy",
    img: "/Assets/Images/DistantGalaxy-img.png",
    profil: "/Assets/Images/Avatars/Avatar16.png",
    name: "MoonDancer",
    className: "",
  },
  {
    title: "Life On Edena",
    img: "/Assets/Images/LifeEdena-img.png",
    profil: "/Assets/Images/Avatars/Avatar10.png",
    name: "NebulaKid",
    className: "",
  },
  {
    title: "AstroFiction",
    img: "/Assets/Images/Astrofiction-img.png",
    profil: "/Assets/Images/Avatars/Avatar15.png",
    name: "Spaceone",
    className: "sm:hidden min-[900px]:flex",
  },
];
const NFTs = () => {
  return (
    <Container>
      <div className="grid sm:grid-cols-2 min-[900px]:grid-cols-3 gap-8">
        <div className="min-[900px]:col-span-2">
          <h2 className="text-h4 lg:text-h3 text-white font-work font-semibold mb-2">
            {Array.from(" Discover More NFTs").map((letter, i) => (
              <motion.span
                variants={heading}
                custom={i}
                key={i}
                initial="hidden"
                viewport={{ once: true, amount: 0.2 }}
                whileInView="show">
                {letter}
              </motion.span>
            ))}
          </h2>

          <motion.p
            variants={text}
            custom={0.4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-base lg:text-[18px] capitalize text-white opacity-80">
            Explore new trending NFTs
          </motion.p>
        </div>
        <motion.div
          variants={button}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
          <Button
            filled={false}
            className="order-10 sm:order-[unset] md:w-[220px] sm:justify-self-end justify-center rounded-[20px] gap-2">
            <img
              src="/Assets/Icons/Eye.svg"
              alt="Eye icon"
              className="w-6 h-6"
            />
            <p>See all</p>
          </Button>
        </motion.div>
        {NFTData.map((NFT, i) => (
          <NFTCard
            key={`${i + 2} nft`}
            i={i}
            title={NFT.title}
            img={NFT.img}
            profil={NFT.profil}
            name={NFT.name}
            className={NFT.className}
          />
        ))}
      </div>
    </Container>
  );
};

export default NFTs;
