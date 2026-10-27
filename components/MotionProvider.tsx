"use client";

import React from "react";
import { MotionConfig } from "motion/react";

// Turns off movement-based animations for visitors who enable "reduce motion" in their OS.
function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default MotionProvider;
