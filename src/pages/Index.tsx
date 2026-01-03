import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer"
import Membership from "@/components/MembershipSection";
import Payment from "@/components/PaymentSection";
import Backstory from "@/components/BackstorySection";
import Karakter from "@/components/SesiKarakter";
import { useAuth } from "@/hooks/useAuth";
  
const Index = () => {
  const { isPremium } = useAuth();
  return (
    <div className="min-h-screen bg-background" id="home">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Backstory isPremium={isPremium} />
      <Karakter isPremium={isPremium} />
      <JoinSection />
      <Membership />
      <Payment />
      <Footer />
    </div>
  );
};

export default Index;
