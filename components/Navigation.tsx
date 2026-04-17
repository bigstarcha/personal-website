// References: https://motion.dev/docs/react-animation#propagation

"use client";

import React, { useState, useRef } from "react";
import type { Variants } from "motion/react";
import { motion, stagger } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const navItems = [
  "About Me",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
  "Photo Diary",
];

/**
 * Annotations
 * This is a button that's positioned in the top right corner with some padding. It hovers to indicate that it is clickable,
 * and it has a menu size of 30.
 */
function Toggle({ onClick }: { onClick: () => void }) {
  // The top-4 and right-4 values were guesswork. This button hides the motion div, which when closed, is a small circle.
  // When opened, the small circle expands into the square. This is basically visually indistinguishable from what we see in the demo.
  return (
    <motion.button
      className="absolute bg-foreground shadow-lg top-4 right-4 p-3 rounded-full hover:cursor-pointer"
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      aria-label="Toggle the Navigation menu"
    >
      <IoMenu size={30} />
    </motion.button>
  );
}

function NavigationSection() {
  // This controls how the list of navigation items look when the menu is open or closed.
  const navVariants = {
    open: {
      transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
      transition: { delayChildren: stagger(0.05, { from: "last" }) },
    },
  };

  // This controls how each navigation item looks like when the menu is open or closed.
  const navItemVariants = {
    open: {
      opacity: 1,
      // I just threw this in here because that's what the example had lol
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.ul className="absolute top-12 left-6" variants={navVariants}>
      {/** When hovering over each navigation item, we want it to enlarge slightly since they are links after all. */}
      {navItems.map((item) => (
        <motion.li
          key={item}
          className="text-xl text-background p-3 hover:cursor-pointer"
          variants={navItemVariants}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {}} /** @todo Work on implementing this later once you have all pages established */
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Sidebar variants is what controls the appearance of the navigation panel.
  // Some of this was copied by the Framer Motion documentation for Propagation.
  const sidebarVariants: Variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    }),
    closed: {
      clipPath: "circle(20px at calc(100% - 40px) 40px)",
      transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
    <motion.nav
      className="relative sticky top-0 z-100"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-screen bg-foreground border-0 border-solid border-l border-background"
        variants={sidebarVariants}
      >
        <NavigationSection />
      </motion.div>
      <Toggle onClick={() => setIsOpen(!isOpen)} />
    </motion.nav>
  );
}

export default NavigationBar;
