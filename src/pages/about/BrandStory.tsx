import PageLayout from "@/components/layout/PageLayout";
import familyImage from "@/assets/happy-family.jpg";

export default function BrandStory() {
  return (
    <PageLayout
      title="Brand Story"
      subtitle="Our journey of building dreams into reality"
    >
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={familyImage}
                alt="Happy Family at Wonder Mega City"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                We Are One Of The Best{" "}
                <span className="text-orange-600 font-extrabold">
                  Real Estate Company{" "}
                </span>
                In Alwar NCR.
              </h2>

              <p className="text-muted-foreground mb-4">
                Wonder group has grown to become one of the leading real estate
                companies featuring luxury premium apartments and commercial
                buildings. Saagar Build Estate takes immense pride in its solid
                reputation and durable relationships built on quality
                constructions, on-time delivery, performance, and trust.
              </p>
              <p className="text-muted-foreground mb-4">
                The group has been developing projects in different verticals of
                real estate like residential, commercial, retail, office spaces
                and hospitality.
              </p>
              <p className="text-muted-foreground">
                We focus on your privacy, children's security and recreational
                zones which are hassle-free for everyone. Each flat is sensibly
                crafted to offer ample sunlight and excellent ventilation. With
                Wonder Mega City, you can come home to extensive amenities for
                limitless living with our clubhouse, outdoor games, yoga lawn,
                landscaped podium gardens, banquets halls and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
