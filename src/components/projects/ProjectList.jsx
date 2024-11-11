// src/components/ProjectList.js
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Online Edu Care BookShop",
    github: "https://github.com/Mahamudrahat/Online-book-selling-platform-cliend-end",
    live: "https://online-edu-care-7b821.web.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB","Tailwind CSS"],
  },
  {
    name: "Old Town Bookstore",
    github: "https://github.com/Mahamudrahat/bookshop-webapp",
    live: "https://oldtownbookstore.netlify.app/",
    technologies: ["React", "Node.js", "Express","Tailwind CSS"],
  },
  {
    name: "Old Town Kitchen",
    github: "https://github.com/Mahamudrahat/old-town-kitchen",
    live: "https://mahamudrahat.github.io/old-town-kitchen/",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    name: "AIstring-name-matching",
    github: "https://github.com/Mahamudrahat/AIstring-name-matching",
    live: null,
    technologies: ["Python", "Machine Learning"],
  },
  {
    name: "Machine Learning Projects",
    github: "https://github.com/Mahamudrahat/python-analytics-scripts",
    live: null,
    technologies: ["Python", "Machine Learning","Numpy","Pandas"],
  },
  {
    name: "Problem Solving",
    github: "https://github.com/Mahamudrahat/Problem-Solving-LeetCode",
    live: null,
    technologies: ["Python", "Javascript","C"],
  },
];

const ProjectList = () => {
  return (
    <div className="bg-white min-h-screen p-6 flex flex-col items-center container mx-auto rounded-lg shadow-2xl mt-4">
      <h1 className="text-3xl font-bold text-orange-900 mb-8">Projects</h1>
      <div className="max-w-4xl w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            github={project.github}
            live={project.live}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
