import PageLayout from "@/components/layout/PageLayout";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Ashok R.K. Taneja",
    designation: "Businessman, Alwar",
    image: "/testimonials/mr-ashok.jpg",
    text: "Buying a home from Wonder Group has been one of my best decision in life.",
    rating: 5,
  },
  {
    name: "Mr. Yograj Mehendiratta",
    designation: "Retd. Military Engg. Services, Alwar",
    image: "/testimonials/mr-yograj.jpg",
    text: "My family is safe & environment is fresh & pollution free.",
    rating: 5,
  },
  {
    name: "Mrs. Gunjan Gupta",
    designation: "Business Woman, Alwar",
    image: "/testimonials/mrs-gunjan.jpg",
    text: "Buying our flat from Wonder Group has given us peace of mind.",
    rating: 5,
  },
  {
    name: "Mrs. Shikha Ghosh",
    designation: "Alwar Public School Coordinator, Alwar",
    image: "/testimonials/mrs-shikha.jpg",
    text: "I get the feeling of living in one big family.",
    rating: 5,
  },
  {
    name: "Mr. Nikunj Sanghi",
    designation: "MD, J.S. Fourwheel Motor Pvt. Ltd., Alwar",
    image: "/testimonials/mr-nikunj.jpg",
    text: "Wonder Group’s residential projects provide all facilities for comfortable living.",
    rating: 5,
  },
  {
    name: "Mr. Balveer Singh Dheer",
    designation: "Ex Principal Of APS (JPS), Alwar",
    image: "/testimonials/mr-balveer.jpg",
    text: "Wonder Group is a very safe Group to invest in.",
    rating: 5,
  },
  {
    name: "Mr. B.K. Shrivastava",
    designation: "Ex VP – Havell’s Group, Alwar",
    image: "/testimonials/mr-shrivastava.jpg",
    text: "Residential projects of Wonder Group are complete in all respects. These are marvelous.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <PageLayout
      title="Testimonials"
      subtitle="What our customers say about Wonder Mega City"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="card-elevated p-6 relative flex flex-col"
              >
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                {/* Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 shadow"
                />

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground text-sm italic text-center mb-4">
                  “{t.text}”
                </p>

                {/* Name */}
                <div className="text-center mt-auto">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
