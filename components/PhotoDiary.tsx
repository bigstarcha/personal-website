"use client";

import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "motion/react";
import Image from "next/image";
import { photos } from "@/utils/photos";

// Fisher-Yates shuffle. Returns a new array so the original order stays intact.
function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const galleryVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function PhotoDiary() {
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  // Shuffling at render time would give the server and browser different orders (a hydration error),
  // so start in file order and shuffle while the gallery is still hidden.
  const [orderedPhotos, setOrderedPhotos] = useState(photos);

  return (
    <section className="py-12 px-8">
      {/** @temp */}
      <h1 className="mt-12 text-foreground font-bold text-4xl text-center mb-6">
        <span className="sr-only">My Photo Diary</span>
        <span aria-hidden="true">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("My Photo Diary")
                .callFunction(() => {
                  setOrderedPhotos(shuffle(photos));
                  setSubtitleVisible(true);
                })
                .start();
            }}
          />
        </span>
      </h1>
      <motion.h2
        variants={subtitleVariants}
        initial="hidden"
        animate={subtitleVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="text-foreground text-2xl text-center mb-16"
      >
        Snippets and photos of my life outside work.
      </motion.h2>
      <div className="flex flex-row justify-center w-full">
        <motion.div
          variants={galleryVariants}
          initial="hidden"
          animate={subtitleVisible ? "visible" : "hidden"}
          transition={{ duration: 1 }}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>div:not(:first-child)]:mt-6"
        >
          {orderedPhotos.map((photo) => (
            <motion.div variants={galleryItemVariants} key={photo.alt}>
              <Image
                className="rounded-xl"
                src={photo.src}
                width={450}
                alt={photo.alt}
                placeholder="blur"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PhotoDiary;
