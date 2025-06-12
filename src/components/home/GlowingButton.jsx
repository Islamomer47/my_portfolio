import React from "react";
import { ArrowUpRight } from "lucide-react";

const GlowingButton = ({ children, className = "", onClick }) => (
  <button
    onClick={onClick}
    className={`group relative px-8 py-4 bg-stone-950 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20" />
    <div className="relative flex items-center justify-center gap-2 text-white">
      {children}
      <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </div>
  </button>
);

export default GlowingButton;
