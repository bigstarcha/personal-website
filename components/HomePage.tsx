"use client";

import React from "react";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navigation />
      <IntroSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}

export default HomePage;
