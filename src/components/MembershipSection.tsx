import { Check, X, Crown, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const MembershipSection = () => {
  const plans = [
    {
      name: "Non-Premium",
      icon: User,
      price: "Gratis",
      description: "Akses dasar untuk memulai petualangan",
      features: [
        { text: "Akses server roleplay", included: true },
        { text: "Karakter dasar", included: true },
        { text: "Chat & interaksi", included: true },
        { text: "Akses backstory lengkap", included: false },
        { text: "Profil karakter detail", included: false },
        { text: "Area eksklusif", included: false },
        { text: "Item premium", included: false },
        { text: "Badge khusus", included: false },
      ],
      buttonText: "Mulai Gratis",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Premium",
      icon: Crown,
      price: "Rp 25.000",
      period: "/bulan",
      description: "Pengalaman roleplay lengkap tanpa batas",
      features: [
        { text: "Akses server roleplay", included: true },
        { text: "Karakter dasar", included: true },
        { text: "Chat & interaksi", included: true },
        { text: "Akses backstory lengkap", included: true },
        { text: "Profil karakter detail", included: true },
        { text: "Area eksklusif", included: true },
        { text: "Item premium", included: true },
        { text: "Badge khusus", included: true },
      ],
      buttonText: "Upgrade Premium",
      buttonVariant: "gold" as const,
      popular: true,
    },
  ];

  return (
    <section id="membership" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--secondary)/0.05)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Crown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Membership</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-gold gold-glow-text mb-4">
            Pilih Paket Keanggotaan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tingkatkan pengalaman roleplay-mu dengan akses premium eksklusif
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`glass-card p-8 relative overflow-hidden hover-lift ${
                plan.popular ? "border-2 border-secondary/50" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-secondary to-gold-glow text-secondary-foreground px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-bl-lg">
                    Populer
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                plan.popular 
                  ? "bg-gradient-to-br from-secondary to-gold-glow" 
                  : "bg-gradient-to-br from-primary to-emerald-glow"
              }`}>
                <plan.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Plan info */}
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-4xl font-display font-bold ${
                  plan.popular ? "text-gradient-gold" : "text-gradient"
                }`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full"
                asChild
              >
                <a href={plan.popular ? "#payment" : "#join"}>
                  {plan.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
