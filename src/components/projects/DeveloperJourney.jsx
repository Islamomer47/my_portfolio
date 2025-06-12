import React from "react";
import ShapeDecoration from "../home/ShapeDecoration";

// Timeline Data
const journeyData = [
  {
    date: "2021",
    title: "Started Computer Information Systems",
    desc: "Began my bachelor's degree at Hashemite University, focusing on the fundamentals of computer science and programming.",
    icon: "🎓",
    side: "left",
    color: "from-pink-500 to-purple-500",
  },
  {
    date: "2022",
    title: "First Web Development Projects",
    desc: "Created my first responsive websites using HTML, CSS, and JavaScript while learning the foundations of modern web development.",
    icon: "💻",
    side: "right",
    color: "from-purple-500 to-indigo-500",
  },
  {
    date: "2023",
    title: "Advanced Frontend & Backend Studies",
    desc: "Expanded my skills with React.js for frontend and Node.js for backend development through intensive self-learning and online courses.",
    icon: "🔧",
    side: "left",
    color: "from-indigo-500 to-blue-500",
  },
  {
    date: "2024 (May-Nov)",
    title: "Orange Coding Academy",
    desc: "Completed an intensive full stack web development bootcamp, building real-world projects and working in agile teams.",
    icon: "🚀",
    side: "right",
    color: "from-blue-500 to-cyan-500",
  },
  {
    date: "Present",
    title: "Full Stack Developer",
    desc: "Currently building innovative web applications while continuing to expand my technical skills and knowledge.",
    icon: "🌟",
    side: "left",
    color: "from-cyan-500 to-teal-500",
  },
];

// Timeline Item Component
const TimelineItem = ({ item }) => {
  const isLeft = item.side === "left";

  return (
    <div className="relative z-10 mb-12">
      <div
        className={`flex items-center ${
          isLeft ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* Content Box */}
        <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8"}`}>
          <div
            className={`p-6 rounded-xl ring-4 ring-transparent bg-white bg-opacity-80 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
              "--tw-gradient-from": `var(--tw-gradient-stops, ${
                item.color.split(" ")[0]
              })`,
              "--tw-gradient-to": `${item.color.split(" ")[1]}`,
              boxShadow: `0 4px 20px -5px rgba(0, 0, 0, 0.1)`,
            }}
          >
            <div
              className={`inline-block py-1 px-3 mb-3 rounded-full text-sm font-medium text-white bg-gradient-to-r ${item.color}`}
            >
              {item.date}
            </div>
            <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>

        {/* Icon */}
        <div className="relative flex items-center justify-center">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center z-10 text-xl text-white bg-gradient-to-r ${item.color}`}
          >
            {item.icon}
          </div>
        </div>

        {/* Spacer */}
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

const DeveloperJourney = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-black">
            My Developer Journey
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Explore the milestones that shaped my path as a developer
          </p>
        </div>

        {/* Vertical Timeline Line */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500" />

          {/* Timeline Items */}
          {journeyData.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}

          {/* Shapes */}
          <ShapeDecoration className="top-20 right-10 sm:right-40" />
          <ShapeDecoration className="bottom-40 left-10 sm:left-20 rotate-90" />

          {/* CTA */}
          <div className=" relative z-10 text-center mt-20">
            <div className="inline-block p-6 rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-100 to-pink-100 border border-gray-200 shadow">
              <p className="text-black mb-4">
                Ready to collaborate on your next project?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:islamomar0003@gmail.com"
                  className="py-2 px-6 bg-blue-500 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
                >
                  Get In Touch
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-6 bg-black text-white hover:bg-gray-800 rounded-full transition-colors duration-300"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperJourney;
