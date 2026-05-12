"use client";

import React, { useState } from "react";
import _ from "lodash";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import { photos } from "@/utils/photos";

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

const shuffledPhotos = _.shuffle(photos);

function PhotoDiary() {
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  return (
    <section className="py-12 px-8">
      {/** @temp */}
      <h1 className="mt-12 text-foreground font-bold text-4xl text-center mb-6">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("My Photo Diary")
              .callFunction(() => setSubtitleVisible(true))
              .start();
          }}
        />
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
          {shuffledPhotos.map((photo, _) => (
            <motion.div
              variants={galleryItemVariants}
              key={photo.alt}
            >
              <Image
                className="rounded-xl"
                src={photo.src}
                width={450}
                alt={photo.alt}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PhotoDiary;
