// https://stackoverflow.com/questions/70815821/tailwind-vertical-border-in-middle-of-div#:~:text=Tailwind%20border%20documentation%20is%20plain,/div%3E

"use client";

import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/utils/experiences";

const leftStyle = "lg:pr-12 xl:pr-12";
const rightStyle = "lg:justify-end xl:justify-end lg:pl-12 xl:pl-12";

function ExperienceSection() {
  return (
    <section className="flex flex-row justify-center pt-12 bg-foreground">
      <div id="experience-section" className="flex flex-col w-full pt-12">
        <h1 className="font-bold text-4xl text-center mb-6">Experience</h1>
        <div className="relative px-8">
          <div className="hidden lg:block xl:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-background" />
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-row relative w-full ${index % 2 === 0 ? leftStyle : rightStyle}`}
            >
              {/** A lot of these styles will need to change if we want to make this responsive */}
              <div className="hidden lg:block xl:block absolute top-1/2 left-1/2 -translate-x-2/5 bg-background rounded-full w-3 h-3" />
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
