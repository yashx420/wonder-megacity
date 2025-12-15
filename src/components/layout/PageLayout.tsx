import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16 md:py-20">
          <div className="container-custom px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up">
                {subtitle}
              </p>
            )}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
