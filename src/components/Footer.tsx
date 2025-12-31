import exariasLogo from "@/assets/exarias-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={exariasLogo}
            alt="Exarias SMP"
            className="w-24 mb-4 opacity-80"
          />
          
          <p className="font-minecraft text-sm text-minecraft-green mb-2">
            EXARIAS<span className="text-minecraft-gold"> SMP</span>
          </p>
          
          <p className="font-body text-sm text-muted-foreground mb-6">
            Diary Life of Junior School
          </p>

          {/* Social links */}
          <div className="flex gap-6 mb-8">
            {["Discord", "WhatsApp"].map((social) => (
              <a
                key={social}
                href={
                  social==="Discord"
                  ?"https://discord.gg/R2QrNbEUD"
                  :social==="WhatsApp"
                  ?"https://chat.whatsapp.com/KJGhyQZEIAeEn6CXQtR2w1"
                }
                className="font-body text-sm text-muted-foreground hover:text-minecraft-green transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-border/50 pt-6 w-full">
            <p className="font-body text-xs text-muted-foreground">
              © 2024 Exarias SMP. All rights reserved.
            </p>
            <p className="font-body text-xs text-muted-foreground mt-1">
              Minecraft is a trademark of Mojang Studios.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
