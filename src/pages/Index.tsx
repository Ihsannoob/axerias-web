import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import Donate from "@/components/Donate";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <JoinSection />
      <Donate />
      <Footer />
    </div>
  );
};

export default Index;
