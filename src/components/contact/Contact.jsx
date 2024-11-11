// src/components/Contact.js
import React from "react";
import ContactCard from "./ContactCard";

const Contact = () => {
  const contacts = [
    {
      image: "mahamud.jpeg", // Replace with actual image URL
      name: "Md.Mahamud Hasan",
      mobile: "+880 1672212268",
      email: "rahat.ruet@gmail.com",
      linkedin: "https://www.linkedin.com/in/mahamud-hasan/",
      github:"https://github.com/Mahamudrahat",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-6 flex flex-col items-center container mx-auto shadow-2xl mt-8 rounded-lg">
      <h1 className="text-3xl font-bold text-orange-900 mb-8">Contact</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            image={contact.image}
            name={contact.name}
            mobile={contact.mobile}
            email={contact.email}
            linkedin={contact.linkedin}
            github={contact.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
