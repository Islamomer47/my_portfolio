import React from "react";
import GlowingButton from "./GlowingButton";
import ShapeDecoration from "./ShapeDecoration";
import Image from "../../assets/aboutme.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20 ">
      <ShapeDecoration className="transform scale-75" />

      <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20 overflow-hidden bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
        <div className="relative flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20" />
            <img
              src={Image}
              alt="Profile"
              className="
                w-48 h-48          
                sm:w-64 sm:h-64    
                md:w-80 md:h-80    
                lg:w-96 lg:h-96  
                max-w-80
                rounded-full
                object-cover
                shadow-2xl
                border-4 border-white/50
              "
            />
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-black to-purple-600 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
              I’m Islam Omar, a full-stack web developer with a strong
              foundation in front-end and back-end technologies, honed through
              intensive training at Orange Coding Academy and my Computer
              Information Systems studies at Hashemite University. I've built
              impactful projects like election management systems, event
              ticketing platforms, and entertainment streaming services. My
              skills cover JavaScript, React, Node.js, PostgreSQL, and Firebase,
              along with expertise in creating secure REST APIs, real-time
              communication systems, and integrating payment solutions like
              PayPal and Stripe.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
              {[
                "React",
                "Node.js",
                "PostgreSQL",
                "Firebase",
                "Tailwind",
                "Express.js",
                "Next js",
                "Mongo db",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-3 bg-white/50 backdrop-blur-sm text-blue-800 rounded-full text-base font-medium hover:bg-white/70 transition-colors shadow-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
            <GlowingButton onClick={() => navigate("/about")}>
              More about me
            </GlowingButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
