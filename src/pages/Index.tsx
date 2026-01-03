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
import { Helmet, HelmetProvider } from "react-helmet-async";
  
const Index = () => {
  const { isPremium } = useAuth();
  return (
    <HelmetProvider>
      <Helmet>
        <title>SMP Exarias - Minecraft Roleplay Indonesia</title>
        <meta 
          name="description" 
          content="Bergabunglah dengan SMP Exarias, komunitas roleplay Minecraft Indonesia terbaik. Masuki dunia roleplay pendidikan elite di Academy City Exarias." 
        />
        <meta name="keywords" content="minecraft, roleplay, indonesia, smp, exarias, sekolah, academy" />
        <link rel="canonical" href="https://smp-exarias.com" />
      </Helmet>

      <Navbar />
      
      <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <Backstory isPremium={isPremium} />
      <Karakter isPremium={isPremium} />
      <JoinSection />
      <Membership />
      <Payment />
      <Footer />
    </main>
   </HelmetProvider>
  );
};

export default Index;
