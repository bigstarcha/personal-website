"use client";

import React, { useState, useSyncExternalStore } from "react";
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

/**
 * The photo order is decided once in the browser, and the photos mount directly in that order.
 * - The server renders no photos (null), so its HTML can't disagree with the browser's random order.
 * - Photos are never re-ordered after mounting: moving them in the same render that starts the
 *   reveal broke Motion's stagger and left most of them stuck at opacity 0.
 * The order is cached for the page load, so it re-shuffles on refresh, not on every client-side visit.
 */
let shuffledPhotos: typeof photos | null = null;
const getShuffledPhotos = () => (shuffledPhotos ??= shuffle(photos));
const getServerPhotos = () => null;
const subscribe = () => () => {};

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
  const orderedPhotos = useSyncExternalStore(
    subscribe,
    getShuffledPhotos,
    getServerPhotos,
  );

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
                .callFunction(() => setSubtitleVisible(true))
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
          {orderedPhotos?.map((photo) => (
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
