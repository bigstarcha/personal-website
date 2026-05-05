import React from "react";
import Navigation from "@/components/Navigation";
import IntroSection from "@/components/IntroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ConnectSection from "@/components/ConnectSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

function Home() {
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

export default Home;
