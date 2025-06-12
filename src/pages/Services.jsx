import React from "react";
import HeaderSection from "../components/Service/HeaderSection";
import ServicesSection from "../components/Service/ServicesSection";
import { useNavigate } from "react-router-dom";
const MyServicesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 font-sans">
      {/* Header Section */}
      <HeaderSection />

      {/* Services Section */}
      <ServicesSection />
      {/* Detailed Services Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Web Development Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="inline-block bg-purple-100 p-3 rounded-lg mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Full-Stack Web Development & Freelance Projects
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With experience in{" "}
                <span className="font-semibold text-purple-800">
                  React, Node.js, PostgreSQL, Firebase, MongoDB, and APIs
                </span>
                , I develop{" "}
                <span className="font-semibold text-purple-800">
                  dynamic, high-performance
                </span>{" "}
                web applications tailored to your business needs. My work
                includes:
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Frontend & Backend Development",
                    desc: "Using modern frameworks and best practices to create fast, interactive user experiences.",
                  },
                  {
                    title: "E-commerce, Streaming, & Event Platforms",
                    desc: "Developed platforms including election management systems, movie-streaming platforms, and event ticketing systems.",
                  },
                  {
                    title: "Hosting, Deployment & Security",
                    desc: "Ensuring seamless deployment on platforms like Vercel, Netlify, and cloud services with proper security measures.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                  >
                    <div className="bg-green-500 text-white rounded-full p-1 flex items-center justify-center mr-3 h-6 w-6 flex-shrink-0 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-800">{item.title}</strong> –{" "}
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Solutions Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="inline-block bg-blue-100 p-3 rounded-lg mb-6">
                <span className="text-3xl">⚙️</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                Custom Software Solutions & Tech Consulting
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Need help planning your tech stack or building{" "}
                <span className="font-semibold text-blue-800">
                  scalable software solutions
                </span>
                ? I provide:
              </p>

              <div className="space-y-5 mb-8">
                {[
                  {
                    title: "Custom-Built Solutions",
                    desc: "Tailored software applications designed to solve business-specific challenges.",
                  },
                  {
                    title: "Tech Stack Guidance",
                    desc: "Helping startups and businesses choose the right technologies for long-term growth.",
                  },
                  {
                    title: "System Architecture & Optimization",
                    desc: "Ensuring your application is scalable, secure, and efficient.",
                  },
                  {
                    title: "Agile & Scrum Development",
                    desc: "Implementing best practices for efficient software delivery.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="bg-green-500 text-white rounded-full p-1 flex items-center justify-center mr-3 h-6 w-6 flex-shrink-0 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-800">{item.title}</strong> –{" "}
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Education & Mentorship Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-600 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="inline-block bg-indigo-100 p-3 rounded-lg mb-6">
                <span className="text-3xl">📚</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Programming Education & Mentorship
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <span className="font-semibold text-indigo-800">
                  Learning programming should be practical, structured, and
                  engaging!
                </span>{" "}
                My teaching style is focused on
                <span className="font-semibold text-indigo-800">
                  {" "}
                  learning by doing
                </span>
                , ensuring students build projects and gain hands-on experience.
                I offer:
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Full-Stack Development Training",
                    desc: "Learn how to build real-world applications from scratch, covering frontend, backend, APIs, and deployment.",
                  },
                  {
                    title: "University Subject Support",
                    desc: "Struggling with C++, Data Structures, OOP, Algorithms, or Web Development? I break down complex topics into simple, understandable steps.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <div className="bg-green-500 text-white rounded-full p-1 flex items-center justify-center mr-3 h-6 w-6 flex-shrink-0 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-gray-800">{item.title}</strong> –{" "}
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Work With Me Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-3 pb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent inline-block">
                Why Work With Me?
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "Hands-on experience",
                  desc: "Built 10+ real-world projects, including platforms for elections, streaming, ticketing, and AI-driven chatbots.",
                },
                {
                  icon: "🧠",
                  title: "Structured learning & problem-solving approach",
                  desc: "I focus on how to think like a developer, not just writing code.",
                },
                {
                  icon: "👥",
                  title: "Proven technical & leadership skills",
                  desc: "Experience as a Scrum Master, Product Owner, and Quality Assurance Lead in team projects.",
                },
                {
                  icon: "🔄",
                  title: "Flexible & scalable solutions",
                  desc: "Whether you're a business needing a full-stack developer or a student seeking structured programming guidance, I tailor my approach to your needs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-5 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-lg p-3 flex items-center justify-center mr-4 h-12 w-12 flex-shrink-0 shadow-md">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <strong className="text-lg font-semibold text-gray-800 block mb-1">
                      {item.title}
                    </strong>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your next project?
          </h2>
          <p className="mb-8 text-black/90">
            Whether you need a custom web application, technical guidance, or
            programming education, I'm here to help you achieve your goals.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyServicesPage;
