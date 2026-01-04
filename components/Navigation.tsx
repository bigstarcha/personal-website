"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const navItems = [
  "About Me",
  "Experience",
  "Projects",
  "Education",
  "Photo Diary",
  "Contact",
];

function Toggle({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      className="bg-foreground p-3 rounded-full hover:cursor-pointer"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
    >
      <IoMenu size={30} />
    </motion.button>
  );
}

function NavigationSection() {
  return (
    <ul className="relative">
      {navItems.map((item) => (
        <li key={item} className="text-foreground p-2">
          {item}
        </li>
      ))}
    </ul>
  );
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <div className="absolute top-0 right-0 mt-3 mr-3">
      {/* <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        
      </motion.nav> */}
      <nav>
        {/* <NavigationSection /> */}
        <Toggle onClick={() => setIsOpen(!isOpen)} />
      </nav>
    </div>
  );
}

export default NavigationBar;
