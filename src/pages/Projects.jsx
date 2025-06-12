import Header from "../components/projects/header";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import SkillsSection from "../components/projects/SkillsSection";
import DeveloperJourney from "../components/projects/DeveloperJourney";
import CertificationsSection from "../components/projects/CertificationsSection";

const PortfolioLandingPage = () => {
  return (
    <div className="bg-white min-h-screen text-white">
      {/* Header Section with Glassmorphism */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Featured Work Section with 3D Cards */}
        <FeaturedProjects />

        {/* Skills Section with Animated Bars */}
        <SkillsSection />

        {/* Interactive Timeline Section  */}
        <DeveloperJourney />

        {/* Certificates Section with Hover Cards */}
        <CertificationsSection />
      </main>

      {/* for 3D Card Effect */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .my-rotate-y-180 {
          transform: rotateY(180deg);
        }

        .group:hover .group-hover\\:my-rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default PortfolioLandingPage;
