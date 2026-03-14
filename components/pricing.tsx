"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Image from "next/image";

const packages = [
  {
    id: 1,
    name: "The Essential Bridge",
    description: "Essential care for your home and parents",
    price: "₹18,000",
    priceUsd: "$196",
    image: "/pricing-essential-bridge.jpg",
    popular: false,
    features: [
      {
        category: "Estate Management",
        items: ["Deep Cleaning", "Maintenance check"],
      },
      {
        category: "Parental Wellness",
        items: ["Visits — Home", "Digital Support"],
      },
      {
        category: "Travel & Lifestyle",
        items: ["Airport transfer (one way)"],
      },
    ],
  },
  {
    id: 2,
    name: "The Mithram",
    description: "Deeper presence for family and home",
    price: "₹30,000",
    priceUsd: "$326",
    image: "/pricing-comfort-connect.jpg",
    popular: true,
    features: [
      {
        category: "Estate Management",
        items: ["Deep Cleaning", "Exterior cleaning"],
      },
      {
        category: "Parental Wellness",
        items: ["Visits — Home", "Visits — Outside"],
      },
      {
        category: "Travel & Lifestyle",
        items: ["Airport transfer (one way)", "Safe Passage", "Special Occasion / Gift delivery"],
      },
    ],
  },
  {
    id: 3,
    name: "The Heritage Elite",
    description: "Full stewardship of your home and family",
    price: "₹45,000",
    priceUsd: "$490",
    image: "/pricing-heritage-elite.jpg",
    popular: false,
    features: [
      {
        category: "Estate Management",
        items: ["Deep Cleaning", "Exterior cleaning", "Rental Management"],
      },
      {
        category: "Parental Wellness",
        items: ["Visits — Home", "Visits — Outside"],
      },
      {
        category: "Travel & Lifestyle",
        items: ["Event Coordination", "Tour plan & Assistance", "Airport transfer (one way)", "Safe Passage"],
      },
      {
        category: "Others",
        items: ["Selling of Property Goods / Trees / Things"],
      },
    ],
  },
];

// Total feature items per plan — used to decide if expand is needed
const totalItems = (pkg: typeof packages[number]) =>
  pkg.features.reduce((acc, f) => acc + f.items.length, 0);

// The tallest plan drives height — everything else expands to match
const MAX_ITEMS = Math.max(...packages.map(totalItems));

function PricingCard({ pkg }: { pkg: typeof packages[number] }) {
  const [expanded, setExpanded] = useState(false);
  const isShort = totalItems(pkg) < MAX_ITEMS;
  const showToggle = isShort;

  return (
    <Card
      className={`group relative flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 gap-0 py-0 ${
        pkg.popular
          ? "lg:scale-105 ring-2 ring-primary/40 shadow-lg shadow-primary/10"
          : "hover:border-primary/30"
      }`}
    >
      {/* Image Banner — flush to top, no gap */}
      <div className="relative h-52 w-full overflow-hidden flex-shrink-0 rounded-t-xl">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        {pkg.popular && (
          <div className="absolute top-4 right-4">
            <Badge className="text-xs font-bold px-3 py-1 rounded-full shadow-md">
              MOST POPULAR
            </Badge>
          </div>
        )}
      </div>

      {/* Card Header: Name + Description + Price */}
      <CardHeader className="px-6 pt-5 pb-0">
        <h3 className="text-2xl font-bold text-foreground">
          {pkg.name}
        </h3>
        <p className="text-sm text-foreground/60">
          {pkg.description}
        </p>
        <div className="mt-2">
          <p className="text-xs font-medium text-foreground/50 uppercase tracking-wide mb-0.5">
            Starting from
          </p>
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-primary">
              {pkg.price}
            </p>
            <p className="text-base font-medium text-foreground/40">
              {pkg.priceUsd}
            </p>
          </div>
          <p className="text-xs mt-1">
            <span className="font-semibold text-foreground/80">per quarter</span>
            <span className="text-foreground/50"> (3 months) &middot; customisable on request</span>
          </p>
        </div>
      </CardHeader>

      {/* Features — grow to fill available space */}
      <CardContent className="flex-1 space-y-5 px-6 pt-5 pb-0">
        {pkg.features.map((feature, fIdx) => (
          <div key={fIdx}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2.5 border-l-2 border-primary/40 pl-2">
              {feature.category}
            </h4>
            <ul className="space-y-2">
              {feature.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2.5">
                  <span className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="text-sm text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Expand toggle — only shown on shorter cards */}
        {showToggle && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary/70 hover:text-primary transition-colors duration-200 mt-2 group/toggle"
            aria-expanded={expanded}
          >
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
            {expanded ? "Show less" : "What's not included"}
          </button>
        )}

        {/* Greyed-out "not included" items shown when expanded */}
        {showToggle && expanded && (
          <div className="space-y-5 border-t border-border/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {packages[2].features
              .filter(
                (eliteFeature) =>
                  !pkg.features.some((f) => f.category === eliteFeature.category) ||
                  eliteFeature.items.some(
                    (item) =>
                      !pkg.features
                        .find((f) => f.category === eliteFeature.category)
                        ?.items.includes(item)
                  )
              )
              .map((feature, fIdx) => {
                const existingCat = pkg.features.find(
                  (f) => f.category === feature.category
                );
                const missingItems = feature.items.filter(
                  (item) => !existingCat?.items.includes(item)
                );
                if (missingItems.length === 0) return null;
                return (
                  <div key={fIdx} className="opacity-40">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2.5 border-l-2 border-border pl-2">
                      {feature.category}
                    </h4>
                    <ul className="space-y-2">
                      {missingItems.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5">
                          <span className="bg-muted rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="w-3.5 h-3.5 text-foreground/30" />
                          </span>
                          <span className="text-sm text-foreground/40 line-through decoration-foreground/20">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        )}
      </CardContent>

      {/* CTA — always pinned to bottom */}
      <CardFooter className="mt-auto px-6 pb-6 pt-5">
        <Button
          variant={pkg.popular ? "default" : "outline"}
          onClick={() => (window.location.href = "/#booking")}
          className={`w-full font-semibold py-3 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
            pkg.popular
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "border-2 border-primary text-primary hover:bg-primary/10"
          }`}
        >
          Talk to Us
        </Button>
      </CardFooter>
    </Card>
  );
}

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Flexible Care Plans
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 text-balance">
              Our Packages
            </h2>
            <div className="w-12 h-0.5 bg-primary/40 mx-auto mb-5 rounded-full" />
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-balance leading-relaxed">
              One point of contact for your parents, your property, and everything
              that ties you to Kerala. Choose the level of care that fits your family.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Pricing Cards Grid — items-stretch so all cards fill the same row height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <AnimateOnScroll
              key={pkg.id}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="h-full">
                <PricingCard pkg={pkg} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Custom Solution CTA */}
        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="mt-20 rounded-2xl p-10 md:p-16 text-center border border-border bg-gradient-to-br from-secondary/10 via-primary/5 to-muted/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Need Something Different?
              </h3>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                No two families are the same. Tell us what matters most, and
                we&apos;ll build a package around your life back home.
              </p>
              <Button
                onClick={() => (window.location.href = "/#booking")}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-8 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Pricing;
