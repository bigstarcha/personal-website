"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/projects";

const projectSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1 }, // Staggering doesn't seem to work. Not sure why
  },
};

function ProjectsSection() {
  return (
    <section className="flex flex-row justify-center pt-12 bg-foreground">
      <div id="projects-section" className="flex flex-col w-full pt-12">
        <h1 className="font-bold text-4xl text-center mb-6">Projects</h1>
        <motion.div
          variants={projectSectionVariants}
          initial="hidden"
          whileInView="visible"
          className="px-8 grid lg:grid-cols-3 xl:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              duration={project.duration}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
