import { Lock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackstorySectionProps {
  isPremium?: boolean;
}

const BackstorySection = ({ isPremium = false }: BackstorySectionProps) => {
  const backstoryContent = `Sekolah Exarias berdiri megah di tengah kota Academy City Exarias sebagai simbol kemajuan pendidikan modern. Namun, tidak banyak yang tahu bahwa sebelum menjadi sekolah elit seperti sekarang, tempat ini menyimpan masa lalu yang kelam.

  const hiddenContent = `Dahulunya, lokasi Sekolah Exarias adalah kompleks penelitian tertutup sekaligus fasilitas pelatihan rahasia milik pemerintah lama. Tempat ini digunakan untuk menguji eksperimen teknologi, psikologi manusia, dan simulasi kepemimpinan. Banyak proyek gagal, dan lokasi itu akhirnya ditinggalkan setelah dianggap berbahaya serta tidak layak digunakan.

  Bertahun-tahun kemudian, empat perusahaan terbesar di Academy City Exarias melihat potensi besar di lahan tersebut. Keempat perusahaan itu bekerja sama dengan satu tujuan: mengubah simbol kegagalan masa lalu menjadi pusat pembentukan generasi pemimpin masa depan.

  Dengan teknologi mutakhir, renovasi besar-besaran dilakukan. Bangunan lama tidak dihancurkan sepenuhnya—sebagian struktur bawah tanah tetap dipertahankan dan disegel, karena dianggap terlalu berbahaya untuk dibuka kembali.
  Akhirnya, berdirilah Sekolah Exarias, sekolah elite yang menggabungkan:
• Pendidikan akademik tingkat tinggi
• Pelatihan mental dan kepemimpinan
• Teknologi canggih hasil kolaborasi empat perusahaan besar

Namun, rumor terus beredar di kalangan siswa:
• Lorong bawah tanah yang terkunci rapat
• Ruang kelas tertentu yang terasa "berbeda"
• Data siswa yang disimpan lebih detail dari sekolah biasa

Banyak yang percaya bahwa Sekolah Exarias bukan sekadar tempat belajar, melainkan tempat seleksi—di mana hanya siswa terkuat secara mental dan moral yang akan bertahan.`;

  return (
    <section id="backstory" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--secondary)/0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Lore & Backstory</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-gold gold-glow-text mb-4">
            Sejarah Sekolah Exarias
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ungkap misteri di balik sekolah elite yang menyimpan rahasia kelam
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent" />
            
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-base md:text-lg">
                {backstoryContent}
              </p>
              
              {/* Premium Content */}
              {isPremium ? (
                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-base md:text-lg">
                    {hiddenContent}
                  </p>
                </div>
              ) : (
                <div className="mt-8 relative">
                  {/* Blurred preview */}
                  <div className="blur-sm opacity-50 pointer-events-none">
                    <p className="text-foreground/90 leading-relaxed whitespace-pre-line text-base">
                      {hiddenContent.substring(0, 200)}...
                    </p>
                  </div>
                  
                  {/* Lock overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-card via-card/90 to-transparent">
                    <div className="glass-card p-6 text-center max-w-sm">
                      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-display font-semibold text-foreground mb-2">
                        Konten Premium
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upgrade ke Premium untuk mengakses cerita lengkap dan rahasia tersembunyi
                      </p>
                      <Button variant="gold" size="lg" asChild>
                        <a href="#membership">Upgrade Premium</a>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackstorySection;
