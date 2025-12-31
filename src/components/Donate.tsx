import { Button } from "@/components/ui/button";

export default function Donate() {
  return (
    <section id="Donate" className="py-20 relative">
      <div className="container mx-auto px-4">
           <h2 className="font-minecraft text-2xl md:text-3xl text-minecraft-green mb-4 text-center mb-16">
            Donasi Nya
          </h2>
          <div className="w-24 h-1 bg-minecraft-gold mx-auto mb-6" />
       <div className="bg-card p-8 rounded border border-border/50 minecraft-border text-center">
        {/* Donate */}
        <p className="text-muted-foreground font-body max-w-xl mx-auto mb-10 leading-relaxed text-center">
          Donasi seikhlasnya buat beli kopi 😁
        </p>

        {/* Donate Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="minecraft" size="xl" onClick={() => {window.location.href ="https://saweria.co/SynGit";}}>
            Donate
          </Button>
        </div>
       </div>
      </div>
    </section>
  );
}
