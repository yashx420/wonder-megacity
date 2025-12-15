import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Droplets,
  Zap,
  Trees,
  Car,
  Shield,
  PlayCircle,
  Dumbbell,
  Building,
  TrainFront
} from "lucide-react";

const amenities = [
  { icon: Droplets, label: "24/7 Water Supply" },
  { icon: Zap, label: "Power Backup" },
  { icon: Trees, label: "Landscaped Gardens" },
  { icon: TrainFront, label: "RRTS Metro Nearby" },
  { icon: Car, label: "Covered Parking" },
  { icon: Shield, label: "24/7 Security" },
  { icon: PlayCircle, label: "Children's Play Area" },
  { icon: Building, label: "Community Hall" },
];

export default function AmenitiesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Modern Amenities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience comfortable living with world-class amenities designed for modern families.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.label}
              className="card-elevated p-4 md:p-6 text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                <amenity.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <p className="text-sm font-medium text-foreground">{amenity.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/services/amenities">View All Amenities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
