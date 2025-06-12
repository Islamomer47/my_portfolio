import Image1 from "../../src/assets/TabManger.png";
import Image2 from "../../src/assets/EcoSystem.png";
import Image3 from "../../src/assets/LittleItaly.png";
import Image4 from "../../src/assets/tickets.png";
import HeroSection from "../components/About/HeroSection";
import ImageGrid from "../components/About/ImageGrid";
import SkillTags from "../components/About/SkillTags";
import Video from "../components/About/VideoSection";
import Contentsections from "../components/About/ContentSection";
import { useNavigate } from "react-router-dom";
const AboutMePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section with Yellow Background and Animated Gradient Overlay */}
      <HeroSection />
      {/* Images Row with Hover Effects */}
      <ImageGrid />

      {/* First Content Section with Animated Elements */}
      <SkillTags />

      {/* Video Section */}
      <Video />

      {/* Second Content Section with Enhanced Design */}
      {/* Third Content Section with Enhanced Design */}
      <Contentsections />

      {/* Call to Action */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Let's Work Together
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto mb-8">
            Looking for a skilled Full Stack Web Developer? I'm open to new
            opportunities and challenges.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-colors duration-300 shadow-lg"
          >
            Contact Me
          </button>
          <div className="flex justify-center gap-6 mt-8 border-white">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <span className="text-2xl">📧</span>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <span className="text-2xl">👨‍💻</span>
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-gray-900 transition-colors"
            >
              <span className="text-2xl">📱</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
