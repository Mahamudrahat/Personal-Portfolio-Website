// src/components/ContactCard.js
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactCard = ({ image, name, mobile, email, linkedin,github }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-400">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-400 mb-2">{mobile}</p>
      
      {/* Email Section */}
      <a
        href={`mailto:${email}`}
        className="text-red-400 hover:text-red-500 flex items-center space-x-2 mb-2"
      >
        <MdEmail size={20} />
        <span>{email}</span>
      </a>

      {/* LinkedIn Section */}
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500 flex items-center space-x-2"
      >
        <FaLinkedin size={20} />
        <span>{linkedin}</span>
      </a>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500 flex items-center space-x-2"
        >
          <FaGithub size={20} />
          <span>{github}</span>
        </a>
      )}
    </div>
  );
};

export default ContactCard;
