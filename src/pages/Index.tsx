import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer"
import Membership from "@/components/MembershipSection";
import Payment from "@/components/PaymentSection";
  
const Index = () => {
  return (
    <div className="min-h-screen bg-background" id="home">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <JoinSection />
      <Membership />
      <Payment />
      <Footer />
    </div>
  );
};

export default Index;
