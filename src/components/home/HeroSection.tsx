import { Phone, Facebook, Instagram, Youtube, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-township.jpg";

const approvals = [
  { label: "UIT Approved", icon: Shield },
  { label: "RERA Registered", icon: CheckCircle },
];

export default function HeroSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919928054031", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wonder Mega City Township"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom px-4 py-20 md:py-32">
        <div className="max-w-2xl animate-slide-up">
          {/* Approvals Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {approvals.map((approval) => (
              <div
                key={approval.label}
                className="flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium"
              >
                <approval.icon className="w-4 h-4" />
                {approval.label}
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight">
            Wonder Mega City
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-2">
            Your Dream Home in Alwar
          </p>
          <p className="text-lg text-background/80 mb-8 max-w-lg">
            Affordable, approved, and family-friendly residential township in
            the heart of Rajasthan.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="cta" size="xl" asChild>
              <a href="tel:9928054031" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Talk To Expert: 9928054031
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
              WhatsApp Us
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-background/70 text-sm">Follow Us:</span>
            <a
              href="https://www.facebook.com/wondermegacity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors text-background"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/wondermegacity/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors text-background"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@wonder-group"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center hover:bg-primary transition-colors text-background"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
