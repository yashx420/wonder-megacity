import PageLayout from "@/components/layout/PageLayout";

export default function Management() {
  return (
    <PageLayout title="Management" subtitle="Message from the Director">
      <section className="section-padding bg-background">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 md:p-10">
              {/* Director Image */}
              <div className="flex flex-col items-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full ring-4 ring-primary/20"></div>
                  <img
                    src="/atul-singh.jpg"
                    alt="Atul Singh - Director, Wonder Mega City"
                    className="relative w-48 h-48 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
                  />
                </div>

                <h2 className="mt-5 text-2xl md:text-3xl font-bold text-foreground">
                  Atul Singh
                </h2>
                <p className="text-muted-foreground text-lg">Director</p>
              </div>

              {/* Director Message */}
              <div className="text-muted-foreground leading-relaxed space-y-4 text-justify">
                <p>
                  It has been our great privilege to do pioneering work towards
                  vertical development in and around Alwar (National Capital
                  Region). We have done a sincere effort that the concept of
                  community living and readymade houses get popularized in
                  somewhat traditional mindset of Alwar region.
                </p>

                <p>
                  It gives us pleasure to announce that we have received great
                  patronage in short span of time. We owe this success to our
                  customers, dedicated team of architects, engineers and
                  professionals working relentlessly to make best buildings at
                  most affordable price.
                </p>

                <p>
                  We have recently forayed into our most ambitious and largest
                  residential building with <strong>Wonder Megacity</strong> in
                  Alwar. We hope that we would receive same support and
                  cooperation from all quarters.
                </p>
              </div>

              {/* Contact Details */}
              <div className="mt-8 bg-muted p-6 rounded-lg">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@wondermegacity.com"
                    className="text-primary hover:underline"
                  >
                    info@wondermegacity.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong>
                  <br />
                  Office No. 315, Wonder Mall,
                  <br />
                  Company Bagh Road, Alwar - 301001,
                  <br />
                  Rajasthan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
