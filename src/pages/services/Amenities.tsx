import PageLayout from "@/components/layout/PageLayout";
import {
  Droplets,
  Zap,
  Trees,
  Car,
  Shield,
  PlayCircle,
  Dumbbell,
  Building,
  Wifi,
  Wind,
  Users,
  Coffee,
  TrainFront
} from "lucide-react";

const amenities = [
  {
    icon: Droplets,
    label: "24/7 Water Supply",
    description: "Continuous water supply with underground storage",
  },
  {
    icon: Zap,
    label: "Power Backup",
    description: "Uninterrupted power supply for common areas",
  },
  {
    icon: Trees,
    label: "Landscaped Gardens",
    description: "Beautifully maintained green spaces",
  },
  {
    icon: TrainFront, 
    label: "RRTS Metro Nearby", 
    description: "Delhi-Alwar RRTS semi-high-speed rail corridor (by 2026) for rapid connectivity to Delhi and Haryana" 
  },
  {
    icon: Car,
    label: "Parking Facility",
    description: "Secure covered parking for residents",
  },
  {
    icon: Shield,
    label: "24/7 Security",
    description: "Round-the-clock security with CCTV",
  },
  {
    icon: PlayCircle,
    label: "Children's Play Area",
    description: "Safe and fun playground for kids",
  },
  {
    icon: Building,
    label: "Club House (60+)",
    description: "Multipurpose hall for events and gatherings",
  },
  {
    icon: Wifi,
    label: "24/7 Wi-Fi",
    description: "Fiber-optic internet infrastructure",
  },
  {
    icon: Zap,
    label: "E-Vehicle Charging Station",
    description: "Uninterrupted power supply for to charge your E-Vehicles",
  },
  {
    icon: Coffee,
    label: "Shopping Center",
    description: "On-site shopping for daily needs",
  },
];

export default function Amenities() {
  return (
    <PageLayout 
      title="Amenities" 
      subtitle="World-class amenities for comfortable modern living"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="card-elevated p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <amenity.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{amenity.label}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
