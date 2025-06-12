import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Hover effect for nav links
  const navLinkStyle =
    "relative px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group";
  const navLinkAfter =
    "absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full";

  return (
    <nav className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 md:px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="/"
            className="text-lg md:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Dev. Islam Omar<span className="text-blue-600">.</span>
          </a>
        </div>

        {/* Separator */}
        <div className="hidden md:block mx-8 h-6 w-px bg-gray-200" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-2">
          {["About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className={navLinkStyle}
            >
              {item}
              <div className={navLinkAfter} />
            </a>
          ))}
        </div>

        {/* Right Section - Language Switcher & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher with Dropdown
          <LanguageSwitcher /> */}

          {/* Hire Me Button */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {["About", "Services", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2 hover:bg-gray-50 rounded-lg"
                >
                  {item}
                </a>
              ))}
              <div className="border-t border-gray-100 pt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Language Switcher visible outside the mobile menu
      <div className="md:hidden absolute top-4 right-1 transform -translate-x-1/2">
        <LanguageSwitcher />
      </div> */}
    </nav>
  );
};

export default Navbar;
