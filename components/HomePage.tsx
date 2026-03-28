"use client";

import React from "react";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ConnectSection from "./ConnectSection";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection";

function HomePage() {
  return (
    <>
      <Navigation />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ConnectSection />
      <Footer />
    </>
  );
}

export default HomePage;
