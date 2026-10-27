"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import SocialAccountButtons from "./SocialAccountButtons";
import { AnimatePresence, motion } from "motion/react";
import Typewriter from "typewriter-effect";

import portrait from "@/public/Tim2.jpg";
import { getInterest, MAX_INTERESTS } from "@/utils/interests";

function Paragraph({ children }: { children: React.ReactNode }) {
  const subtextVariants = {
    hidden: { opacity: 0, y: 20 },
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
    }, 5000); // Change interest every 5 seconds

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
        className="relative overflow-hidden h-screen w-full lg:w-3/5 xl:w-3/5 rounded-r-ellipse"
        initial={{ opacity: 0, x: -1050 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        {/** next/image serves a resized, modern-format version instead of the full JPEG. */}
        <Image
          src={portrait}
          alt="Portrait of Tim Cha"
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="flex flex-col justify-center items-center w-full lg:w-2/5 xl:w-2/5 h-screen">
        <h1 className="font-merriweather text-6xl text-foreground text-bold mb-12">
          {/** Screen readers get the full heading instead of the typing animation. */}
          <span className="sr-only">Hi, I&apos;m Tim Cha.</span>
          <span aria-hidden="true">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Tim Cha.")
                  .callFunction(() => setParagraphAnimated(true))
                  .start();
              }}
            />
          </span>
        </h1>
        <motion.div
          className="flex flex-col"
          variants={subtextContainerVariants}
          initial="hidden"
          animate={paragraphAnimated ? "visible" : "hidden"}
        >
          <Paragraph>
            I&apos;m a full-stack software engineer of almost four years.
          </Paragraph>
          <Paragraph>
            I like building websites and mobile apps, but I&apos;m always
            willing to learn new things.
          </Paragraph>
          <Paragraph>
            When I&apos;m not coding, I like to{" "}
            {/** mode="wait" fades the old interest out fully before the next one fades in. */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={interestIndex}
                className={`bg-clip-text text-transparent bg-gradient-to-r ${currentInterest.style}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {currentInterest.text}
              </motion.span>
            </AnimatePresence>
            .
          </Paragraph>
          <SocialAccountButtons />
        </motion.div>
      </div>
    </section>
  );
}

export default IntroSection;
