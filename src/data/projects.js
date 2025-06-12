import Image1 from "../../src/assets/TabManger.png";
import Image2 from "../../src/assets/EcoSystem.png";
import Image3 from "../../src/assets/LittleItaly.png";
import Image4 from "../../src/assets/tickets.png";

export const projects = [
  {
    title: "Tab Manager Extension",
    desc: "Elegant and powerful browser extension for managing tabs with smart grouping, search, duplicate detection, themes, and more.",
    tech: ["JavaScript", "HTML", "CSS", "Browser APIs"],
    features: [
      "Smart tab grouping with color labels",
      "Duplicate tab detection and merging",
      "Keyboard shortcuts and themes",
      "Lightweight performance and low memory usage",
    ],
    color: "from-pink-200 to-rose-400",
    image: Image1,
    github: "https://github.com/Islamomer47/tab-manager.git",
    // no demo
  },
  {
    title: "Future Energy - Eco-Action Tracker",
    desc: "Track eco-friendly actions, set goals, and engage in community challenges.",
    tech: ["React.js", "Tailwind CSS", "MongoDB", "Trello", "Figma"],
    features: [
      "User goal tracking with progress reports",
      "Admin dashboard with analytics",
      "Gamified eco-challenges",
      "Community engagement tools",
    ],
    color: "from-pink-200 to-rose-400",
    image: Image2,
    github: "https://github.com/Islamomer47/Eco-Action-Tracker.git",
    demo: "/EcoSystem.mp4",
  },
  {
    title: "Recipe-Hub",
    desc: "A fully responsive platform for food enthusiasts to organize, share, and purchase dishes from various chefs.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    features: [
      "Chef and user profile system",
      "Favorites and shopping cart",
      "JWT-secured authentication",
      "Custom recipe builder",
    ],
    color: "from-pink-200 to-rose-400",
    image: Image3,
    github: "https://github.com/Little-Italy-Food/Little-Italy-Food.git",
    demo: "/LittleItaly.mp4",
  },
  {
    title: "Event Ticketing System",
    desc: "Seamless event management platform with ticket purchasing and admin controls.",
    tech: ["React", "Firebase", "Paypal", "Tailwind"],
    features: [
      "Dynamic event creation and ticket limits",
      "Real-time ticket sales tracking",
      "Firebase authentication and Firestore integration",
      "Paypal payment gateway integration",
    ],
    color: "from-pink-200 to-rose-400",
    image: Image4,
    github: "https://github.com/Islamomer47/tickets-project.git",
    demo: "/tickets.mp4",
  },
];
