"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import Link from "next/link";

function SocialAccountButtons() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      className="grid grid-cols-3 gap-4 mt-12 w-max self-center"
    >
      <Link
        href="https://www.linkedin.com/in/timothy-cha-447b52192/"
        target="_blank"
        id="timothy-cha-linkedin"
        aria-label="Timothy Cha LinkedIn"
      >
        <motion.div
          className="bg-foreground p-3 rounded-full hover:cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <IoLogoLinkedin size={30} />
        </motion.div>
      </Link>
      <Link
        href="https://github.com/bigstarcha"
        target="_blank"
        id="timothy-cha-github"
        aria-label="Timothy Cha GitHub"
      >
        <motion.div
          className="bg-foreground p-3 rounded-full hover:cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <IoLogoGithub size={30} />
        </motion.div>
      </Link>
      <Link
        href="https://www.youtube.com/@chath23"
        target="_blank"
        id="timothy-cha-youtube"
        aria-label="Timothy Cha YouTube"
      >
        <motion.div
          className="bg-foreground p-3 rounded-full hover:cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <IoLogoYoutube size={30} />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default SocialAccountButtons;
