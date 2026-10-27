export type Project = {
  name: string;
  duration: string;
  description: string;
  tags: string[];
  links: string | string[]; // A project can have multiple links if it's multistack. I'm not monorepoing anything.
};

export const projects: Project[] = [
  {
    name: "Edify",
    duration: "May 2025 - Present",
    description:
      "A Christian social media web application. Currently in progress.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: ["https://github.com/bigstarcha/edify-ui-v2"],
  },
  {
    name: "Developr",
    duration: "November 2022 - December 2022",
    description:
      "A dating app for software engineers. My Mobile App Development class final project.",
    tags: ["React Native", "JavaScript", "Firebase"],
    links: "https://github.com/bigstarcha/cs4720-project",
  },
  {
    name: "Off Campus Housing Finder",
    duration: "August 2021 - December 2021",
    description:
      "A full-stack web application built on Django that helps students find off-campus listings. My Advanced Software Development class final group project.",
    tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "GitHub Actions"],
    links: "https://github.com/bigstarcha/cs3240-project-b-19",
  },
];
