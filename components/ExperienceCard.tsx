"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/utils/experiences";

function ExperienceCard({
  company,
  companyColor,
  title,
  yearRange,
  description,
}: Experience) {
  return (
    <motion.div
      className="w-full flex flex-col py-4 mb-4 border-0 border-b border-solid"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-row justify-between">
        <div className="mb-4">
          <h1 className={`text-${companyColor} text-3xl font-bold`}>
            {company}
          </h1>
          <h2 className="text-lg">{title}</h2>
        </div>
        <h2 className="text-xl italic">{yearRange}</h2>
      </div>
      {description.map((point, index) => (
        <p key={index}>{point}</p>
      ))}
    </motion.div>
  );
}

// I'm thinking like CV style with resumes and dividers as like gray lines with border-b border-0 border-solid type shit

export default ExperienceCard;
