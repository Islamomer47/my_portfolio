import { projects } from "../../data/projects";
import React, { useState } from "react";
const milestones = [
  {
    icon: "📊",
    title: "The Elections Project — Recognized Excellence",
    gradient: "from-slate-900 via-blue-900 to-slate-800",
    borderColor: "border-yellow-400",
    titleColor: "text-yellow-300",
    highlightColor: "text-yellow-200",
    description:
      "My elections system was proudly selected as one of the top-performing projects, leading to an official discussion with the Independent Election Commission. The experience was both an honor and a milestone—proving that tech can bridge civic duty and digital innovation.",
    highlights: ["top-performing projects", "Independent Election Commission"],
  },
  {
    icon: "🎓",
    title: "Rate Mate — A Vision for Jordan's Future",
    gradient: "from-blue-900 via-indigo-800 to-purple-900",
    borderColor: "border-green-400",
    titleColor: "text-green-300",
    highlightColor: "text-green-200",
    description:
      "As part of my graduation from Orange Academy, I presented Rate Mate—an idea-driven solution praised for its real-world impact. The project was acknowledged as one of the most valuable ideas to help Jordan grow digitally, with enthusiastic feedback from the judging committee.",
    highlights: ["Orange Academy", "one of the most valuable ideas"],
  },
  {
    icon: "🧩",
    title: "Tab Manager — Built for the Builders",
    gradient: "from-purple-900 via-pink-800 to-orange-600",
    borderColor: "border-pink-300",
    titleColor: "text-pink-200",
    highlightColor: "text-orange-200",
    description:
      "Tab Manager was my leap into browser extensions—a lightweight yet powerful tool designed to help developers and multitaskers manage their tabs effortlessly. It's now available on the Chrome Web Store, marking my step toward building tools that improve focus, efficiency, and developer experience.",
    highlights: [
      "Tab Manager",
      "developers and multitaskers",
      "Chrome Web Store",
    ],
  },
];
const ProjectCard = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);

  const isVideo = project.demo && project.demo.endsWith(".mp4");

  return (
    <>
      <div className="group perspective">
        <div className="relative h-96 preserve-3d transition-all duration-500 group-hover:my-rotate-y-180">
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden border border-gray-700 rounded-xl overflow-hidden shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-125 transition-all duration-300"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-30`} // تقليل الشفافية
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white backdrop-blur-sm">
              {" "}
              {/* blur أقل */}
              <div className="bg-black self-start py-1 px-3 rounded-full text-xs font-medium">
                Featured Project
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-black/30 text-xs px-2 py-1 rounded backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-white/90 font-medium line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full my-rotate-y-180 backface-hidden bg-black border border-gray-700 rounded-xl overflow-hidden p-8 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {project.title} Details
              </h3>
              <ul className="space-y-2 text-gray-300 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-3">
              {project.demo &&
                (isVideo ? (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300"
                  >
                    Watch Demo
                  </button>
                ) : (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 text-gray-300"
                  >
                    Live Demo
                  </a>
                ))}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20 text-white"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the video
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full px-3 py-1 z-50"
            >
              ✕
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded-xl shadow-lg"
              src={project.demo}
            />
          </div>
        </div>
      )}
    </>
  );
};

const FeaturedProjects = () => (
  <section className="py-20 md:max-w-[99%]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-black">
          Featured Projects
        </h2>
        <p className="text-black max-w-2xl mx-auto">
          Explore my latest web applications built with modern technologies and
          focused on delivering exceptional user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-28">
      <div className="text-center mb-16">
        <div className="inline-block p-3 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-full mb-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-black bg-clip-text text-transparent leading-tight">
          Milestones That Shaped My Journey
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-blue-300 mx-auto rounded-full"></div>
      </div>

      {/* Milestones Grid */}
      <div className="space-y-8 max-w-96 lg:max-w-full lg:space-y-12 ml-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="group relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-fugrll bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200 opacity-30"></div>

            {/* Timeline Dot */}
            <div className="hidden lg:block absolute left-6 top-8 w-5 h-5 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full border-4 border-white shadow-lg z-10"></div>

            {/* Card */}
            <div className="relative lg:ml-20 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-1 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] group-hover:shadow-pink-300/25">
              <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20">
                {/* Icon and Border */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-pink-200 to-purple-200 transform rotate-45"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-blue-300 rounded-t-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/40 backdrop-blur-sm rounded-2xl mb-6 text-3xl border border-white/30">
                    {milestone.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-purple-700 leading-tight">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-800 leading-relaxed text-base sm:text-lg lg:text-xl">
                    {milestone.description.split(" ").map((word, wordIndex) => {
                      const isHighlight = milestone.highlights.some(
                        (highlight) =>
                          highlight
                            .toLowerCase()
                            .includes(word.toLowerCase().replace(/[.,]/g, ""))
                      );

                      if (isHighlight) {
                        return (
                          <span
                            key={wordIndex}
                            className="font-semibold text-pink-600"
                          >
                            {word}{" "}
                          </span>
                        );
                      }
                      return word + " ";
                    })}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-white/20 to-white/10 rounded-full opacity-50"></div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-white/30 to-white/20 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decoration */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 text-pink-400">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-pink-300"></div>
          <span className="text-sm font-medium">Journey Continues</span>
          <div className="w-8 h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
