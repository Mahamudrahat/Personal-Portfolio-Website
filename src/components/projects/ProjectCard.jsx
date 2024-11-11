// src/components/ProjectCard.js
import React from "react";

const ProjectCard = ({ name, github, live, technologies }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="flex space-x-4 my-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500"
          >
            Live Demo
          </a>
        )}
      </div>
      <div className="text-gray-300 mt-2">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </div>
    </div>
  );
};

export default ProjectCard;
