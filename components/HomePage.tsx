"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ConnectSection from "./ConnectSection";
import ProjectsSection from "./ProjectsSection";

function HomePage() {
  const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false }); // Avoid hydration issues by loading the footer only on the client side

  return (
    <>
      <Navigation />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ConnectSection />
      <DynamicFooter />
    </>
  );
}

export default HomePage;
