// src/components/Navbar.js
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        <h1 className="text-white text-2xl font-bold">MyPortfolio</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          <li><Link to={ROUTES.Home} className="hover:text-gray-400">Home</Link></li>
          <li> <Link to={ROUTES.Skilllist} className="hover:text-gray-400">Skills</Link></li>
          <li><Link to={ROUTES.ProjectList} className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${navOpen ? "block" : "hidden"} md:hidden bg-gray-800`}>
        <ul className="space-y-4 py-4 px-8 text-white font-semibold">
          <li><Link to={ROUTES.Home} onClick={toggleNav} className="hover:text-gray-400">Home</Link></li>
          <li><Link to={ROUTES.Skilllist} onClick={toggleNav} className="hover:text-gray-400">Skills</Link></li>
          <li><Link to={ROUTES.ProjectList} onClick={toggleNav} className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" onClick={toggleNav} className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
