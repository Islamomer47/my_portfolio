import React from "react";
import Image from "../../assets/aboutme.png";
import ShapeDecoration from "../home/ShapeDecoration";
import { useNavigate } from "react-router-dom";

const ExpertiseSection = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-16 pb-[160%] sm:pb-16 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ShapeDecoration className="top-20 right-10 sm:right-40" />
        {/* Purple Indicator */}
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3 shadow-md animate-bounce">
            <span className="text-white text-sm font-semibold">💻</span>
          </div>
          <span className="text-gray-700 text-base font-medium">
            Discover My Expertise
          </span>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col md:flex-row items-start gap-14">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Full-Stack{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text italic">
                Development Skills
              </span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-xl text-lg leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold">
                building scalable web applications
              </span>
              , integrating modern frontend and backend technologies, and
              optimizing software for performance and security.
            </p>

            {/* Call to Action */}
            <button
              onClick={() => navigate("/projects")}
              className="mt-6 bg-black hover:bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center"
            >
              View My Work
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Center Image & Dashboard Elements */}
          <div className="relative w-full flex justify-center px-16 py-10">
            {/* Main Person Image */}
            <div className="relative z-1 space-x-2 bottom-4">
              <img
                src={Image}
                alt="Developer working on code"
                className="w-80 md:w-96 rounded-lg shadow-2xl border border-gray-300"
              />
            </div>

            {/* Floating Tech Stack Card (Hidden on mobile/tablet) */}
            <div className="absolute top-[-5%] left-10 bg-white rounded-xl shadow-xl p-5 w-60 transform hover:scale-105 transition duration-300 border border-gray-200 hidden md:block">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-2 pr-4">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Next.js",
                  "TypeScript",
                  "Javascript",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 text-xs font-semibold py-2 px-1 rounded-md text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-gray-600 italic text-xs text-center">
                "Technology is best when it brings people together." – Matt
                Mullenweg
              </div>
            </div>

            {/* Floating Key Skills Card (Hidden on mobile/tablet) */}
            <div className="absolute top-20 right-10 bg-white rounded-xl shadow-xl p-5 w-60 transform hover:scale-105 transition duration-300 border border-gray-200 mt-9 hidden md:block">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2 p">
                {[
                  "Problem Solving",
                  "System Design",
                  "API Development",
                  "Database Management",
                  "Version Control",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-pink-500 text-white text-sm py-1 px-3 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-gray-600 italic text-xs text-center">
                "The function of good software is to make the complex appear
                simple." – Grady Booch
              </div>
            </div>

            {/* Stack the cards on mobile/tablet view */}
            <div className="md:hidden flex flex-col gap-4 absolute top-[-15%] left-1/2 transform -translate-x-1/2 pt-96 ">
              {/* Tech Stack Card */}
              <div className="bg-white rounded-xl shadow-xl p-5 w-60 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 gap-2 pr-4">
                  {[
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "PostgreSQL",
                    "Next.js",
                    "TypeScript",
                    "Javascript",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 text-xs font-semibold py-2 px-1 rounded-md text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-gray-600 italic text-xs text-center">
                  "Technology is best when it brings people together." – Matt
                  Mullenweg
                </div>
              </div>

              {/* Key Skills Card */}
              <div className="bg-white rounded-xl shadow-xl p-5 w-60 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Key Skills
                </h3>
                <div className="flex flex-wrap gap-2 p">
                  {[
                    "Problem Solving",
                    "System Design",
                    "API Development",
                    "Database Management",
                    "Version Control",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="bg-pink-500 text-white text-sm py-1 px-3 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-gray-600 italic text-xs text-center">
                  "The function of good software is to make the complex appear
                  simple." – Grady Booch
                </div>
              </div>
            </div>

            {/* Arrow Icons (Hidden on mobile and tablet) */}
            <svg
              className="absolute top-[55%] left-24 w-16 h-16 text-blue-400 animate-pulse rotate-[260deg] hidden md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h12m0 0l-4-4m4 4l-4 4"
              />
            </svg>
            <svg
              className="absolute top-5 right-24 w-16 h-16 text-green-400 animate-pulse rotate-[260deg] hidden md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
