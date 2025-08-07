"use client";
import Image from "next/image";
import ProfilePic from "../assets/perfil.png";
import TextUnderline from "@/components/TextUnderline";
import { FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import Section from "@/components/Section";
import Article from "@/components/Article";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Link from "next/link";
import Tooltip from "@/components/Tooltip";
import Vercel from "@/components/icons/Vercel";
import Timeline from "@/components/Timeline";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { useEffect } from "react";
import { analytics } from "@/components/GTM";

export default function Home() {
  useEffect(() => {
    analytics(window, document, 'script', 'dataLayer', 'GTM-THLV3N2');
  })
  const skills = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Next.js",
      "Ant Design",
      "Chakra UI",
      "Tailwind CSS",
    ],
    backend: [
      "PHP (Laravel)",
      "Python",
      "Node.js (Express.js, NestJS)",
      "Laravel",
    ],
    databases: ["MySQL", "MongoDB", "ElasticSearch"],
    devOps: ["Docker"],
  };
  const workExperience = [
    {
      position: "Developer at Ambra",
      date: "February 2023 - Present",
      responsibilities: [
        "Code organization and performance improvement in the system.",
        "Backend development in Laravel.",
        "Frontend development in Angular, Tailwind, Ionic.",
        "Docker container maintenance."
      ],
    },
    {
      position: "Senior Developer at TRIVOD",
      date: "July 2020 - January 2023",
      responsibilities: [
        "Development of API for a sweepstakes platform, resulting in a contract with a major TV network.",
        "Identifying security vulnerabilities in VTEX stores.",
        "Backend development in PHP and Node (NestJS, ExpressJS).",
        "Participation in frontend development for renowned brands' websites on VTEX.",
        "Docker deployment.",
      ],
    },
    {
      position: "Developer at TROC",
      date: "August - December 2021",
      responsibilities: [
        "Code organization and performance improvement in the system.",
        "Backend development in Laravel.",
        "Implementation of search engine with ElasticSearch.",
        "Automation of banners with Revive ADS.",
      ],
    },
    {
      position: "Freelance Developer at Pratx",
      date: "November 2020 - January 2021",
      responsibilities: [
        "Maintenance and development of solutions in JAVA 8, MySQL, Jasper.",
        "Implementation of complete solution for markets.",
      ],
    },
    {
      position: "Marketing Analyst at Via Sonho, Altinho/PE",
      date: "April 2019 - August 2020",
      responsibilities: [
        "Significant growth of the company's social media presence by over 800%.",
        "Development of the company's e-commerce website (Woocommerce).",
        "Development of a basic ERP system (Laravel).",
      ],
    },
    {
      position: "Freelance Developer, Altinho/PE",
      date: "2016 - 2019",
      responsibilities: [
        "Development of WordPress websites for regional companies and the Catholic Church in the city.",
      ],
    },
  ];
  const otherSkills = [
    "Agile Methodologies (Scrum, Kanban)",
    "Project Management Tools (Jira, Azure, Github Projects)",
    "Git and Version Control (Github, Gitlab, Bitbucket, Azure DevOps)",
    "Effective Communication and Teamwork",
  ];
  return (
    <Flowbite>
      <main className="dark:bg-gray-800 dark:text-white">
        <header className="h-screen contents">
          <nav className="pt-3">
            <ul className="flex justify-around text-gray-400 md:justify-center">
              <li className="flex">
                <a className="p-6" href="/">
                  Home
                </a>
              </li>
              <li className="p-6 cursor-pointer">
                <Tooltip content={`I'm "engaging warp drive" on this task.`}>
                  Blog
                </Tooltip>
              </li>
              <li className="flex align-middle">
                <DarkThemeToggle />
              </li>
            </ul>
          </nav>
          <Container className="">
            <Section className="grid grid-cols-1 md:grid-cols-2">
              <header className="flex flex-col justify-center h-full gap-4 py-4">
                <p className="text-4xl md:text-6xl">Hello, I&apos;m</p>
                <h1 className="flex gap-4 mb-10 text-5xl md:text-7xl">
                  <TextUnderline>Paulo</TextUnderline>Cunha
                </h1>
                <h2 className="text-2xl text-gray-400">
                  Software developer specializing in web apps
                </h2>
                <div className="mt-10 text-end">
                  <a
                    href="https://www.linkedin.com/in/pauloracunha"
                    target="_blank"
                    className="inline-flex items-center gap-1 px-8 py-4 font-bold text-gray-400 duration-200 bg-transparent border border-gray-400 rounded-full hover:bg-gray-400 hover:text-gray-800"
                  >
                    <FaLinkedin className="mb-0.5" /> Linkedin
                  </a>
                </div>
              </header>
              <Image
                className="hidden md:block"
                src={ProfilePic}
                alt="Paulo Cunha"
              />
            </Section>
          </Container>
        </header>
        <Section className="py-12 bg-gray-100 dark:bg-gray-700">
          <Container>
            <Article title="Whoami" id="whoami">
              <p className="text-2xl leading-10 text-justify text-gray-400">
                I am a developer with over 5 years of experience working with
                PHP and 3 years with NodeJS, React, etc. I have expertise in
                developing luxury stores for renowned brands such as Dior,
                Cartier, Panerai, Nívea, Ricca, GNano, among others. I have been
                responsible for transitioning a monolithic system to an
                API-first approach with microservices and independent frontend,
                enabling contracts with major clients. Currently, I work as a
                software engineer at TRIVOD and as a full-stack developer at
                Ambra.
              </p>
            </Article>
          </Container>
        </Section>
        <Section className="py-12">
          <Container>
            <header className="max-w-6xl m-auto">
              <h3 className="mb-6 text-4xl">Technologies</h3>
            </header>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
              {skills &&
                Object.keys(skills).map((skill, index) => (
                  <Card
                    key={index}
                    title={skill.toUpperCase()}
                    className="w-full bg-gray-200 dark:bg-gray-900"
                  >
                    <ul className="text-xl leading-10 text-gray-600 dark:text-gray-400">
                      {/* @ts-ignore */}
                      {skills[skill].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
            </div>
          </Container>
        </Section>
        <Section className="py-12 bg-gray-50 dark:bg-gray-900">
          <Container>
            <header>
              <h3 className="mb-6 text-4xl">Work Experience</h3>
            </header>
            <Timeline
              horizontal
              className="flex overflow-auto"
              classItem="p-3 flex-shrink-0 w-1/2 md:w-1/3"
              data={workExperience}
            />
          </Container>
        </Section>
        <Section className="py-12">
          <Container>
            <header>
              <h3 className="mb-6 text-4xl">Other Skills</h3>
            </header>
            <ul className="text-xl leading-10 text-gray-400">
              {otherSkills &&
                otherSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </Container>
        </Section>
        <footer className="py-12 text-gray-400 bg-gray-900">
          <Container className="flex flex-col-reverse justify-between gap-4 md:flex-row">
            <Link
              className="flex items-center gap-2 duration-200 hover:text-gray-100"
              href="mailto:paulo.racunha@gmail.com"
              target="_blank"
            >
              <FaMailBulk /> paulo.racunha@gmail.com
            </Link>
            <p className="hidden md:block">2023 | Paulo Cunha</p>
            <Link
              className="flex items-center gap-2 duration-200 hover:text-gray-100"
              href="https://api.whatsapp.com/send?phone=5581996587588"
              target="_blank"
            >
              <FaWhatsapp /> Whatsapp
            </Link>
          </Container>
          <Container className="flex justify-center my-6">
            <Vercel />
          </Container>
        </footer>
      </main>
    </Flowbite>
  );
}
