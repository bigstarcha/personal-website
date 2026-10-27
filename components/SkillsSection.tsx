/**
 * References
 * https://www.youtube.com/watch?v=KD1Yo8a_Qis - To help me with scroll
 */

import React from "react";
import * as motion from "motion/react-client";
import {
  Skill,
  frontendSkills,
  backendSkills,
  devopsOtherSkills,
} from "@/utils/skills";

const subsectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SkillTile({ icon, name }: Skill) {
  return (
    <div className="flex flex-col items-center py-3 px-5 border-2 rounded-lg w-max">
      {icon}
      <p className="my-0 text-xl text-center mt-2 text-wrap">{name}</p>
    </div>
  );
}

function SkillSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={subsectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 2 }}
      className="flex flex-col lg:flex-row xl:flex-row items-center w-full mb-4 last:mb-0"
    >
      <h3 className="font-semibold text-3xl w-full lg:w-1/4 xl:w-1/4 mb-4 text-center lg:mb-0 xl:mb-0">
        {title}
      </h3>
      <div className="flex w-full lg:w-3/4 xl:w-3/4 overflow-x-hidden motion-reduce:overflow-x-auto">
        {/**
         * The carousel shifts by -50%, so both copies must be exactly half the track's width.
         * Each copy carries its own trailing spacing (pr-4) instead of a gap between them,
         * otherwise the loop point is off by half a gap and the animation jumps each cycle.
         */}
        <div className="animate-carousel motion-reduce:animate-none inline-flex whitespace-nowrap">
          {/** First copy */}
          <div className="inline-flex gap-4 pr-4">{children}</div>
          {/** Second copy */}
          <div
            className="inline-flex gap-4 pr-4 motion-reduce:hidden"
            aria-hidden="true"
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SkillsSection() {
  return (
    <section className="flex flex-row justify-center pt-12 bg-foreground">
      <div id="skills-section" className="flex flex-col w-full pt-12">
        <h2 className="font-bold text-4xl text-center">Skills</h2>
        <div className="mt-6 px-8">
          <SkillSubsection title="Frontend Development">
            {frontendSkills.map((skill, index) => (
              <SkillTile key={index} {...skill} />
            ))}
          </SkillSubsection>
          <SkillSubsection title="Backend Development">
            {backendSkills.map((skill, index) => (
              <SkillTile key={index} {...skill} />
            ))}
          </SkillSubsection>
          <SkillSubsection title="DevOps and Other Skills">
            {devopsOtherSkills.map((skill, index) => (
              <SkillTile key={index} {...skill} />
            ))}
          </SkillSubsection>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
