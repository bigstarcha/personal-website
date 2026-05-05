"use client";

import React, { useEffect, useState, useMemo } from "react";
import SocialAccountButtons from "./SocialAccountButtons";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { getInterest, MAX_INTERESTS } from "@/utils/interests";

function Paragraph({ children }: { children: React.ReactNode }) {
  const subtextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.p
      variants={subtextVariants}
      className="mt-8 px-12 text-xl text-foreground text-center"
    >
      {children}
    </motion.p>
  );
}

function IntroSection() {
  // This tracks which interest to render in my about section
  const [interestIndex, setInterestIndex] = useState(0);

  // This tracks paragraph animation
  const [paragraphAnimated, setParagraphAnimated] = useState(false);

  // Can't forget that you need to use useEffect if you want to render new things in intervals!
  useEffect(() => {
    const interval = setInterval(() => {
      setInterestIndex((prevIndex) => (prevIndex + 1) % MAX_INTERESTS);
    }, 5000); // Change interest every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const currentInterest = useMemo(
    () => getInterest(interestIndex),
    [interestIndex],
  );

  const subtextContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.45,
      },
    },
  };

  return (
    <section className="flex flex-col lg:flex-row xl:flex-row">
      <motion.div
        className="bg-[url(../public/Tim2.jpg)] bg-center bg-cover h-screen w-full lg:w-3/5 xl:w-3/5 rounded-r-ellipse"
        initial={{ opacity: 0, x: -1050 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      />
      <div className="flex flex-col justify-center items-center w-full lg:w-2/5 xl:w-2/5 h-screen">
        <h1 className="font-merriweather text-6xl text-foreground text-bold mb-12">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm Tim Cha.")
                .callFunction(() => setParagraphAnimated(true))
                .start();
            }}
          />
        </h1>
        <motion.div
          className="flex flex-col"
          variants={subtextContainerVariants}
          initial="hidden"
          animate={paragraphAnimated ? "visible" : "hidden"}
        >
          <Paragraph>
            I&apos;m a full-stack software engineer of three years.
          </Paragraph>
          <Paragraph>
            I like building websites, mobile apps and AI systems, but I&apos;m
            always willing to learn new things.
          </Paragraph>
          <Paragraph>
            When I&apos;m not coding, I like to{" "}
            <motion.span
              key={interestIndex}
              className={`bg-clip-text text-transparent bg-gradient-to-r ${currentInterest.style}`}
              animate={{ opacity: [0, 1, 1, 1, 0, 0, 0] }}
              transition={{ duration: 7, ease: ["easeIn", "easeOut"] }}
            >
              {currentInterest.text}
            </motion.span>
            .
          </Paragraph>
          <SocialAccountButtons />
        </motion.div>
      </div>
    </section>
  );
}

export default IntroSection;
