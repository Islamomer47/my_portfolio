import React from "react";
import { ArrowRight } from "lucide-react";
import GlowingButton from "./GlowingButton";
import ShapeDecoration from "./ShapeDecoration";
import { useNavigate } from "react-router-dom";

const teachingSubjects = [
  {
    title: "Full-Stack Development",
    icon: "💻",
    description:
      "Learn full-stack development through hands-on projects, covering both frontend and backend technologies, from concept to deployment.",
  },
  {
    title: "University Subjects",
    icon: "📚",
    description:
      "Get help with university courses like C++, Data Structures, Algorithms, and Web Development. I will guide you through difficult concepts and ensure you understand them step by step.",
  },
  {
    title: "Graduation Projects Support",
    icon: "🎓",
    description:
      "I’ll guide you through the process of your graduation project, ensuring you understand each part and can complete it yourself—without doing it for you.",
  },
];

const TeachingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <ShapeDecoration className="transform scale-75 sm:scale-85 -rotate-12" />

      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 sm:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 sm:mb-8">
            Ready to learn programming the right way?
          </h2>
          <p className="text-lg sm:text-2xl text-center text-gray-600 mb-12 sm:mb-16">
            I’ll guide you through hands-on learning and support you in your
            journey. Whether you're working on university subjects or a
            graduation project, I'm here to help you step by step.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 sm:mb-16">
            {teachingSubjects.map((subject, index) => (
              <div
                key={subject.title}
                className="group bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-white/20"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="text-4xl sm:text-5xl mb-6">{subject.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {subject.title}
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                  {subject.description}
                </p>
                <a
                  href="/services"
                  className="text-purple-600 group-hover:text-purple-800 flex items-center gap-2 font-medium"
                >
                  Learn More
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <GlowingButton
              onClick={() => navigate("/services")}
              className="bg-gradient-to-r from-purple-600 to-pink-600"
            >
              View All services
            </GlowingButton>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeachingSection;
