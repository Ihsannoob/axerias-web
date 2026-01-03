import { useState } from "react";
import { Menu, X, User, Crown, LogOut} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    {label: "backstory", href: "#backstory" },
    { label: "karakter", href: "#characters" },
    { label: "Fitur", href: "#features" },
    { label: "Bergabung", href: "#join" },
    { label: "membership", href: "#membership" },
    { label: "payment", href:"#payment" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo text */}
          <a href="#home" className="font-minecraft text-sm text-minecraft-green">
            EXARIAS<span className="text-minecraft-gold"> SMP</span>
          </a>

          {/*Desktop bar*/}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border/50">
                  {isPremium ? (
                    <Crown className="w-4 h-4 text-secondary" />
                  ) : (
                    <User className="w-4 h-4 text-primary" />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {profile?.username || user.email?.split("@")[0]}
                  </span>
                  {isPremium && (
                    <span className="px-2 py-0.5 text-xs bg-secondary/20 text-secondary rounded-full font-bold">
                      PREMIUM
                    </span>
                  )}
                </div>
                <Button variant="ghost" size="icon" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <Button variant="default" size="sm" asChild>
                <Link to="/auth">Masuk</Link>
              </Button>
            )}
          </div>

          {/* Mobile bar */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              
              {user ? (
                <>
                  <div className="flex items-center gap-2 py-2 text-foreground">
                    {isPremium ? (
                      <Crown className="w-4 h-4 text-secondary" />
                    ) : (
                      <User className="w-4 h-4 text-primary" />
                    )}
                    <span>{profile?.username || user.email?.split("@")[0]}</span>
                    {isPremium && (
                      <span className="px-2 py-0.5 text-xs bg-secondary/20 text-secondary rounded-full font-bold">
                        PREMIUM
                      </span>
                    )}
                  </div>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Keluar
                  </Button>
                </>
              ) : (
                <Button variant="default" size="sm" className="mt-2" asChild>
                  <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
                    Masuk
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
