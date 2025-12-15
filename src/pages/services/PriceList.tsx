import PageLayout from "@/components/layout/PageLayout";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import buildingImage from "@/assets/building-render.jpg";

const priceList = [
  { type: "1 BHK", area: "450 sq.ft.", basePrice: "₹12,00,000", note: "EMI from ₹8,500/month" },
  { type: "1 BHK (Corner)", area: "480 sq.ft.", basePrice: "₹13,50,000", note: "Premium corner unit" },
  { type: "2 BHK", area: "750 sq.ft.", basePrice: "₹22,00,000", note: "EMI from ₹15,000/month" },
  { type: "2 BHK (Corner)", area: "800 sq.ft.", basePrice: "₹24,50,000", note: "Premium corner unit" },
  { type: "3 BHK", area: "1050 sq.ft.", basePrice: "₹32,00,000", note: "EMI from ₹22,000/month" },
  { type: "3 BHK (Premium)", area: "1150 sq.ft.", basePrice: "₹36,00,000", note: "Top floor with terrace" },
];

export default function PriceList() {
  return (
    <PageLayout 
      title="Price List" 
      subtitle="Transparent pricing with no hidden costs"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="card-elevated overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Unit Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Area</th>
                    <th className="px-6 py-4 text-left font-semibold">Base Price*</th>
                    <th className="px-6 py-4 text-left font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {priceList.map((item, index) => (
                    <tr key={index} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-foreground">{item.type}</td>
                      <td className="px-6 py-4 text-muted-foreground">{item.area}</td>
                      <td className="px-6 py-4 font-semibold text-accent">{item.basePrice}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-8">
            * Prices are indicative and subject to change. GST and other charges applicable. 
            Contact us for the latest prices and payment plans.
          </p>

          <div className="text-center">
            <Button variant="cta" size="xl" asChild>
              <a href="tel:9928054031" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get Detailed Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
