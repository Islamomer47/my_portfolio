import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/islamomer47", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/developerislamomar",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/islam47.m1/?igsh=dTN6aGd5YmQ0cmU1#",
    label: "Instagram",
  },
];

const NAV_ITEMS = ["Home", "About", "Services", "Projects", "Contact"];

const CONTACT_INFO = [
  {
    icon: Mail,
    href: "mailto:islamomar0003@gmail.com",
    text: "islamomar0003@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:0797615337",
    text: "0797615337",
    label: "Phone",
  },
  {
    icon: MapPin,
    href: null,
    text: "Amman, Jordan",
    label: "Location",
  },
];

const FUN_FACTS = [
  "Curious Programmer 🧐 – I love diving into unusual programming questions and exploring them deeply, often turning my findings into insightful articles.",
];

const SectionTitle = ({ children }) => (
  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    {children}
  </h3>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8 text-center">
      {/* Animated Wavy Top Border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-0">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white animate-wave"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center">
          {/* Navigation Links */}
          <div className="space-y-6">
            <SectionTitle>Navigation</SectionTitle>
            <ul className="space-y-3 list-none">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="group flex justify-center items-center text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <SectionTitle>Get in Touch</SectionTitle>
            <ul className="space-y-4 list-none">
              <li className="group">
                <a
                  href="mailto:islamomar0003@gmail.com"
                  className="flex justify-center items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                  <span>islamomar0003@gmail.com</span>
                </a>
              </li>
              <li className="group">
                <a
                  href="tel:0797615337"
                  className="flex justify-center items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>0797615337</span>
                </a>
              </li>
              <li className="group flex justify-center items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Amman, Jordan</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <SectionTitle>Connect</SectionTitle>
            <div className="flex justify-center space-x-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 text-pink-600 bg-gray-800 rounded-lg hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="space-y-6 pr-7">
            <SectionTitle>Fun Fact About Me</SectionTitle>
            <div className="space-y-4">
              {FUN_FACTS.map((text, index) => (
                <div
                  key={index}
                  className="group flex justify-center items-center space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-x-1"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {text}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 italic">
              "Every line of code tells a story"
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <a
              href="/"
              className="text-white text-2xl font-bold inline-flex items-center"
            >
              Dev. Islam Omar
              <span className="text-blue-500 animate-pulse">.</span>
            </a>
            <span className="text-gray-400 text-sm">
              © {currentYear} Dev. Islam Omar. | All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
