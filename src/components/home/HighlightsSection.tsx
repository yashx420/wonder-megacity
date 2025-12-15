import { IndianRupee, MapPin, Shield, Home, Users, Leaf, TrainFront } from "lucide-react";

const highlights = [
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Budget-friendly homes designed for middle-class families",
  },
  {
    icon: Shield,
    title: "Govt. Approved",
    description: "UIT and RERA approved project with all legal clearances",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Strategically located in Alwar with excellent connectivity and RRTS Metro nearby",
  },
  {
    icon: Home,
    title: "Quality Construction",
    description: "Built with premium materials and modern techniques",
  },
  {
    icon: Users,
    title: "Family-Friendly",
    description: "Safe and secure environment for your loved ones",
  },
  {
    icon: Leaf,
    title: "Green Living",
    description: "Landscaped gardens and eco-friendly design",
  },
];

export default function HighlightsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Wonder Mega City?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer the perfect blend of affordability, quality, and trust for your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="card-elevated p-6 text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                <highlight.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
