const HeroSection = () => (
  <div className=" bg-gradient-to-r from-purple-100 to-pink-100 py-16 md:py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-50"></div>

    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-12 h-12 md:w-20 md:h-20 bg-green-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-10 sm:right-20 w-10 h-10 md:w-16 md:h-16 bg-blue-500 rounded-full opacity-30 animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-yellow-500 rounded-full opacity-40 animate-pulse delay-700"></div>
    </div>

    <div className="container mx-auto text-center relative z-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
        About Me
      </h1>
      <div className="h-1 w-20 md:w-24 bg-gray-800 mx-auto mb-6"></div>
      <p className="text-lg md:text-xl max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto text-gray-800 leading-relaxed">
        Full Stack Web Developer with experience in front-end and back-end
        development, skilled in JavaScript, React, Node.js, Firebase, and
        PostgreSQL.
      </p>
    </div>

    {/* Decorative elements */}
    <div className="absolute top-6 sm:top-8 right-1/3">
      <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-800 transform rotate-45 animate-bounce"></div>
    </div>
    <div className="absolute top-10 sm:top-12 right-1/4">
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-gray-800"></div>
    </div>
    <div className="absolute top-16 sm:top-20 right-1/4">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-800"></div>
    </div>
  </div>
);

export default HeroSection;
