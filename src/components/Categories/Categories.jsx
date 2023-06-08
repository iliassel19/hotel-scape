import React from "react";
import Container from "../UI/Container";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import { heading } from "../../utils/motion";
const Categories = () => {
  const categories = [
    {
      id: 1,
      category: "art",
      icon: "/Assets/Icons/PaintBrush.svg",
      img: "/Assets/Images/Art-img.png",
    },
    {
      id: 2,
      category: "collectibles",
      icon: "/Assets/Icons/Swatches.svg",
      img: "/Assets/Images/Collectibles-img.png",
    },
    {
      id: 3,
      category: "music",
      icon: "/Assets/Icons/MusicNotes.svg",
      img: "/Assets/Images/Music-img.png",
    },
    {
      id: 4,
      category: "photography",
      icon: "/Assets/Icons/Camera.svg",
      img: "/Assets/Images/Photography-img.png",
    },
    {
      id: 5,
      category: "video",
      icon: "/Assets/Icons/VideoCamera.svg",
      img: "/Assets/Images/Video-img.png",
    },
    {
      id: 6,
      category: "utility",
      icon: "/Assets/Icons/MagicWand.svg",
      img: "/Assets/Images/Utility-img.png",
    },
    {
      id: 7,
      category: "sport",
      icon: "/Assets/Icons/Basketball.svg",
      img: "/Assets/Images/Sport-img.png",
    },
    {
      id: 8,
      category: "virtual worlds",
      icon: "/Assets/Icons/Planet.svg",
      img: "/Assets/Images/VirtualWorlds-img.png",
    },
  ];

  return (
    <Container>
      <h2 className="text-h4 lg:text-h3 text-white font-work font-semibold mb-6">
        {Array.from("Browse Categories").map((letter, i) => (
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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] min-[900px]:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            img={category.img}
            icon={category.icon}
            category={category.category}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
