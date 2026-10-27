"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

const INPUT_STYLE = "border-2 border-background p-2 rounded-md";

const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, staggerChildren: 0.5 },
  },
};

type Status = { type: "success" | "error"; text: string };

function ConnectSection() {
  const [status, setStatus] = useState<Status | null>(null);
  const [isSending, setIsSending] = useState(false);

  const showStatus = (next: Status) => {
    setStatus(next);
    // Hide the message after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  // onSubmit instead of a form action: React 19 clears the form after every action, even failed ones,
  // which would wipe the visitor's message. Here the form only resets after a successful send.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        // The route only ever returns visitor-friendly error messages.
        const { error } = await response.json().catch(() => ({}));
        showStatus({
          type: "error",
          text: error ?? "Something went wrong. Please try again later.",
        });
        return;
      }

      form.reset();
      showStatus({
        type: "success",
        text: "Thanks for reaching out to me! I will be in touch shortly.",
      });
    } catch {
      showStatus({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="flex flex-col items-center py-12 bg-foreground">
      <h2 id="contact-section" className="font-bold text-4xl pt-12 mb-4">
        Connect With Me!
      </h2>
      {/** The live region stays mounted so screen readers announce messages when they appear. */}
      <div role="status" aria-live="polite">
        {status && (
          <p
            className={`text-lg ${status.type === "success" ? "text-green-700" : "text-red-700"}`}
          >
            {status.text}
          </p>
        )}
      </div>
      <motion.form
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative flex flex-col w-full px-8 lg:w-1/2 xl:w-1/2 lg:px-0 xl:px-0"
        onSubmit={handleSubmit}
      >
        {/**
         * Honeypot for spam bots: moved off-screen and hidden from screen readers and the tab order,
         * so only bots that fill in every field will fill it. The server drops those submissions.
         */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        {/** maxLength values match the limits in utils/contact-form.ts. */}
        <label className="text-lg text-background" htmlFor="name">
          Name
        </label>
        <input
          className={INPUT_STYLE}
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your Name"
          maxLength={100}
          required
        />
        <label className="text-lg mt-4 text-background" htmlFor="email">
          Email
        </label>
        <input
          className={INPUT_STYLE}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Your Email"
          maxLength={254}
          required
        />
        <label className="text-lg mt-4 text-background" htmlFor="message">
          Message
        </label>
        <textarea
          className={INPUT_STYLE}
          id="message"
          name="message"
          placeholder="Send a Message!"
          maxLength={5000}
          required
          rows={6}
        />
        <div className="w-full mt-4 flex flex-row justify-end">
          <motion.button
            className="w-max py-2 px-6 rounded-md bg-background text-foreground hover:cursor-pointer disabled:opacity-60 disabled:cursor-wait"
            type="submit"
            disabled={isSending}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}

export default ConnectSection;
