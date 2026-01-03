import { Button } from "@/components/ui/button";
import exariasLogo from "@/assets/exarias-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-minecraft-dirt/20" />
      
      {/* Animated particles/stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-minecraft-gold/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img
            src={exariasLogo}
            alt="Exarias SMP Logo"
            className="mx-auto w-72 md:w-96 lg:w-[500px] drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 font-body max-w-2xl mx-auto">
          Minecraft Roleplay Community
        </p>
        
        <h2 className="font-minecraft text-minecraft-gold text-sm md:text-base mb-8 tracking-wider">
          "Diary Life of Junior School"
        </h2>

        <p className="text-muted-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed">
          Bergabunglah dengan kami dalam petualangan roleplay unik! Rasakan kehidupan sekolah SMP yang penuh cerita, persahabatan, dan momen tak terlupakan di dunia Minecraft.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="xl" onClick={() => {window.location.href = "https://forms.gle/aRFeCMmkgi7tVZJx7";}}>
            Daftar
          </Button>
          <Button variant="gold" size="lg" onClick={() => {window.location.href = "https://discord.gg/SV5epqAUb";}}>
            Discord
          </Button>
          <Button variant="minecraft" size="xl" onClick={() => {window.location.href = "https://chat.whatsapp.com/KJGhyQZEIAeEn6CXQtR2w1";}}>
            WhatsApp
          </Button>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
