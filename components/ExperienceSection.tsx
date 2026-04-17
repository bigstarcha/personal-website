// https://stackoverflow.com/questions/70815821/tailwind-vertical-border-in-middle-of-div#:~:text=Tailwind%20border%20documentation%20is%20plain,/div%3E

"use client";

import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/utils/experiences";

const leftStyle = "pr-12";
const rightStyle = "justify-end pl-12";

function ExperienceSection() {
  return (
    <div className="flex flex-row justify-center pt-12 bg-foreground">
      <div className="flex flex-col w-full mt-12">
        <h1 className="font-bold text-4xl text-center mb-6">Experience</h1>
        <div className="relative px-8">
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-background" />
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-row relative w-full ${index % 2 === 0 ? leftStyle : rightStyle}`}
            >
              {/** A lot of these styles will need to change if we want to make this responsive */}
              <div className="absolute top-1/2 left-1/2 -translate-x-2/5 bg-background rounded-full w-3 h-3" />
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
