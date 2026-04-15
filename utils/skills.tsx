import React, { ReactNode } from "react";
import {
  TypescriptOriginal,
  JavascriptOriginal,
  ReactOriginal,
  NextjsOriginal,
  GraphqlPlain,
  ApollographqlOriginal,
  Html5Original,
  Css3Original,
  TailwindcssOriginal,
  JestPlain,
  NpmOriginal,
  YarnOriginal,
  PnpmOriginal,
  JavaOriginal,
  PythonOriginal,
  CplusplusOriginal,
  DropwizardOriginal,
  SpringOriginal,
  DjangoPlain,
  FlaskOriginal,
  ExpressOriginal,
  PostgresqlOriginal,
  MysqlOriginal,
  JunitOriginal,
  GitOriginal,
  JenkinsOriginal,
  GithubactionsOriginal,
  AmazonwebservicesOriginalWordmark,
  DatadogOriginal,
  DockerOriginal,
  FigmaOriginal,
  PostmanOriginal,
  SonarqubeOriginal
} from "devicons-react";

export type Skill = {
  icon: React.ReactElement;
  name: string;
};

export const frontendSkills: Skill[] = [
  {
    icon: <TypescriptOriginal size={100} />,
    name: "TypeScript",
  },
  {
    icon: <JavascriptOriginal size={100} />,
    name: "JavaScript",
  },
  {
    icon: <ReactOriginal size={100} />,
    name: "React",
  },
  {
    icon: <NextjsOriginal size={100} />,
    name: "Next.js",
  },
  {
    icon: <GraphqlPlain size={100} color="#E10098" />,
    name: "GraphQL",
  },
  {
    icon: <ApollographqlOriginal size={100} />,
    name: "Apollo GraphQL",
  },
  {
    icon: <Html5Original size={100} />,
    name: "HTML",
  },
  {
    icon: <Css3Original size={100} />,
    name: "CSS",
  },
  {
    icon: <TailwindcssOriginal size={100} />,
    name: "Tailwind CSS",
  },
  {
    icon: <JestPlain size={100} />,
    name: "Jest",
  },
  {
    icon: <NpmOriginal size={100} />,
    name: "npm",
  },
  {
    icon: <YarnOriginal size={100} />,
    name: "Yarn",
  },
  {
    icon: <PnpmOriginal size={100} />,
    name: "pnpm",
  },
];

export const backendSkills: Skill[] = [
  {
    icon: <JavaOriginal size={100} />,
    name: "Java",
  },
  {
    icon: <PythonOriginal size={100} />,
    name: "Python",
  },
  {
    icon: <CplusplusOriginal size={100} />,
    name: "C++",
  },
  {
    icon: <DropwizardOriginal size={100} />,
    name: "Dropwizard",
  },
  {
    icon: <SpringOriginal size={100} />,
    name: "Spring",
  },
  {
    icon: <DjangoPlain size={100} />,
    name: "Django",
  },
  {
    icon: <FlaskOriginal size={100} />,
    name: "Flask",
  },
  {
    icon: <ExpressOriginal size={100} />,
    name: "Express.js",
  },
  {
    icon: <PostgresqlOriginal size={100} />,
    name: "PostgreSQL",
  },
  {
    icon: <MysqlOriginal size={100} />,
    name: "MySQL",
  },
  {
    icon: <JunitOriginal size={100} />,
    name: "JUnit 5",
  }
];

export const devopsOtherSkills: Skill[] = [
  {
    icon: <GitOriginal size={100} />,
    name: "Git",
  },
  {
    icon: <JenkinsOriginal size={100} />,
    name: "Jenkins",
  },
  {
    icon: <GithubactionsOriginal size={100} />,
    name: "GitHub Actions",
  },
  {
    icon: <AmazonwebservicesOriginalWordmark size={100} />,
    name: "AWS",
  },
  {
    icon: <DatadogOriginal size={100} />,
    name: "Datadog",
  },
  {
    icon: <DockerOriginal size={100} />,
    name: "Docker",
  },
  {
    icon: <FigmaOriginal size={100} />,
    name: "Figma",
  },
  {
    icon: <PostmanOriginal size={100} />,
    name: "Postman",
  },
  {
    icon: <SonarqubeOriginal size={100} />,
    name: "SonarQube",
  }
];