import React, { useState } from "react";
import { Mail, Github, ArrowRight } from "lucide-react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import TeachingSection from "../components/home/TeachingSection";
import ProjectsSection from "../components/home/ProjectsSection";
import ShapeDecoration from "../components/home/ShapeDecoration";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [language, setLanguage] = useState("en");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-pink-50">
      {/* Floating Shapes with Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200/30 rounded-full animate-pulse blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-200/30 rounded-lg rotate-45 animate-bounce blur-xl" />
        <div className="absolute bottom-40 left-30 w-16 h-16 bg-yellow-200/30 rounded-full animate-pulse blur-xl" />
        <div className="absolute top-60 left-1/2 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section - Super Enhanced */}
      <HeroSection />

      {/* About Section - Enhanced with Glassmorphism */}

      <AboutSection />

      {/* Services Section - With Floating Cards */}
      <ServicesSection />

      {/* Teaching Section - With Enhanced Cards */}

      <TeachingSection />

      {/* Projects Section - With Hover Effects */}
      <ProjectsSection />

      {/* Testimonials Section
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <ShapeDecoration />
        <div className="relative">
          <div className="absolute bottom-0 left-10 transform scale-75 rotate-90"></div>
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Client Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            Hear what my clients have to say about working together
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="group bg-white/40 backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-white/20"
              >
                <div className="text-4xl sm:text-6xl text-blue-600/20 mb-6">
                  "
                </div>
                <p className="text-gray-600 text-lg sm:text-xl italic mb-8 leading-relaxed">
                  Exceptional work! The attention to detail and problem-solving
                  skills made our project a great success. Working together was
                  a breeze, and the results exceeded our expectations. I highly
                  recommend their services to anyone looking for top-tier
                  development work.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full" />
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl">John Smith</h4>
                    <p className="text-gray-600">Project Manager, Tech Co</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <GlowingButton className="bg-gradient-to-r from-blue-600 to-purple-600">
              View All Testimonials
            </GlowingButton>
          </div>
        </div>
      </section> */}

      {/* Contact Section*/}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <ShapeDecoration className="transform scale-75 sm:scale-85 -rotate-45" />

        <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-12 sm:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-3xl" />
          <div className="relative text-center text-black">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl sm:text-2xl mb-8 sm:mb-12 opacity-90 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how I can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-full hover:bg-gray-50  hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3"
              >
                <Mail size={20} />
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-black text-black rounded-full hover:bg-white/10 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2 sm:gap-3"
              >
                View Contact Info
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
