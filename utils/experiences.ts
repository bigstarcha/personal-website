export type Experience = {
  company: string;
  companyColor?: string;
  title: string;
  yearRange: string;
  description: string[];
};

export const experiences: Experience[] = [
  {
    company: "Cvent",
    companyColor: "sky-500",
    title: "Software Engineer",
    yearRange: "2023 - 2025",
    description: ["I did stuff.", "I did more stuff", "I did even more stuff."],
  },
  {
    company: "Cvent",
    companyColor: "sky-500",
    title: "Software Engineering Intern",
    yearRange: "2022",
    description: ["I did stuff.", "I did more stuff", "I did even more stuff."],
  },
];
