import { Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span>+91-9876-543-210</span>
            </a>
            <a
              href="mailto:hello@native360.com"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span>hello@native360.com</span>
            </a>
            <div className="flex items-center gap-3 pt-2">
              <Clock className="w-5 h-5" />
              <div>
                <p className="text-sm">24/7 Support</p>
                <p className="text-xs opacity-90">Always here when you need us</p>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#districts" className="hover:opacity-80 transition-opacity">
                  Kottayam
                </a>
              </li>
              <li>
                <a href="#districts" className="hover:opacity-80 transition-opacity">
                  Ernakulam
                </a>
              </li>
              <li>
                <a href="#districts" className="hover:opacity-80 transition-opacity">
                  Alappuzha
                </a>
              </li>
              <li>
                <a href="#districts" className="hover:opacity-80 transition-opacity">
                  Other Districts (Upon Request)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:opacity-80 transition-opacity">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-80 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-80 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:opacity-80 transition-opacity">
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Brand & Tagline */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Native360</h2>
              <p className="text-sm opacity-90">
                Professional property management and elder companionship for NRI families.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-sm opacity-90 md:text-right">
              <p>&copy; 2024 Native360. All rights reserved.</p>
              <p className="mt-2">Care with integrity. Service with pride.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
