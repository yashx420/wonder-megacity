import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import Offers from "./pages/Offers";
import Projects from "./pages/Projects";
import BrandStory from "./pages/about/BrandStory";
import Management from "./pages/about/Management";
import Gallery from "./pages/about/Gallery";
import Testimonials from "./pages/about/Testimonials";
import FloorPlan from "./pages/services/FloorPlan";
import Amenities from "./pages/services/Amenities";
import PriceList from "./pages/services/PriceList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about/brand-story" element={<BrandStory />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/gallery" element={<Gallery />} />
            <Route path="/about/testimonials" element={<Testimonials />} />
            <Route path="/services/floor-plan" element={<FloorPlan />} />
            <Route path="/services/amenities" element={<Amenities />} />
            <Route path="/services/price-list" element={<PriceList />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
