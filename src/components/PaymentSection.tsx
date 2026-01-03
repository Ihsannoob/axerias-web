import { QrCode, Shield, CheckCircle } from "lucide-react";
import qrisImage from "@/assets/qris-payment.jpeg";

const PaymentSection = () => {
  const steps = [
    "Buka aplikasi e-wallet atau mobile banking",
    "Scan QR Code di bawah ini",
    "Masukkan nominal pembayaran",
    "Konfirmasi pembayaran ke admin",
  ];

  return (
    <section id="payment" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--secondary)/0.08)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <QrCode className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Pembayaran</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient-gold gold-glow-text mb-4">
            Pembayaran QRIS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bayar dengan mudah menggunakan QRIS dari semua aplikasi e-wallet dan mobile banking
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* QR Code */}
              <div className="text-center">
                <div className="bg-card rounded-2xl p-6 inline-block shadow-2xl border border-border/50">
                  <img
                    src={qrisImage}
                    alt="QRIS Payment"
                    className="w-64 h-auto mx-auto rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Scan dengan aplikasi pembayaran favoritmu
                </p>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="font-display font-bold text-xl text-foreground mb-6">
                  Cara Pembayaran
                </h3>
                
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-secondary">{index + 1}</span>
                      </div>
                      <p className="text-foreground/90 pt-1">{step}</p>
                    </div>
                  ))}
                </div>

                {/* Security badge */}
                <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Pembayaran Aman</p>
                      <p className="text-xs text-muted-foreground">QRIS terstandarisasi Bank Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Confirmation note */}
                <div className="mt-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground">
                        Setelah pembayaran, kirim bukti transfer ke admin melalui{" "}
                        <a 
                          href="https://chat.whatsapp.com/KJGhyQZEIAeEn6CXQtR2w1" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary hover:underline font-medium"
                        >
                          WhatsApp
                        </a>{" "}
                        atau{" "}
                        <a 
                          href="https://discord.gg/R2QrNbEUD" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Discord
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
