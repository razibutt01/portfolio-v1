"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React js.</li>
        <li>Next js.</li>
        <li>Node.js & Express</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>Mongo DB</li>
        <li>Material UI , Tailwind Css & more</li>
        <li>Jotai,Redux & Redux Toolkit</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fsc Pre-Engineering : Punjab Group of Colleges (2017-2018)</li>
        <li>Bachelor&apos;s in Computer Science : University of Engineering & Technology, Lahore (2019-2023)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Development : Ideoversity , Lahore.</li>
        <li>Computer Foundation : Peak Solutions , Lahore.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about-me" width={700} height={700} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a passionate frontend developer with two years of experience, I specialize in crafting dynamic web
            experiences using technologies like Next.js, React, TypeScript, and Material UI. Proficient in leveraging
            tools such as Bootstrap, Tailwind CSS, and Node.js, I excel in building responsive, modern web applications.
            With a solid foundation in ES6, GIT, and REST API integration, I am adept at implementing state management
            solutions like Redux , Jotai and React Hooks. My commitment to clean code and continuous learning drives me
            to stay updated with the latest trends and best practices in JavaScript development, ensuring high-quality,
            scalable solutions for every project.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
