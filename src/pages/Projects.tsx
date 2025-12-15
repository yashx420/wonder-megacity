import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-township.jpg";

/* Other Projects Data */
const otherProjects = [
  {
    name: "Orchid Residency",
    location: "Moti Dungri, Alwar",
    image: "/projects/orchid-residency.jpg",
  },
  {
    name: "Wonder Excellency",
    location: "Manu Marg, Alwar",
    image: "/projects/wonder-excellency.jpg",
  },
  {
    name: "Wonder Heights",
    location: "Malviya Nagar, Alwar",
    image: "/projects/wonder-heights.jpg",
  },
  {
    name: "Wonder Residency",
    location: "200ft Road, Alwar",
    image: "/projects/wonder-residency.jpg",
  },
  {
    name: "Wonder Mall",
    location: "Kedal Ganj, Alwar",
    image: "/projects/wonder-mall.jpg",
  },
  {
    name: "Wonder Majesty",
    location: "200ft Road, Alwar",
    image: "/projects/wonder-majesty.jpg",
  },
];

export default function Projects() {
  return (
    <PageLayout
      title="Our Projects"
      subtitle="Completed and ongoing developments by Wonder Mega City"
    >
      {/* Other Projects (TOP) */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Our Completed & Ongoing Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="card-elevated overflow-hidden group bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-foreground">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Project */}
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="card-elevated overflow-hidden">
            <div className="aspect-video lg:aspect-[21/9]">
              <img
                src={heroImage}
                alt="Wonder Mega City Township"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="flex items-center gap-1 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4" />
                  UIT Approved
                </span>
                <span className="flex items-center gap-1 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  RERA Registered
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Wonder Mega City Phase I
              </h2>

              <p className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                Alwar, Rajasthan
              </p>

              <p className="text-muted-foreground mb-6">
                Wonder Mega City is our flagship residential township offering
                2BHK, 3BHK, and Studio apartments at affordable prices. Located
                in the heart of Alwar with excellent connectivity, the project
                features modern amenities, landscaped gardens, and a
                family-friendly environment.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="text-xl font-bold text-primary">3 BHK & Studio Apartments</p>
                  <p className="text-sm text-muted-foreground">Unit Types</p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">₹17.5L+</p>
                  <p className="text-sm text-muted-foreground">
                    Starting Price
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">Ready</p>
                  <p className="text-sm text-muted-foreground">Possession</p>
                </div>
              </div>

              <Button variant="cta" size="lg" asChild>
                <a href="tel:9928054031" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Schedule Site Visit
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
