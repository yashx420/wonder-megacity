import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Download,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Wonder Mega City Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl">Wonder Mega City</span>
            </div>

            <p className="text-background/70 text-sm mb-4">
              We are one of the most trusted infrastructure and construction
              company in Alwar-NCR.
            </p>

            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/wondermegacity"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/wondermegacity/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@wonder-group"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Brochure Download */}
            <a
              href="/wonder-mega-city-brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about/brand-story"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services/floor-plan"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Floor Plan
                </Link>
              </li>
              <li>
                <Link
                  to="/services/amenities"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Alwar, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:9928054031"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  9928054031
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@wondermegacity.com"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  info@wondermegacity.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="card-elevated bg-orange p-5 rounded-lg border border-orange-200 text-gray-900">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <h3 className="font-semibold text-lg">Opening Hours</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium">10:00am - 07:00pm</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">11:00am - 06:00pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-4 px-4 text-center text-sm text-background/50">
          <p>
            © {new Date().getFullYear()} Wonder Mega City. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
