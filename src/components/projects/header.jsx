import React, { useState, useEffect } from "react";
import Image from "../../assets/aboutme.png";
import ShapeDecoration from "../home/ShapeDecoration";

const techStack = [
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative pt-20 pb-32 overflow-hidden z-10 flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent"></div>
      <div
        className="absolute top-0 right-0 h-96 w-96 rounded-full blur-[80px]"
        style={{
          background:
            "linear-gradient(45deg,  rgb(134 239 172 / 0.5), rgba(244, 114, 182, 0.1))",
          transform: `translateY(${scrollPosition * 0.2}px) translateX(${
            scrollPosition * -0.1
          }px)`,
        }}
      ></div>
      <div className="container mx-auto px-4 relative flex flex-col items-center">
        {/* Profile Section */}
        <div className="relative group mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
            <img
              src={Image}
              alt="Islam Omar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full shadow-lg">
            Full Stack
          </div>
        </div>
        {/* Header Text */}
        <div className="max-w-6xl">
          <ShapeDecoration className="top-20 right-10 sm:right-40" />
          <ShapeDecoration className="bottom-40 left-10 sm:left-20 transform rotate-90" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text leading-tight tracking-wide drop-shadow-lg">
            <span className="font-serif italic">Full Stack Developer</span>
          </h1>
          <p className="text-lg text-black mb-6 leading-relaxed">
            Crafting immersive digital experiences with cutting-edge technology.
            <span className="block mt-2">
              Building the future, one line of code at a time.
            </span>
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-110 shadow-md"
                style={{
                  background: `linear-gradient(135deg, 
                  ${
                    [
                      "#a5b4fc",
                      "#c4b5fd",
                      "#93c5fd",
                      "#6ee7b7",
                      "#fcd34d",
                      "#fca5a5",
                    ][index % 6]
                  } 0%, 
                  ${
                    [
                      "#818cf8",
                      "#a78bfa",
                      "#60a5fa",
                      "#34d399",
                      "#fbbf24",
                      "#f87171",
                    ][index % 6]
                  } 100%)`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#FF69B4"
            fillOpacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,138.7C672,149,768,139,864,122.7C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
