import React from "react";
import { useTranslation } from "react-i18next";
import ShapeDecoration from "./ShapeDecoration";
import { Sparkles, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-6 pb-16 px-4">
      <ShapeDecoration className="top-20 right-10 sm:right-40" />
      <ShapeDecoration className="bottom-40 left-10 sm:left-20 transform rotate-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" />
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Availability Announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100/80 backdrop-blur-sm rounded-full text-gray-800 font-medium mb-6 sm:mb-8">
          <Sparkles size={18} />
          {t("hero.availability")}
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text leading-tight tracking-wide drop-shadow-lg">
          <span className="font-serif italic">{t("hero.heading")}</span>
        </h1>

        {/* Bio */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          {t("hero.bio")}
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => navigate("/contact")}
            className="group px-8 py-4 sm:px-10 sm:py-5 bg-black text-white rounded-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg sm:text-xl"
          >
            {t("hero.collaborate")}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="group px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg sm:text-xl"
          >
            {t("hero.learn")}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
