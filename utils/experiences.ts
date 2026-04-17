export type Experience = {
  title: string;
  company: string;
  yearRange: string;
  description: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Cvent",
    yearRange: "January 2023 - Present",
    description: [
      "Made enhancements to a company application including adding new features and RESTful APIs and improving existing ones.",
      "Promptly updated team services to comply with company standards as part of service ownership, including security and test coverage improvements.",
      "Spearheaded frontend development of another company web application to alleviate communication bottlenecks between hoteliers and event planners.",
      "Spearheaded frontend development of yet another company web application to provide a user-friendly interface for a functionality previously done by application support.",
    ],
    tags: ["Java", "DropWizard", "PostgreSQL", "TypeScript", "Next.js", "AWS"],
  },
  {
    title: "Software Engineering Intern",
    company: "Cvent",
    yearRange: "June 2022 - August 2022",
    description: [
      "Lowered memory requirements of microservices and reduced costs of running a company application.",
      "Migrated company application microservices to a new pre-production environment to improve testing with production quality data",
      "Performed SDK updates on company application microservices to increase security.",
    ],
    tags: [
      "Java",
      "DropWizard",
      "MS SQL Server",
      "AWS",
      "TypeScript",
      "React",
      "Next.js",
      "GraphQL",
    ],
  },
];
