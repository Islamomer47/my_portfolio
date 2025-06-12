import React from "react";

const ShapeDecoration = ({ className = "" }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    {/* Star shape */}
    <div className="absolute w-16 h-16 bg-pink-200/40 rounded-star animate-float-slow transform rotate-12">
      <div className="w-full h-full rounded-star bg-gradient-to-br from-pink-200 to-pink-300/50 backdrop-blur-sm" />
    </div>

    {/* Hexagon shape */}
    <div className="absolute top-20 left-40 w-20 h-20 bg-green-200/40 rounded-hexagon animate-float transform rotate-45">
      <div className="w-full h-full rounded-hexagon bg-gradient-to-br from-green-200 to-green-300/50 backdrop-blur-sm" />
    </div>

    {/* Circle */}
    <div className="absolute top-60 -left-10 w-12 h-12 bg-yellow-200/40 rounded-full animate-pulse">
      <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300/50 backdrop-blur-sm" />
    </div>

    {/* Rectangle */}
    <div className="absolute top-40 left-20 w-24 h-8 bg-blue-200/40 rounded-lg animate-float-slow transform -rotate-12">
      <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-200 to-blue-300/50 backdrop-blur-sm" />
    </div>
  </div>
);

export default ShapeDecoration;
