import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-township.jpg";
import buildingImage from "@/assets/building-render.jpg";
import familyImage from "@/assets/happy-family.jpg";

const galleryImages = [
  { src: heroImage, alt: "Township View", label: "Township Overview" },
  { src: buildingImage, alt: "Building Exterior", label: "Building Design" },
  { src: familyImage, alt: "Happy Residents", label: "Happy Families" },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual tour of Wonder Mega City and see what makes it special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.alt}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-background font-medium">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/about/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
