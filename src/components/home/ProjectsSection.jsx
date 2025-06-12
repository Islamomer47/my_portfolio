import React from "react";
import { Github, ExternalLink } from "lucide-react";
import GlowingButton from "./GlowingButton";
import ShapeDecoration from "./ShapeDecoration";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Independent Election Commission",
    description:
      "A secure platform for managing election data, results, and voter information, designed to ensure transparency and accuracy.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/api/placeholder/400/300",
  },
  {
    title: "Recipe-Hub",
    description:
      "A collaborative recipe-sharing platform where users can upload, share, and discover new recipes, with a focus on community interaction.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/api/placeholder/400/300",
  },
  {
    title: "Event’s Project",
    description:
      "A platform for managing events, including scheduling, ticketing, and guest lists, designed to streamline event coordination.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/api/placeholder/400/300",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        Explore some of my recent work, showcasing my full-stack development
        skills and problem-solving capabilities.
      </p>
      <ShapeDecoration className="transform scale-75 sm:scale-95 rotate-180" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-white/20 transform hover:-translate-y-2"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-white/50 backdrop-blur-sm text-gray-800 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <GlowingButton
          onClick={() => navigate("/projects")}
          className="bg-gradient-to-r from-blue-600 to-purple-600"
        >
          View All Projects
        </GlowingButton>
      </div>
    </section>
  );
};
export default ProjectsSection;
