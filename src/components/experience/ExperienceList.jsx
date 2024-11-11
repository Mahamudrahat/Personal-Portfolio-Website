// src/components/Experience.js
import React from "react";
import ExperienceCard from "./ExperienceCard";


const experiences = [
  {
    role: "Assistant Programmer (Software Developer)",
    company: "Department of ICT, ICT Division",
    duration: "DEC 2022 - PRESENT",
    responsibilities: [
      "Working on two projects: 1. Smart office management system 'SOMS' web client application for office management system to make office paperless. 2. National Training Portal",
      "Developing microservice architecture with different features and responsibilities.",
      "Working on requirements analysis, system design, API, and schema design.",
      "Contributing to version updates, bug fixes, feature releases, and the development of unit and integration tests.",
    ],
  },
  {
    role: "Officer (IT)",
    company: "Sonali Bank",
    duration: "JUN 2021 - NOV 2022",
    responsibilities: [
      "Developing, testing, and maintaining banking software and applications.",
      "Data driven analysis & report generation.",
    ],
  },
  {
    role: "Engineer | IT Operation & QA",
    company: "Progoti Systems Ltd (SureCash & TallyKhata)",
    duration: "AUG 2018 - MAY 2021",
    responsibilities: [
      "Worked on two products: 1. SureCash 2. Tallykhata.",
      "Developed Automation System to enhance and optimize technical operation & customer service.",
      "Data driven analysis and making decisions to optimize business.",
      "Collaborated with teams to find problems and solutions, contributed to bug fixes, and feature releases.",
      "Established API integration with third-party applications.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center container mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-orange-900 mb-8">Professional Experience</h1>
      <div className="max-w-4xl w-full">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience.role}
            company={experience.company}
            duration={experience.duration}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
