import { ArrowRight } from "lucide-react";
import GlowingButton from "./GlowingButton";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Full-Stack Development",
    icon: "💻",
    description:
      "Comprehensive development of dynamic web applications using modern technologies, delivering both frontend and backend solutions.",
  },
  {
    title: "Custom Software Solutions",
    icon: "⚙️",
    description:
      "Tailored applications and systems to meet your unique business needs, ensuring high scalability and performance.",
  },
  {
    title: "Tech Strategy & Consulting",
    icon: "📊",
    description:
      "Strategic guidance on tech stack selection, system architecture, and best practices to help you achieve long-term success.",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 pb-2 sm:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Let's build something amazing together!
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
        Delivering exceptional digital solutions tailored to your needs
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group bg-white/40 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-white/20"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl">
              {service.description}
            </p>
            <a
              href="/services"
              className="text-blue-600 group-hover:text-blue-800 flex items-center gap-2 font-medium"
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
          className="bg-gradient-to-r from-blue-600 to-purple-600"
        >
          View All Services
        </GlowingButton>
      </div>
    </section>
  );
};

export default ServicesSection;
