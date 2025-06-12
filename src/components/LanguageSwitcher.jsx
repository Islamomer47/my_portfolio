import React from "react";
import { Globe, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="relative group inline-block text-left">
      {/* Button */}
      <button
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 shadow-sm transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        aria-haspopup="true"
      >
        <Globe className="w-5 h-5" />
        <span className="font-medium text-sm">
          {i18n.language === "en" ? "English" : "العربية"}
        </span>
      </button>

      {/* Dropdown */}
      <div className="absolute z-10 mt-2 right-0 w-40 origin-top-right rounded-xl bg-white border border-gray-200 shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 ease-out">
        <button
          onClick={() => toggleLanguage("en")}
          className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition ${
            i18n.language === "en" ? "bg-gray-100 font-semibold" : ""
          }`}
        >
          <Languages className="w-4 h-4 text-gray-500" />
          English
        </button>
        <button
          onClick={() => toggleLanguage("ar")}
          className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition ${
            i18n.language === "ar" ? "bg-gray-100 font-semibold" : ""
          }`}
        >
          <Languages className="w-4 h-4 text-gray-500" />
          العربية
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
