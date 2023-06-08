import React from "react";
import { motion } from "framer-motion";
const TrendingCollection = (props) => {
  return (
    <motion.div
      variants={props.variants}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.2 }}
      className={`${props?.className ? props.className : ""}`}>
      <img
        src={props.primaryImg}
        alt={`NFT artwork of ${props.alt}`}
        className="rounded-[20px]"
      />
      <div className="flex items-center justify-between mt-4">
        <img
          src={props.secondaryImg}
          alt={`NFT artwork of ${props.alt}`}
          className="rounded-[20px]"
        />
        <img
          src={props.tertiaryImg}
          alt={`NFT artwork of ${props.alt}`}
          className="rounded-[20px]"
        />
        <button className="bg-cta rounded-[20px] h-[100px] w-[100px] grid place-content-center font-space font-medium text-h5 text-white">
          1025+
        </button>
      </div>
    </motion.div>
  );
};

export default TrendingCollection;
