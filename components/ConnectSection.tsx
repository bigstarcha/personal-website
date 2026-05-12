"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const INPUT_STYLE = "border-2 border-background p-2 rounded-md";

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, staggerChildren: 0.5 },
  },
};

function ConnectSection() {
  // Page wil not automatically refresh. Fields will automatically reset (React 19).
  const handleSubmit = async (formData: FormData) => {
    const payload = {
      name: formData.get("name") as FormDataEntryValue,
      email: formData.get("email") as FormDataEntryValue,
      message: formData.get("message") as FormDataEntryValue,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setShowErrorMessage(true);
        // Hide the message after 5 seconds
        setTimeout(() => setShowErrorMessage(false), 5000);
        return;
      }

      setShowSaveMessage(true);
      // Hide the message after 5 seconds
      setTimeout(() => setShowSaveMessage(false), 5000);
    } catch (error) {
      setShowErrorMessage(true);
      // Hide the message after 5 seconds
      setTimeout(() => setShowErrorMessage(false), 5000);
    }
  };

  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  return (
    <section className="flex flex-col items-center py-12 bg-foreground">
      <h1 id="contact-section" className="font-bold text-4xl pt-12 mb-4">
        Connect With Me!
      </h1>
      {showSaveMessage && (
        <h2 className="text-lg text-green-600">
          Thanks for reaching out to me! I will be in touch shortly.
        </h2>
      )}
      {showErrorMessage && (
        <h2 className="text-lg text-red-600">
          Something went wrong. Please try again later.
        </h2>
      )}
      <motion.form
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col w-full px-8 lg:w-1/2 xl:w-1/2 lg:px-0 xl:px-0"
        action={handleSubmit}
      >
        <label className="text-lg text-background" htmlFor="name">
          Name
        </label>
        <input
          className={INPUT_STYLE}
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <label className="text-lg mt-4 text-background" htmlFor="email">
          Email
        </label>
        <input
          className={INPUT_STYLE}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <label className="text-lg mt-4 text-background" htmlFor="message">
          Message
        </label>
        <textarea
          className={INPUT_STYLE}
          name="message"
          placeholder="Send a Message!"
          required
          rows={6}
        />
        <div className="w-full mt-4 flex flex-row justify-end">
          <motion.button
            className="w-max py-2 px-6 rounded-md bg-background text-foreground hover:cursor-pointer"
            type="submit"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}

export default ConnectSection;
