import PageLayout from "@/components/layout/PageLayout";
import { Gift, Tag, Percent, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const offers = [
  {
    icon: Percent,
    title: "Early Bird Discount",
    description: "Get special discounts on early bookings. Limited units available at launch prices.",
    highlight: "Up to ₹50,000 OFF*",
  },
  {
    icon: Gift,
    title: "Free Modular Kitchen",
    description: "Book now and get a free modular kitchen with select units.",
    highlight: "Limited Period Offer",
  },
  {
    icon: Tag,
    title: "Zero Registration Fees",
    description: "We cover your registration fees when you book during the festive season.",
    highlight: "Festival Special",
  },
];

export default function Offers() {
  return (
    <PageLayout 
      title="Special Offers" 
      subtitle="Exclusive deals for our valued customers"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {offers.map((offer) => (
              <div key={offer.title} className="card-elevated p-6 border-2 border-accent/20">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <offer.icon className="w-7 h-7 text-accent" />
                </div>
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {offer.highlight}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm">{offer.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Don't Miss These Offers!</h2>
            <p className="text-muted-foreground mb-6">Call us now to know more about current offers and availability.</p>
            <Button variant="cta" size="xl" asChild>
              <a href="tel:9928054031" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call: 9928054031
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
