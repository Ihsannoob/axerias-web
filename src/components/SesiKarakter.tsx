import { Lock, Users, Shield, BookOpen, Wrench, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CharactersSectionProps {
  isPremium?: boolean;
}

const CharactersSection = ({ isPremium = false }: CharactersSectionProps) => {
  const characters = [
    {
      name: "Kepala Sekolah",
      role: "Pemimpin Sekolah",
      description: "Figur misterius yang jarang terlihat, namun keputusannya mutlak. Dikatakan memiliki akses ke semua rahasia sekolah.",
      icon: Shield,
      rarity: "Legendary",
    },
    {
      name: "Guru Pembimbing",
      role: "Mentor Siswa",
      description: "Bertanggung jawab membimbing siswa baru dan memastikan mereka beradaptasi dengan sistem sekolah yang unik.",
      icon: BookOpen,
      rarity: "Epic",
    },
    {
      name: "Ketua OSIS",
      role: "Pemimpin Siswa",
      description: "Siswa terpilih yang memimpin organisasi siswa. Memiliki pengaruh besar terhadap kehidupan sehari-hari di sekolah.",
      icon: Users,
      rarity: "Epic",
    },
    {
      name: "Teknisi Sekolah",
      role: "Penjaga Rahasia",
      description: "Satu-satunya yang memiliki akses ke area bawah tanah. Pengetahuannya tentang sekolah melampaui siapapun.",
      icon: Wrench,
      rarity: "Rare",
    },
    {
      name: "Perawat Sekolah",
      role: "Penyembuh",
      description: "Sosok hangat yang merawat siswa yang terluka. Namun, beberapa mengatakan dia tahu lebih banyak tentang 'kecelakaan' yang terjadi.",
      icon: Heart,
      rarity: "Rare",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "from-yellow-500 to-orange-500 text-yellow-400";
      case "Epic":
        return "from-purple-500 to-pink-500 text-purple-400";
      case "Rare":
        return "from-blue-500 to-cyan-500 text-blue-400";
      default:
        return "from-gray-500 to-gray-600 text-gray-400";
    }
  };

  return (
    <section id="characters" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Karakter Roleplay</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient glow-text mb-4">
            Kenali Karakter
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tokoh-tokoh penting yang akan kamu temui di Sekolah Exarias
          </p>
        </div>

        {isPremium ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {characters.map((character, index) => (
              <div
                key={character.name}
                className="glass-card p-6 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rarity badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getRarityColor(character.rarity)} bg-opacity-20 text-xs font-bold uppercase tracking-wider mb-4`}>
                  {character.rarity}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-emerald-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <character.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Info */}
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  {character.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {character.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {character.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative max-w-6xl mx-auto">
            {/* Blurred preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 blur-sm opacity-40 pointer-events-none">
              {characters.slice(0, 3).map((character, index) => (
                <div key={character.name} className="glass-card p-6">
                  <div className="w-16 h-16 rounded-2xl bg-muted mb-4" />
                  <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2 mb-3" />
                  <div className="h-16 bg-muted rounded" />
                </div>
              ))}
            </div>
            
            {/* Lock overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-card p-8 text-center max-w-md">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-display font-bold text-2xl text-foreground mb-3">
                  Konten Eksklusif
                </h4>
                <p className="text-muted-foreground mb-6">
                  Akses profil lengkap semua karakter, backstory rahasia, dan kemampuan spesial mereka dengan Premium membership
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="#membership">Upgrade ke Premium</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CharactersSection;
