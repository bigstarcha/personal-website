"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { getInterest, MAX_INTERESTS } from "@/utils/interests";

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p className="mt-8 px-12 text-xl text-foreground text-center">{children}</motion.p>
  );
}

function HomePage() {
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

  return (
    <>
      <div className="flex flex-row">
        <div className="bg-[url(../public/Tim.jpg)] bg-center bg-cover w-3/5 h-screen rounded-r-ellipse" />
        <div className="flex flex-col justify-center items-center w-2/5">
          <motion.h1 className="text-5xl text-foreground text-bold mb-12" initial={{ opacity: 0 }} animate={{
            opacity: 1
          }}>
            Hi, I&apos;m Tim Cha.
          </motion.h1>
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
                y: -10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
            >
              {currentInterest.text}
            </motion.span>
            .
          </Paragraph>
        </div>
      </div>
    </>
  );
}

export default HomePage;
