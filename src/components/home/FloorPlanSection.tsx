import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Maximize } from "lucide-react";
import buildingImage from "@/assets/building-render.jpg";

const floorPlans = [
  {
    type: "2 BHK",
    area: "450 sq.ft.",
    bedrooms: 1,
    bathrooms: 1,
    price: "Starting ₹12 Lacs*",
  },
  {
    type: "3 BHK",
    area: "750 sq.ft.",
    bedrooms: 2,
    bathrooms: 2,
    price: "Starting ₹30 Lacs*",
  },
  {
    type: "Studio Apartment",
    area: "1050 sq.ft.",
    bedrooms: 3,
    bathrooms: 2,
    price: "Starting ₹17.5 Lacs*",
  },
];

export default function FloorPlanSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={buildingImage}
              alt="Wonder Mega City Building"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg">
              Book Now & Save!
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Floor Plans
            </h2>
            <p className="text-muted-foreground mb-8">
              Choose from a variety of thoughtfully designed floor plans that suit your family's needs and budget.
            </p>

            <div className="space-y-4 mb-8">
              {floorPlans.map((plan) => (
                <div
                  key={plan.type}
                  className="card-elevated p-4 flex flex-wrap items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{plan.type}</h3>
                    <p className="text-accent font-semibold">{plan.price}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {plan.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-4 h-4" />
                      {plan.bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {plan.bathrooms}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/services/floor-plan">View Detailed Plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
