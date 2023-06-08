import React from "react";
import { motion } from "framer-motion";
const HeroStates = (props) => {
  return (
    <div className={`${props.className} items-center justify-between mt-8`}>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          delay: 0.2,
        }}
        className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">240k+</h5>
        <p className="text-white text-[20px] font-work">Total Sale</p>
      </motion.div>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.5,
        }}
        transition={{
          delay: 0.3,
        }}
        className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">100k+</h5>
        <p className="text-white text-[20px] font-work">Auctions</p>
      </motion.div>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.4,
        }}
        transition={{
          delay: 0.5,
        }}
        className="flex-[0.5] flex flex-col items-start ">
        <h5 className="text-h4 font-semibold font-space text-white">240k+</h5>
        <p className="text-white text-[20px] font-work">Artists</p>
      </motion.div>
    </div>
  );
};

export default HeroStates;
