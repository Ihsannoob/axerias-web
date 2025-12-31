import { BookOpen, Users, Heart, Star } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-minecraft text-2xl md:text-3xl text-minecraft-green mb-4">
            CERITA KAMI
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Selamat datang di Exarias SMP, server roleplay Minecraft dengan tema kehidupan SMP yang unik dan seru!
          </p>
        </div>

        {/* Story content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Story text */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded border border-border/50 minecraft-border">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-minecraft-gold" size={24} />
                <h3 className="font-minecraft text-sm text-foreground">
                  Diary Life of Junior School
                </h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed">
                Rasakan pengalaman menjadi siswa SMP di dunia Minecraft! Dari bangun pagi, 
                berangkat sekolah, mengikuti pelajaran, hingga pulang dan bermain bersama 
                teman-teman. Setiap hari adalah petualangan baru dengan cerita yang berbeda.
              </p>
            </div>

            <div className="bg-card p-6 rounded border border-border/50">
              <p className="font-body text-muted-foreground leading-relaxed">
                Kamu bisa menjadi siapa saja - siswa rajin, ketua kelas, anggota OSIS, 
                atau bahkan trouble maker sekolah! Dengan sistem roleplay yang immersive, 
                kamu akan merasakan kehidupan sekolah yang penuh dengan drama, 
                persahabatan, dan momen-momen tak terlupakan.
              </p>
            </div>
          </div>

          {/* Right - Features grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, label: "Komunitas Aktif", desc: "Player friendly" },
              { icon: Heart, label: "Roleplay Seru", desc: "Cerita menarik" },
              { icon: Star, label: "Event Rutin", desc: "Hadiah menarik" },
              { icon: BookOpen, label: "Storyline", desc: "Alur cerita unik" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded border border-border/50 text-center hover:border-minecraft-green/50 transition-colors group"
              >
                <item.icon
                  className="mx-auto mb-3 text-minecraft-gold group-hover:text-minecraft-green transition-colors"
                  size={32}
                />
                <h4 className="font-minecraft text-xs text-foreground mb-1">
                  {item.label}
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
