"use client";

import React from "react";
import { motion } from "framer-motion";

const INPUT_STYLE = "border-1 border-background p-2 rounded-md";

function ConnectSection() {
  const handleSubmit = () => {
    // Implement logic to send an email given the following user information.
  };

  return (
    <div className="flex flex-col items-center py-12 bg-foreground">
      <h1 className="font-bold text-4xl mt-12 mb-4">Connect With Me!</h1>
      <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}

export default ConnectSection;
