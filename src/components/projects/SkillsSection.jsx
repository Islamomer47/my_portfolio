import ShapeDecoration from "../home/ShapeDecoration";

// ICONS
const frontendIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const backendIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const toolsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

//Skill Data
const skillSections = [
  {
    title: "Frontend Development",
    icon: frontendIcon,
    gradient: "from-cyan-400 to-blue-500",
    textColor: "text-purple-900",
    hoverBg: "hover:bg-purple-50",
    border: "border-purple-100",
    skills: [
      {
        name: "React.js",
        desc: "Building dynamic UIs with component-based architecture",
      },
      {
        name: "JavaScript",
        desc: "Creating interactive web experiences with modern ES6+ syntax",
      },
      {
        name: "HTML/CSS",
        desc: "Crafting structured, semantic, and visually appealing layouts",
      },
      {
        name: "Tailwind CSS",
        desc: "Rapidly building custom designs with utility-first approach",
      },
      {
        name: "Responsive Design",
        desc: "Creating seamless experiences across all device sizes",
      },
    ],
  },
  {
    title: "Backend Development",
    icon: backendIcon,
    gradient: "from-pink-200 to-pink-500",
    textColor: "text-pink-600",
    hoverBg: "hover:bg-pink-50",
    border: "border-pink-100",
    skills: [
      {
        name: "Node.js",
        desc: "Building scalable server-side applications with JavaScript",
      },
      {
        name: "PostgreSQL",
        desc: "Managing relational databases with advanced SQL features",
      },
      {
        name: "MongoDB",
        desc: "Working with flexible document-based NoSQL databases",
      },
      {
        name: "Express.js",
        desc: "Creating robust APIs and web applications with minimal code",
      },
      {
        name: "Firebase",
        desc: "Implementing serverless architectures with realtime databases",
      },
    ],
  },
  {
    title: "Development Tools",
    icon: toolsIcon,
    gradient: "from-purple-400 to-indigo-500",
    textColor: "text-indigo-600",
    hoverBg: "hover:bg-indigo-50",
    border: "border-indigo-100",
    skills: [
      {
        name: "Git & GitHub",
        desc: "Managing version control and collaborative development",
      },
      {
        name: "VS Code",
        desc: "Optimizing workflow with customizable IDE and extensions",
      },
      {
        name: "Postman",
        desc: "Testing and documenting APIs with automated workflows",
      },
    ],
  },
];

//skillCard
const SkillCard = ({
  title,
  icon,
  gradient,
  skills,
  textColor,
  hoverBg,
  border,
}) => (
  <div
    className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border ${border}`}
  >
    <div className={`h-2 w-full bg-gradient-to-r ${gradient}`}></div>
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg transform transition-transform group-hover:rotate-6`}
        >
          {icon}
        </div>
        <h3 className={`ml-4 text-2xl font-bold ${textColor}`}>{title}</h3>
      </div>
      <ul className="space-y-4">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className={`flex p-2 rounded-lg transition-colors ${hoverBg}`}
          >
            <span
              className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} mr-3 shadow mt-1.5`}
            />
            <div>
              <span className="text-black font-medium block">{skill.name}</span>
              <span className="text-gray-600 text-sm">{skill.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-100 to-pink-100 md:max-w-[99%] relative overflow-hidden">
      <ShapeDecoration className="top-20 right-10 sm:right-40" />
      <ShapeDecoration className="bottom-40 left-10 sm:left-20 transform rotate-90" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-500 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-pink-500 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-blue-500 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-3 bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full">
            <span className="text-sm font-medium text-purple-800">
              Skills & Technologies
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-black">
            Technical Expertise
          </h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            My comprehensive toolbox of languages, frameworks and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillSections.map((section, index) => (
            <SkillCard key={index} {...section} />
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31.05,906.36,72,985,92.83c70.69,18.48,142.55,22.33,215,13.49V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            opacity=".25"
            className="fill-white"
          />
          <path
            d="M321.39,15.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78-9.95,906.36,31,985,51.83c70.69,18.48,142.55,22.33,215,13.49V-40H0V-12.65A600.21,600.21,0,0,0,321.39,15.44Z"
            opacity=".5"
            className="fill-white"
          />
          <path
            d="M0,0V5.63C150,66.63,357.77,89.7,581.55,60.51,843.08,26.34,1076.45-29.53,1200,0V0Z"
            className="fill-white"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default SkillsSection;
