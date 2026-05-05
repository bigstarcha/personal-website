"use client";

import React, { type JSX } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";
import TagSection from "@/components/TagSection";
import { Project } from "@/utils/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function VisitButton({
  name,
  link,
  index = 0,
}: {
  name: string;
  link: string;
  index?: number;
}): JSX.Element {
  return (
    <Link
      className="w-max"
      key={index}
      href={link}
      target="_blank"
      id={`${name.toLowerCase()}-link-${index}`}
      aria-label={`${name} Link ${index + 1}`}
    >
      <motion.div
        className="inline-flex gap-2 items-center text-tertiary bg-quaternary px-4 py-2 rounded-full hover:cursor-pointer"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <IoOpenOutline size={20} />
        <span className="text-md">Visit Me!</span>
      </motion.div>
    </Link>
  );
}

function ProjectCard({
  name,
  duration,
  description,
  tags,
  links,
}: Project): JSX.Element {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="flex flex-col border-2 border-solid rounded-xl px-5 py-4 shadow-lg"
    >
      <h1 className="mt-4 mb-2 font-bold text-3xl text-center">{name}</h1>
      <h2 className="mb-2 text-center font-semibold text-xl">{duration}</h2>
      <TagSection tags={tags} />
      <p className="mb-2 text-center text-wrap">{description}</p>
      <div className="flex flex-col h-full items-center justify-end">
        {Array.isArray(links) && (
          <>
            {links.map((link, index) => (
              <VisitButton key={index} name={name} link={link} index={index} />
            ))}
          </>
        )}
        {!Array.isArray(links) && <VisitButton name={name} link={links} />}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
