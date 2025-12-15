import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    children: [
      { label: "Brand Story", href: "/about/brand-story" },
      { label: "Management", href: "/about/management" },
      { label: "Gallery", href: "/about/gallery" },
      { label: "Testimonials", href: "/about/testimonials" },
    ],
  },
  {
    label: "Our Services",
    children: [
      { label: "Floor Plan", href: "/services/floor-plan" },
      { label: "Amenities", href: "/services/amenities" },
      { label: "Price List", href: "/services/price-list" },
    ],
  },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Offers for Customers", href: "/offers" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919928054031", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:9928054031"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>9928054031</span>
            </a>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Alwar, Rajasthan
            </span>
          </div>
          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsApp}
            className="h-7 text-xs"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom py-3 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Wonder Mega City Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href!}
                    className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[180px] z-50 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="cta" size="lg" asChild>
              <a href="tel:9928054031">Talk To Expert</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-slide-up">
            {menuItems.map((item) => (
              <div key={item.label} className="mb-2">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Button variant="cta" className="w-full" asChild>
                <a href="tel:9928054031">Talk To Expert</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
