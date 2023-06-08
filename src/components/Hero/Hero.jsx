import React from "react";
import Container from "../UI/Container";
import Card from "../UI/Card";
import Button from "../UI/Button";
import HeroStates from "./HeroStates";
import { motion } from "framer-motion";
import { heading, text, card } from "../../utils/motion";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-start md:flex-row md:items-center md:gap-16">
        <div className="">
          <h1 className="text-h3 leading-tight md:text-[48px] lg:text-[80px] text-white capitalize font-work font-regular tracking-tighter md:leading-[1.05] mb-6 font-medium">
            {Array.from("Discover digital art & collect NFTs").map(
              (letter, i) => (
                <motion.span
                  key={i}
                  variants={heading}
                  custom={i}
                  initial="hidden"
                  animate="show">
                  {letter}
                </motion.span>
              )
            )}
          </h1>
          <motion.p
            variants={text}
            initial="hidden"
            animate="show"
            custom={2}
            className="w-full text-base lg:text-h5 font-work text-white opacity-90 capitalize mb-6">
            NFT Market UI created with anima for figma. collect, but and sell
            art from more than 20k NFT artists.
          </motion.p>
          <Button
            filled={true}
            className="opacity-100 hidden md:flex rounded-[20px] justify-center gap-2">
            <img
              src="/Assets/Icons/RocketLaunch.svg"
              alt="Rocket icon"
              className="w-5 h-5"
            />
            <p className="xl:text-[18px]">Get started</p>
          </Button>

          <HeroStates className="hidden md:flex" />
        </div>

        <Card
          variants={card(8, 1, "tween")}
          animate="show">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 3,
              type: "tween",
            }}>
            <img
              src="/Assets/Images/Hero-img.png"
              alt="Digital painting of a samurai astronaut looking into sky."
              className="w-full h-3/4 object-cover"
            />
            <div className="py-4 pl-4">
              <h5 className="text-h5 text-white font-work font-semibold mb-1">
                Space Walking
              </h5>
              <div className="flex items-center gap-3">
                <img
                  src="/Assets/Images/Avatars/Avatar14.png"
                  alt="AnimaKid user profil"
                  className="w-6"
                />
                <p className="text-[14px] text-white font-work opacity-80">
                  AnimaKid
                </p>
              </div>
            </div>
          </motion.div>
        </Card>
        <Button
          filled={true}
          className="opacity-100 flex w-full mt-12 md:hidden rounded-[20px] justify-center gap-2">
          <img
            src="/Assets/Icons/RocketLaunch.svg"
            alt="Rocket icon"
            className="w-5 h-5"
          />
          <p className="xl:text-[18px]">Get started</p>
        </Button>

        <HeroStates className="flex w-full md:hidden" />
      </div>
    </Container>
  );
};

export default Hero;
