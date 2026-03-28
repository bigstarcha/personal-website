"use client";

import React, { useEffect, useState, useMemo } from "react";
import SocialAccountButtons from "./SocialAccountButtons";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { getInterest, MAX_INTERESTS } from "@/utils/interests";

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p className="mt-8 px-12 text-xl text-foreground text-center">
      {children}
    </motion.p>
  );
}

function IntroSection() {
  // This tracks which interest to render in my about section
  const [interestIndex, setInterestIndex] = useState(0);

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

  const subtexts = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.25
      }
    }
  };

  return (
    <div className="flex flex-row">
      <motion.div
        className="bg-[url(../public/Tim2.jpg)] bg-center bg-cover w-3/5 h-screen rounded-r-ellipse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      />
      <div className="flex flex-col justify-center items-center w-2/5">
        <h1 className="text-5xl text-foreground text-bold mb-12">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Tim Cha.").start();
            }}
          />
        </h1>
        <motion.div variants={subtexts}>
          <Paragraph>
            I&apos;m a full-stack software engineer of three years.
          </Paragraph>
          <Paragraph>
            I like building websites and mobile apps, but I&apos;m always
            willing to learn new things.
          </Paragraph>
          <Paragraph>
            When I&apos;m not coding, I like to{" "}
            <motion.span
              key={interestIndex}
              className={`bg-clip-text text-transparent bg-gradient-to-r ${currentInterest.style}`}
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{ duration: 2 }}
            >
              {currentInterest.text}
            </motion.span>
            .
          </Paragraph>
        </motion.div>
        <SocialAccountButtons />
      </div>
    </div>
  );
}

export default IntroSection;
