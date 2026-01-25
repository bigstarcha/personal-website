"use client";

import React from "react";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import ExperienceSection from "./ExperienceSection";
import ConnectSection from "./ConnectSection";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navigation />
      <IntroSection />
      <ExperienceSection />
      <ConnectSection />
      <Footer />
    </>
  );
}

export default HomePage;
