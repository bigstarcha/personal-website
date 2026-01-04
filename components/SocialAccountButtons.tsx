"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

function SocialAccountButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12">
      <Link
        href="https://www.linkedin.com/in/timothy-cha-447b52192/"
        target="_blank"
      >
        <motion.button
          className="bg-foreground p-3 rounded-full hover:cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <IoLogoLinkedin size={30} />
        </motion.button>
      </Link>
      <Link href="https://github.com/bigstarcha" target="_blank">
        <motion.button
          className="bg-foreground p-3 rounded-full hover:cursor-pointer"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <IoLogoGithub size={30} />
        </motion.button>
      </Link>
    </div>
  );
}

export default SocialAccountButtons;
