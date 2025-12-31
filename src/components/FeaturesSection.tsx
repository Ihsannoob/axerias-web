import { School, Map, Sword, MessageCircle, Calendar, Trophy } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: School,
      title: "Sistem Sekolah",
      description: "Kelas lengkap dengan jadwal pelajaran, ujian, dan kegiatan ekstrakurikuler yang bisa kamu ikuti.",
    },
    {
      icon: Map,
      title: "Map Khusus",
      description: "Bangunan sekolah SMP yang detail dengan ruang kelas, kantin, lapangan, dan area bermain.",
    },
    {
      icon: MessageCircle,
      title: "Roleplay Voice",
      description: "Sistem voice chat proximity untuk roleplay yang lebih immersive dan interaktif.",
    },
    {
      icon: Calendar,
      title: "Jadwal Harian",
      description: "Aktivitas terstruktur dari pagi hingga malam, termasuk jam istirahat dan pulang sekolah.",
    },
    {
      icon: Sword,
      title: "Mini Games",
      description: "Berbagai permainan seru seperti lomba lari, kuis, dan event olahraga antar kelas.",
    },
    {
      icon: Trophy,
      title: "Ranking Siswa",
      description: "Sistem penilaian dan peringkat siswa berdasarkan keaktifan dan prestasi di server.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-minecraft-green/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-minecraft-gold/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-minecraft text-2xl md:text-3xl text-minecraft-gold mb-4">
            FITUR SERVER
          </h2>
          <div className="w-24 h-1 bg-minecraft-green mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Nikmati berbagai fitur menarik yang akan membuat pengalaman roleplay kamu semakin seru!
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded border border-border/50 hover:border-minecraft-green/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-minecraft-green/10 rounded flex items-center justify-center mb-4 group-hover:bg-minecraft-green/20 transition-colors">
                <feature.icon
                  className="text-minecraft-green"
                  size={24}
                />
              </div>
              <h3 className="font-minecraft text-sm text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
