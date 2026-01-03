import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const JoinSection = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.exarias.my.id";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast.success("IP Server berhasil disalin!");
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    { step: "01", title: "Join Discord", desc: "Gabung server Discord kami untuk verifikasi" },
    { step: "02", title: "Baca Rules", desc: "Pahami peraturan roleplay yang berlaku" },
    { step: "03", title: "Buat Karakter", desc: "Siapkan latar belakang karakter kamu" },
    { step: "04", title: "Mulai Bermain", desc: "Masuk server dan mulai petualangan!" },
  ];

  return (
    <section id="join" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-minecraft text-2xl md:text-3xl text-minecraft-green mb-4">
            CARA BERGABUNG
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Ikuti langkah-langkah berikut untuk bergabung dengan Exarias SMP!
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-card p-6 rounded border border-border/50 text-center group hover:border-minecraft-gold/50 transition-colors"
            >
              <span className="font-minecraft text-3xl text-minecraft-gold/30 absolute top-2 right-4">
                {item.step}
              </span>
              <h3 className="font-minecraft text-sm text-foreground mb-2 mt-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Server IP Box */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card p-8 rounded border border-border/50 minecraft-border text-center">
            <h3 className="font-minecraft text-lg text-minecraft-gold mb-4">
              SERVER IP
            </h3>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-muted px-6 py-3 rounded font-body text-xl tracking-wider text-foreground">
                {serverIP}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={copyIP}
                className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-primary-foreground"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </Button>
            </div>

            <p className="font-body text-sm text-muted-foreground mb-6">
              Minecraft Version 1.21.X
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
