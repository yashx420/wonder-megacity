import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center section-padding bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-muted-foreground mb-8">
            Your enquiry has been submitted successfully. Our team will contact you shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:9928054031" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
