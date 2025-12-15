import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ashok R.K. Taneja",
    location: "Businessman, Alwar",
    text: "Buying a home from Wonder Group has been one of my best decisions in life.",
    rating: 5,
  },
  {
    name: "Yograj Mehendiratta",
    location: "Retd. Military Engg. Services, Alwar",
    text: "My family feels safe here and the environment is fresh and pollution free.",
    rating: 5,
  },
  {
    name: "Gunjan Gupta",
    location: "Business Woman, Alwar",
    text: "Buying our flat from Wonder Group has given us complete peace of mind.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from families who have made Wonder Mega City their home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-elevated p-6 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-4 right-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
