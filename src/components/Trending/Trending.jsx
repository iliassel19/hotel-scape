import React from "react";
import Container from "../UI/Container";
import TrendingCollection from "./TrendingCollection";
import { heading, text } from "../../utils/motion";
import { motion } from "framer-motion";
import { card } from "../../utils/motion";
const Trending = () => {
  return (
    <Container>
      <motion.h2 className="text-h4 lg:text-h3 text-white font-work font-semibold">
        {Array.from("Trending Collection").map((letter, i) => (
          <motion.span
            variants={heading}
            initial="hidden"
            whileInView="show"
            custom={i}
            key={i}
            viewport={{
              once: true,
              amount: 0.25,
            }}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>
      <motion.p
        variants={text}
        initial="hidden"
        whileInView="show"
        custom={0.1}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="text-base lg:text-[18px] capitalize text-white opacity-80">
        Checkout our weekly updated trending collection
      </motion.p>
      <div className="flex items-center gap-4 lg:gap-6 lg:mt-16 mt-12 justify-center md:gap-8">
        <TrendingCollection
          variants={card(1, 0.5)}
          primaryImg="/Assets/Images/Primary-Animal-img.png"
          secondaryImg="/Assets/Images/Secondary-Animal-img.png"
          tertiaryImg="/Assets/Images/Tertiary-Animal-img.png"
          alt="animal."
        />
        <TrendingCollection
          variants={card(2, 0.5)}
          primaryImg="/Assets/Images/Primary-Mushroom-img.png"
          secondaryImg="/Assets/Images/Secondary-Mushroom-img.png"
          tertiaryImg="/Assets/Images/Tertiary-Mushroom-img.png"
          alt="mushroom."
          className="hidden md:block"
        />
        <TrendingCollection
          variants={card(3, 0.5)}
          primaryImg="/Assets/Images/Primary-Robot-img.png"
          secondaryImg="/Assets/Images/Secondary-Robot-img.png"
          tertiaryImg="/Assets/Images/Tertiary-Robot-img.png"
          alt="robot."
          className="hidden lg:block"
        />
      </div>
    </Container>
  );
};

export default Trending;
