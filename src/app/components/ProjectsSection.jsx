"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: `
    In the E-commerce Website project, I built an online store with Material UI and Next.js, integrating the Context API for seamless payment and state management. The responsive interface supports order management and a shopping cart. Meanwhile, in the Todo-List project, I developed a user-friendly to-do app with React.js and CRUD functionality for task management.`,
    image: "/images/projects/1.png",
    tag: ["All", "Frontend"],
    gitUrl: "https://github.com/razibutt01/E-commerce-website-main/tree/edevelop",
    previewUrl: "#",
  },
  {
    id: 2,
    title: "Coupon Code Master for Google Sheets ",
    description: `
    I developed the Coupon Code Master Add-on for Google Sheets using AppScript, enabling users to generate and distribute unique discount codes with automated email delivery. The add-on includes a secure payment integration and was crafted to enhance practical skills in web application development while improving coding abilities.`,
    image: "/images/projects/2.png",
    tag: ["All", "Frontend"],
    gitUrl: "#",
    previewUrl: "https://workspace.google.com/marketplace/app/couponcodemaster/810936815578",
  },
  {
    id: 3,
    title: "Character Strong",
    description: `
    I collaborated with the Powerstation software team as an Associate Software Engineer, developing static pages for the Character Strong website using React and TypeScript. I made alignment changes, added animations, and worked closely with designers and product managers to ensure accurate implementation of design specifications. Conducting code reviews and providing regular updates, I maintained high code quality and contributed to meeting project goals within set timelines.`,
    image: "/images/projects/3.png",
    tag: ["All", "Frontend"],
    gitUrl: "#",
    previewUrl: "https://characterstrong.com/",
  },
  {
    id: 4,
    title: "AL Libas AL Asri Website",
    description: `I developed an e-commerce website for "AL Libas AL Asri" clothing brand using MERN stack and Redux. It offers secure user authentication, intuitive navigation, and streamlined checkout. With modern design and seamless functionality, it provides customers a tailored shopping experience.`,
    image: "/images/projects/4.png",
    tag: ["All", "MERN"],
    gitUrl: "#",
    previewUrl: "https://allibasalasri.com/",
  },
  {
    id: 5,
    title: "Big Byte Insights",
    description: `
    I collaborated with a team on the Big Byte Insights project to create a responsive product using React, TypeScript, and Redux Toolkit. Our focus was on delivering a seamless user experience across various devices by leveraging these technologies. Through teamwork and expertise in these frameworks, we successfully developed a dynamic and user-friendly product that met the project requirements.`,
    image: "/images/projects/5.png",
    tag: ["All", "Frontend"],
    gitUrl: "#",
    previewUrl: "https://bdadevs.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Frontend" isSelected={tag === "Frontend"} />
        <ProjectTag onClick={handleTagChange} name="MERN" isSelected={tag === "MERN"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
