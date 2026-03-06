"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      id: 1,
      name: "The Essential Bridge",
      description: "Perfect for property oversight",
      price: "From ₹XX,XXX",
      image: "/pricing-essential-bridge.jpg",
      popular: false,
      features: [
        {
          category: " Estate Management",
          items: ["Exterior property monitoring", "Quarterly cleaning and maintenance checks"],
        },
        {
          category: "Parental Wellness",
          items: ["Bi-weekly wellness visits","Basic check-ins and support"],
        },
        {
          category: "Travel & Lifestyle",
          items: ["1 airport trip per year"],
        },
      ],
    },
    {
      id: 2,
      name: "The Comfort Connect",
      description: "Comprehensive care and support",
      price: "Starting from ₹XX,XXM",
      image: "/pricing-comfort-connect.jpg",
      popular: true,
      features: [
        {
          category: "Estate Management",
          items: ["Full rental management support", "Bi-annual deep cleaning"],
        },
        {
          category: "Parental Wellness",
          items: ["Weekly visits", "Accompanied outings and support"],
        },
        {
          category: "Travel & Lifestyle",
          items: ["2 Airport Trips/Year","House preparation before arrivals"],
        },
      ],
    },
    {
      id: 3,
      name: "The Heritage Elite",
      description: "Premium all-inclusive service",
      price: "Starting from ₹XX,XXM",
      image: "/pricing-heritage-elite.jpg",
      popular: false,
      features: [
        {
          category: "Estate Management",
          items: [
            "Full Stewardship + Guest-Ready",
            "Home always guest-ready",
          ],
        },
        {
          category: "Parental Wellness",
          items: ["Twice-weekly visits", "Event management and family support"],
        },
        {
          category: "Travel & Lifestyle",
          items: ["Unlimited local transport coordination","Travel planning and assistance"],
        },
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Premium Care Packages Designed for You
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto text-balance">
            From essential support to white-glove service, we offer flexible
            packages tailored to your family's needs and lifestyle.
          </p>
        </div>

        {/* Pricing Cards with Images */}
        <div className="space-y-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  {pkg.popular && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {pkg.name}
                </h3>
                <p className="text-lg text-foreground/70 mb-6">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-4xl font-bold text-primary mb-2">
                    {pkg.price}
                  </p>
                  <p className="text-sm text-foreground/60">
                    Customization available on request
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-6 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx}>
                      <h4 className="font-semibold text-foreground mb-3">
                        {feature.category}
                      </h4>
                      <ul className="space-y-2">
                        {feature.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-3">
                            <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => (window.location.href = "/#booking")}
                  className={`font-semibold py-3 px-8 text-lg transition-none hover:transition-none ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-2 border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Section */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-10 md:p-16 text-center border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Every family is unique. We create bespoke packages that perfectly
            match your needs, preferences, and budget.
          </p>
          <Button
            onClick={() => (window.location.href = "/#booking")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-8 text-lg"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
