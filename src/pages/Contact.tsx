import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout 
      title="Contact Us" 
      subtitle="Get in touch with our team for enquiries and bookings"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map or Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Visit Our Office</h2>
              <div className="card-elevated p-6 mb-6">
                <h3 className="font-semibold text-lg mb-2">Wonder Mega City</h3>
                <p className="text-muted-foreground mb-4">Alwar, Rajasthan, India</p>
                
                <div className="space-y-3 text-sm">
                  <p><strong>Phone:</strong> <a href="tel:9928054031" className="text-primary hover:underline">9928054031</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@wondermegacity.com" className="text-primary hover:underline">info@wondermegacity.com</a></p>
                </div>
              </div>

              <div className="card-elevated p-6">
                <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span>10:00am - 07:00pm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>11:00am - 06:00pm</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Book Your Dream Home?</h2>
              <p className="text-muted-foreground mb-8">Call us now to schedule a site visit or get more details about available units.</p>
              <Button variant="cta" size="xl" asChild>
                <a href="tel:9928054031" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: 9928054031
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
