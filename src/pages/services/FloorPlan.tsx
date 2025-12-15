import PageLayout from "@/components/layout/PageLayout";
import { BedDouble, Bath, Maximize, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingImage from "@/assets/building-render.jpg";

const floorPlans = [
  {
    type: "2 BHK",
    area: "450 sq.ft.",
    bedrooms: 1,
    bathrooms: 1,
    price: "Starting ₹12 Lacs*",
    features: ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Balcony"],
  },
  {
    type: "3 BHK",
    area: "750 sq.ft.",
    bedrooms: 2,
    bathrooms: 2,
    price: "Starting ₹30 Lacs*",
    features: ["Living Room", "2 Bedrooms", "Kitchen", "2 Bathrooms", "Balcony", "Dining Area"],
  },
  {
    type: "Studio Apartments",
    area: "1050 sq.ft.",
    bedrooms: 3,
    bathrooms: 2,
    price: "Starting ₹17.5 Lacs*",
    features: ["Living Room", "3 Bedrooms", "Kitchen", "2 Bathrooms", "2 Balconies", "Dining Area", "Store Room"],
  },
];

export default function FloorPlan() {
  return (
    <PageLayout
      title="Floor Plans"
      subtitle="Choose from thoughtfully designed floor plans for your family"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floorPlans.map((plan) => (
              <div
                key={plan.type}
                className="card-elevated overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-muted">
                  <img
                    src={buildingImage}
                    alt={plan.type}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {plan.type}
                    </h3>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {plan.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {plan.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4" />
                      {plan.bedrooms} Bed
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {plan.bathrooms} Bath
                    </span>
                  </div>

                  <ul className="space-y-1 text-sm text-muted-foreground mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>

                  {/* Button always aligned */}
                  <Button variant="hero" className="w-full mt-auto" asChild>
                    <a
                      href="tel:9928054031"
                      className="flex items-center gap-2 justify-center"
                    >
                      <Phone className="w-4 h-4" />
                      Enquire Now
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
