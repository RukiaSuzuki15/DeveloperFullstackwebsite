"use client";

import { useState } from "react";
import Logo from "../logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header className="navbar top-0 left-0 z-70 w-full bg-white shadow-md">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-6">
         <a href="#hero" className="hover:text-primary transition-colors"> Home</a>
        <a href="#about-me" className="hover:text-primary transition-colors">About me</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#education-skills" className="hover:text-primary transition-colors">Education skill</a>
          <a href="#latest-work" className="hover:text-primary transition-colors">Latest Works</a>

          <button
            onClick={handleDownloadPDF}
            className="relative overflow-hidden cursor-pointer w-fit py-2 px-4 border border-primary rounded-full group ml-4"
          >
            <span className="relative z-10 text-lg font-medium text-black group-hover:text-white transition-colors duration-300">
              Download PDF Resume
            </span>
          </button>
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl relative z-10 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start gap-3 px-6">
        <a href="#hero" className="hover:text-primary transition-colors"> Home</a>
        <a href="#about-me" className="hover:text-primary transition-colors">About me</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          <a href="#education-skills" className="hover:text-primary transition-colors">Education skill</a>
          <a href="#latest-work" className="hover:text-primary transition-colors">Latest Works</a>

          <button
            onClick={handleDownloadPDF}
            className="relative overflow-hidden cursor-pointer w-fit py-2 px-4 border border-primary rounded-full group mt-2"
          >
            <span className="relative z-10 text-lg font-medium text-black group-hover:text-white transition-colors duration-300">
              Download PDF Resume
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
                          
