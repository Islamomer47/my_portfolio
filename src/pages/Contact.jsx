import React from "react";
import Image from "../assets/aboutme.png";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif] relative overflow-hidden pt-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-96 right-0 w-96 h-96 bg-pink-200 rounded-full opacity-60 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-blue-300 transform rotate-45 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-yellow-300 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-pink-300 transform rotate-12 animate-ping"></div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto pb-16 px-6 relative z-10 pt-32">
        {/* Welcome section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-10 mb-16 text-center relative shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-300">
          {/* Character */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Speech bubble */}
              <div className="w-16 h-16 bg-pink-400 rounded-full absolute -top-4 -left-16 flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              {/* Character face */}
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={Image}
                  alt="Character Face"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-4">
                <div className="w-6 h-6 bg-yellow-400 transform rotate-45 animate-pulse"></div>
              </div>
              <div className="absolute -top-3 -right-3">
                <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gradient-to-r  mt-12 mb-6 font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif]">
            Hey, let's connect!
          </h1>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready for some coding magic? ✨ I'm always excited to collaborate on
            amazing projects and bring creative ideas to life! My inbox is open
            for opportunities, coffee chats, and conversations about anything
            tech or design related!
          </p>
          <a
            href="mailto:islamomar0003@gmail.com"
            className="inline-block bg-gradient-to-r from-purple-400 to-pink-300 text-black font-poppins py-4 px-10 rounded-full hover:shadow-lg transform transition duration-300 hover:scale-105 hover:from-purple-300 hover:to-pink-200"
          >
            SAY HELLO!
          </a>
        </div>

        {/* Contact info section */}
        <div className=" bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-8 md:p-10 relative transform transition-all duration-500 ">
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-white"></div>

          {/* Blob decorations with animation */}
          <div className="absolute -top-3 -right-3 w-16 h-16 animate-pulse">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-pink-300 opacity-70"
            >
              <path
                fill="currentColor"
                d="M47.1,-57.1C59.5,-45.2,67.3,-28.5,71.1,-10.3C75,7.9,74.8,27.5,65.8,41.1C56.7,54.6,38.7,62,20.4,68.5C2.1,75,-16.6,80.6,-32.9,76C-49.2,71.3,-63.1,56.5,-71.4,38.7C-79.7,20.9,-82.3,0.2,-77.5,-18.4C-72.7,-37,-60.5,-53.5,-45.3,-65C-30.1,-76.4,-12,-82.7,3.2,-86.5C18.5,-90.3,34.7,-69,47.1,-57.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="absolute bottom-5 left-5 w-20 h-20 animate-pulse">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-blue-400 opacity-60"
            >
              <path
                fill="currentColor"
                d="M36.9,-48.2C51.1,-35.3,68,-27.1,73.4,-14.5C78.8,-1.9,72.8,15.1,62.6,26.8C52.3,38.5,37.8,44.8,23.2,51.5C8.6,58.1,-6.1,65,-22.5,63.9C-38.9,62.8,-57,53.6,-65.1,38.8C-73.2,24,-71.3,3.4,-64.3,-13.3C-57.4,-30,-45.5,-42.7,-32.5,-55.8C-19.5,-68.9,-5.4,-82.4,3.9,-87.1C13.3,-91.8,22.6,-61.2,36.9,-48.2Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif] tracking-tight">
            Let's get in touch
            <span className="ml-2 inline-block animate-bounce">👋</span>
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact cards with improved hover effects and accessibility */}
            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-pink-400 group">
              <div className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 bg-pink-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-pink-200">
                  <svg
                    className="w-8 h-8 text-pink-600 transition-all duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:1234567890"
                    className="text-pink-600 font-medium hover:text-pink-700 transition-colors"
                  >
                    0797615337
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-purple-400 group">
              <div className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 bg-purple-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-purple-200">
                  <svg
                    className="w-8 h-8 text-purple-600 transition-all duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:islamomar0003@gmail.com"
                    className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
                  >
                    islamomar0003@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-blue-400 group">
              <div className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-blue-200">
                  <svg
                    className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-1">
                    Instagram
                  </h3>
                  <a
                    href="https://www.instagram.com/islam47.m1?igsh=dTN6aGd5YmQ0cmU1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    @islam47.m1
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-80 p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-indigo-400 group">
              <div className="flex items-center">
                <div className="w-16 h-16 flex-shrink-0 bg-indigo-100 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-indigo-200">
                  <svg
                    className="w-8 h-8 text-indigo-600 transition-all duration-300 group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9.975 4.303a.5.5 0 00-.55-.082l-1.8.9a2.998 2.998 0 00-1.632-.094l-1.9-.636a.5.5 0 00-.5.135l-1.2 1.2a.5.5 0 00.098.735l1.001.5a3.003 3.003 0 00.54 2.13l.5 1a.5.5 0 00.707.082l1.2-1.2a.5.5 0 00.135-.5l-.636-1.9a3 3 0 00-.094-1.632l.9-1.8a.5.5 0 00-.082-.55l-.9-.9zM8 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-1">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/developerislamomar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                  >
                    linkedin.com/in/developerislamomar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Want to know what I offer?
            </p>
            <a
              href="services"
              className="inline-block bg-black  text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Let's go ✨
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
