import React from "react";
import Image from "../../assets/aboutme.png";

const Contentsections = () => (
  <>
    {/* Section 1 */}
    <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-20">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
        <div className="md:w-1/2 relative">
          <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-green-400 rounded-lg"></div>
          <img
            src={Image}
            alt="Developer working"
            className="rounded-lg shadow-xl w-full relative z-10"
          />
          <div className="absolute bottom-4 sm:bottom-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 border-2 border-blue-400 rounded-lg"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg z-20">
            <div className="flex items-center gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-pink-400 rounded-full flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm font-bold">
                "Making an impact, together"
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 relative">
            <span className="bg-yellow-200 px-2 py-1 -ml-2">I empower</span>{" "}
            small
            <br />
            business owners
          </h2>
          <div className="h-1 w-12 sm:w-16 bg-pink-400 mb-6 mx-auto md:mx-0"></div>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            I bring a versatile skill set to every project, capable of
            delivering robust and scalable solutions across the development
            stack. My skills include HTML, CSS, JavaScript, React, Node.js, Git,
            Tailwind, Data Structures, and OOP.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            I am also familiar with databases like PostgreSQL, MongoDB, and
            Firebase, as well as development practices like Scrum and Agile.
          </p>
          <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700">
            "My goal is to create meaningful websites and applications that make
            a difference."
          </blockquote>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="bg-gray-50 py-16 md:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="mb-12 relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            I help businesses to grow faster and bigger
          </h2>
          <div className="h-1 w-16 sm:w-24 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-700 text-base sm:text-lg mt-2 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            I've worked on several impactful projects including Recipe-Hub,
            Independent Election Commission, an Event Management system, and a
            Movie-Web Application.
          </p>

          {/* Decorative elements */}
          <div className="absolute top-4 sm:top-8 right-2 sm:right-4">
            <div className="w-4 sm:w-6 h-4 sm:h-6 border-2 border-green-400 rounded-full"></div>
          </div>
          <div className="absolute -bottom-6 sm:-bottom-8 left-1/4">
            <div className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 font-bold">
              +
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🔄",
              title: "Professional Team",
              description:
                "Worked within organized teams as a scrum master, product owner, and quality assurance.",
            },
            {
              icon: "🎯",
              title: "Target Oriented",
              description:
                "Focus on delivering robust and scalable solutions that meet client specifications.",
            },
            {
              icon: "📈",
              title: "Success Guarantee",
              description:
                "Building interactive and intuitive web interfaces through studies and hands-on projects.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-2xl sm:text-3xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-4">
                {item.title}
              </h3>
              <div className="h-1 w-10 sm:w-12 bg-pink-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Contentsections;
