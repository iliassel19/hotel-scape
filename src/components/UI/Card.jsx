import React from "react";
import { animate, motion } from "framer-motion";
const Card = (props) => {
  return (
    <motion.div
      initial="hidden"
      variants={props.variants}
      animate={props?.animate ? props.animate : ""}
      whileInView={props?.whileInView ? props.whileInView : ""}
      custom={props.custom}
      viewport={{ once: true, amount: 0.4 }}
      className={`bg-bgSec overflow-hidden rounded-[20px] w-full flex flex-col ${
        props?.className ? props.className : ""
      }`}
      key={props?.id ? props.id : ""}>
      {props.children}
    </motion.div>
  );
};

export default Card;
