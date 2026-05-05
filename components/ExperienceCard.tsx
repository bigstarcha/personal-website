"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/utils/experiences";
import TagSection from "./TagSection";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function ExperienceCard({
  title,
  company,
  yearRange,
  description,
  tags,
}: Experience) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="w-full lg:w-1/2 xl:w-1/2 flex flex-col px-5 py-4 border-2 rounded-xl shadow-lg mb-4 lg:mb-0 xl:mb-0"
    >
      <h1 className="text-3xl mt-4 mb-2 font-bold text-center">{title}</h1>
      <h2 className="text-2xl font-semibold text-center mb-1">{company}</h2>
      <h2 className="text-xl text-center mb-4">{yearRange}</h2>
      <TagSection tags={tags} />
      {description && description.length > 0 && (
        <ul className="list-disc ml-5 space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

export default ExperienceCard;
