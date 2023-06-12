import Image from "next/image";
import ProfilePic from "../assets/perfil.png";
import TextUnderline from "@/components/TextUnderline";
import { FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import Section from "@/components/Section";
import Article from "@/components/Article";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
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
      position: "Technical Lead at TRIVOD",
      dates: "April 2022 - Present",
      responsibilities: [
        "Team leadership and project management for three distinct products.",
      ],
    },
    {
      position: "Senior Developer at TRIVOD",
      dates: "July 2020 - March 2022",
      responsibilities: [
        "Development of API for a sweepstakes platform, resulting in a contract with a major TV network.",
        "Identifying security vulnerabilities in VTEX stores.",
        "Backend development in PHP and Node (NestJS, ExpressJS).",
        "Participation in frontend development for renowned brands' websites on VTEX.",
      ],
    },
    {
      position: "Developer at TROC",
      dates: "August - December 2021",
      responsibilities: [
        "Code organization and performance improvement in the system.",
        "Backend development in Laravel.",
        "Implementation of search engine with ElasticSearch.",
        "Automation of banners with Revive ADS.",
      ],
    },
    {
      position: "Freelance Developer at Pratx",
      dates: "November 2020 - Present",
      responsibilities: [
        "Maintenance and development of solutions in JAVA 8, MySQL, Jasper.",
        "Implementation of complete solution for markets.",
        "Freelance Developer at Pratx",
      ],
    },
    {
      position: "Marketing Analyst at Via Sonho, Altinho/PE",
      dates: "April 2019 - August 2020",
      responsibilities: [
        "Significant growth of the company's social media presence by over 800%.",
        "Development of the company's e-commerce website (Woocommerce).",
        "Development of a basic ERP system (Laravel).",
      ],
    },
    {
      position: "Freelance Developer, Altinho/PE",
      dates: "2016 - 2019",
      responsibilities: [
        "Development of WordPress websites for regional companies and the Catholic Church in the city.",
      ],
    },
  ];
  return (
    <main className="bg-gray-800 text-white">
      <header className="contents h-screen">
        <nav className="pt-3">
          <ul className="flex justify-center text-gray-400">
            <li className="flex">
              <a className="p-6" href="/">
                Home
              </a>
            </li>
            <li className="flex">
              <a className="p-6" href="/">
                Blog
              </a>
            </li>
            <li className="flex">
              <a className="p-6" href="/">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
        <Container>
          <Section className="grid grid-cols-1 md:grid-cols-2">
            <header className="flex flex-col h-full justify-center gap-4">
              <p className="text-6xl">Hello, I&apos;m</p>
              <h1 className="flex text-7xl mb-10 gap-4">
                <TextUnderline>Paulo</TextUnderline>Cunha
              </h1>
              <h2 className="text-2xl text-gray-400">
                Software developer specializing in web apps
              </h2>
              <div className="mt-10">
                <a
                  href="https://www.linkedin.com/in/pauloracunha"
                  target="_blank"
                  className="inline-flex items-center gap-1 bg-transparent duration-200 hover:bg-gray-400 text-gray-400 hover:text-gray-800 font-bold py-4 px-8 rounded-full border border-gray-400"
                >
                  <FaLinkedin className="mb-0.5" /> Linkedin
                </a>
              </div>
            </header>
            <Image src={ProfilePic} alt="Paulo Cunha" />
          </Section>
        </Container>
      </header>
      <Section className="bg-gray-700 py-12">
        <Container>
          <Article title="Whoami" id="whoami">
            <p className="text-2xl leading-10 text-justify text-gray-400">
              I am a developer with over 5 years of experience working with PHP
              and 3 years with NodeJS, React, etc. I have expertise in
              developing luxury stores for renowned brands such as Dior,
              Cartier, Panerai, Nívea, Ricca, GNano, among others. I have been
              responsible for transitioning a monolithic system to an API-first
              approach with microservices and independent frontend, enabling
              contracts with major clients. Currently, I work as a software
              engineer at TRIVOD and as a full-stack developer at Ambra.
            </p>
          </Article>
        </Container>
      </Section>
      <Section title="Technologies" className="py-12">
        <Container className="grid grid-cols-3 gap-4">
          {skills &&
            Object.keys(skills).map((skill, index) => (
              <Card
                key={index}
                title={skill.toUpperCase()}
                className="bg-gray-900"
              >
                <ul className="text-xl leading-10 text-justify text-gray-400">
                  {/* @ts-ignore */}
                  {skills[skill].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
        </Container>
      </Section>
      <Section title="Work Experience" className="py-12">
        <Container className="grid grid-cols-3 gap-4">
          {workExperience.map((experience, index) => (
            <Card
              key={index}
              title={experience.position}
              className="bg-gray-900"
            >
              <h3 className="text-2xl mb-6">{experience.dates}</h3>
              <ul className="text-xl leading-10 text-justify text-gray-400">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </Container>
      </Section>
      <footer className="bg-gray-900 py-12">
        <Container className="flex justify-between text-gray-400">
          <Link
            className="flex items-center gap-2 hover:text-gray-100 duration-200"
            href="mailto:paulo.racunha@gmail.com"
            target="_blank"
          >
            <FaMailBulk /> paulo.racunha@gmail.com
          </Link>
          <p>2023 | Paulo Cunha</p>
          <Link
            className="flex items-center gap-2 hover:text-gray-100 duration-200"
            href="https://api.whatsapp.com/send?phone=5581996587588"
            target="_blank"
          >
            <FaWhatsapp /> Whatsapp
          </Link>
        </Container>
      </footer>
    </main>
  );
}
