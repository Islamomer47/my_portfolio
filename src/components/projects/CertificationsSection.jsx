import "../../styles/global.css";

// Data
const certifications = [
  {
    name: "JavaScript For Beginners Complete Course",
    platform: "Udemy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    color: "from-blue-400 to-purple-600",
  },
  {
    name: "HTML and CSS for Beginners From Basic to Advance",
    platform: "Udemy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="10" y1="21" x2="14" y2="3" />
      </svg>
    ),
    color: "from-blue-400 to-pink-600",
  },
  {
    name: "The Complete Introduction to C++ Programming",
    platform: "Udemy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M16 12h2v4h-2z" />
        <path d="M8 12h2v4H8z" />
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="M12 16v4" />
        <path d="M12 12v-4" />
        <line x1="16" y1="8" x2="16" y2="8" />
        <line x1="8" y1="8" x2="8" y2="8" />
      </svg>
    ),
    color: "from-purple-400 to-blue-600",
  },
  {
    name: "The Java Learning Guide",
    platform: "Udemy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M12 2c-.8 4-2 6-4 7 2 1 4 3 4 7 0-4 2-6 4-7-2-1-4-3-4-7z" />
        <path d="M12 12c-.8 4-2 6-4 7 2 1 4 3 4 7 0-4 2-6 4-7-2-1-4-3-4-7z" />
      </svg>
    ),
    color: "from-blue-400 to-pink-600",
  },
  {
    name: "CSS Complete Course For Beginners",
    platform: "Udemy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path d="M4 2l2 20h12l2-20H4z" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    color: "from-purple-400 to-blue-600",
  },
  {
    name: "Master Course in Time Management",
    platform: "Udemy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "from-blue-400 to-pink-600",
  },
];

// Card Component
const CertificationCard = ({ name, platform, icon, color }) => (
  <div
    className="group relative overflow-hidden bg-white backdrop-blur-lg rounded-2xl border border-gray-200 p-6 shadow-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
    role="listitem"
  >
    <div
      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
    ></div>

    <div className="flex items-start gap-4">
      <div
        className={`w-14 h-14 flex items-center justify-center text-white rounded-xl shadow-md bg-gradient-to-br ${color}`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
          {name}
        </h3>
        <span className="mt-1 inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
          {platform}
        </span>
      </div>
    </div>
  </div>
);

// Main Section
const CertificationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Certifications & Learning
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Continuous education and growth through specialized courses
          </p>
        </header>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn"
          role="list"
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
