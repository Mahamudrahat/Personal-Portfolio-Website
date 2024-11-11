// src/components/ExperienceCard.js
import React from "react";

const ExperienceCard = ({ role, company, duration, responsibilities }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold">{role}</h2>
      <h3 className="text-lg text-gray-400">{company}</h3>
      <p className="text-sm text-gray-500 mb-4">{duration}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
