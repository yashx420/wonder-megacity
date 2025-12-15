import PageLayout from "@/components/layout/PageLayout";
import heroImage from "@/assets/hero-township.jpg";
import buildingImage from "@/assets/building-render.jpg";
import familyImage from "@/assets/happy-family.jpg";

const galleryImages = [
  { src: heroImage, alt: "Township Overview", category: "Township" },
  { src: buildingImage, alt: "Building Exterior", category: "Building" },
  { src: familyImage, alt: "Happy Residents", category: "Community" },
  { src: heroImage, alt: "Green Spaces", category: "Landscape" },
  { src: buildingImage, alt: "Architecture", category: "Building" },
  { src: familyImage, alt: "Family Life", category: "Community" },
];

export default function Gallery() {
  return (
    <PageLayout 
      title="Gallery" 
      subtitle="Take a visual tour of Wonder Mega City"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-accent font-medium mb-1">{image.category}</span>
                  <span className="text-background font-semibold">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
