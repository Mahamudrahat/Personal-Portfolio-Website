import React, { useState } from 'react';

const bannerList = [
  'https://glowmeko.s3.amazonaws.com/others/423147634-404469568903266-6985937685234659620-n.webp',
  'https://glowmeko.s3.amazonaws.com/others/423147634-404469568903266-6985937685234659620-n.webp'
];

export default function Banner() {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? bannerList.length - 1 : curr - 1));

  const next = () => setCurr((curr) => (curr === bannerList.length - 1 ? 0 : curr + 1));

  return (
    <div className="container mx-auto mt-2 mb-2">
    <div className="hero bg-gray-900 min-h-2/3 rounded-lg">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-start justify-between w-full">
  <div className="text-center lg:text-left w-full lg:w-1/2">
    <h1 className="text-4xl lg:text-5xl font-bold text-white">This is Mahamud!</h1>
    <p className="py-6 text-white">
      I'm a software developer using Frontend, backend, AI/ML to solve real problems with a human touch. Driven by curiosity, coffee, and coding—plus a dash of humor!
    </p>
    <a href="/resume.pdf" download>
  <button className="bg-orange-900 text-white p-2 rounded-md">My Resume</button>
</a>
  </div>

  <img
    src="mahamud.jpeg"
    className=" w-100 h-100 max-w-full lg:max-w-sm rounded-lg shadow-2xl lg:self-start"
    alt="Hero"
  />
</div>
    </div>
  </div>
  );
}
