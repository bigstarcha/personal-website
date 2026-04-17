"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/projects";

function ProjectsSection() {
  return (
    <div className="flex flex-row justify-center pt-12 bg-foreground">
      <div className="flex flex-col w-full mt-12">
        <h1 className="font-bold text-4xl text-center mb-6">Projects</h1>
        <div className="px-8 grid lg:grid-cols-3 gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
