import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import AmenitiesSection from "@/components/home/AmenitiesSection";
import FloorPlanSection from "@/components/home/FloorPlanSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Wonder Mega City - Affordable Homes in Alwar, Rajasthan | UIT & RERA Approved</title>
        <meta name="description" content="Wonder Mega City offers affordable, government-approved residential flats in Alwar, Rajasthan. 1BHK, 2BHK, 3BHK apartments starting at ₹12 Lacs. Book now!" />
        <meta name="keywords" content="Wonder Mega City, Alwar flats, affordable homes Rajasthan, RERA approved, UIT approved, 1BHK 2BHK 3BHK Alwar" />
        <link rel="canonical" href="https://wondermegacity.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <HighlightsSection />
          <AmenitiesSection />
          <FloorPlanSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
