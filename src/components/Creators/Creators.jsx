import React from "react";
import Container from "../UI/Container";
import Button from "../UI/Button";
import CreatorCard from "./CreatorCard";
import { heading, text, button } from "../../utils/motion";
import { motion } from "framer-motion";
import { creators } from "../../data/data";
const Creators = () => {
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 xl:grid-cols-4 md:gap-6">
        <div className="lg:col-span-2 xl:col-span-3">
          <h2 className="text-h4 lg:text-h3 text-white font-work font-semibold">
            {Array.from("Top Creators").map((letter, i) => (
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
            Checkout Top rated creators on the NFT marketplace
          </motion.p>
        </div>
        <motion.div
          variants={button}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="order-[100] min-[705px]:order-[unset]">
          <Button
            filled={false}
            className="rounded-[20px] justify-center gap-2">
            <img
              src="/Assets/Icons/RocketLaunch1.svg"
              alt="Rocket launch icon."
              className="w-5 h-5"
            />
            <p>View rankings</p>
          </Button>
        </motion.div>
        {creators.slice(0, 12).map((user, i) => (
          <CreatorCard
            key={user.id}
            profil={user.profil}
            id={i + 1}
            user={user.user}
          />
        ))}
      </div>
    </Container>
  );
};

export default Creators;
