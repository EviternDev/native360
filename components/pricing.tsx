'use client';

import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const packages = [
    {
      name: 'The Essential Bridge',
      description: 'Perfect for property oversight',
      price: 'From ₹XX,XXX',
      popular: false,
      features: [
        {
          category: 'Pillar 1: Estate Management',
          items: ['Exterior • Quarterly Clean', 'Property Inspections'],
        },
        {
          category: 'Pillar 2: Parental Wellness',
          items: ['No Services Included'],
        },
        {
          category: 'Pillar 3: Travel & Lifestyle',
          items: ['No Services Included'],
        },
      ],
    },
    {
      name: 'The Comfort Connect',
      description: 'Comprehensive care and support',
      price: 'Starting from ₹XX,XXM',
      popular: true,
      features: [
        {
          category: 'Pillar 1: Estate Management',
          items: ['Full Rental + Biannual Clean', 'Repairs • Upkeep'],
        },
        {
          category: 'Pillar 2: Parental Wellness',
          items: ['House Pop', 'Doctor Visits'],
        },
        {
          category: 'Pillar 3: Travel & Lifestyle',
          items: ['2 Airport Trips/Year'],
        },
      ],
    },
    {
      name: 'The Heritage Elite',
      description: 'Premium all-inclusive service',
      price: 'Starting from ₹XX,XXM',
      popular: false,
      features: [
        {
          category: 'Pillar 1: Estate Management',
          items: ['Full Stewardship + Guest-Ready', 'Property Oversight • Event Support'],
        },
        {
          category: 'Pillar 2: Parental Wellness',
          items: ['Concierge', 'Daily Wellness Check'],
        },
        {
          category: 'Pillar 3: Travel & Lifestyle',
          items: ['Unlimited Transit + Travel Help'],
        },
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 px-4 md:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Choose the package that best fits your family's needs. All packages include professional support and peace of mind.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`flex flex-col p-8 transition-all ${
                pkg.popular
                  ? 'border-primary border-2 shadow-2xl scale-105'
                  : 'border-border'
              }`}
            >
              {/* Package Header */}
              {pkg.popular && (
                <div className="mb-4 inline-block">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {pkg.name}
              </h3>
              <p className="text-foreground/60 text-sm mb-4">
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary mb-1">
                  {pkg.price}
                </p>
                <p className="text-sm text-foreground/60">
                  Contact us for custom quotes
                </p>
              </div>

              {/* Features */}
              <div className="flex-grow mb-8 space-y-6">
                {pkg.features.map((feature, fIdx) => (
                  <div key={fIdx}>
                    <h4 className="font-semibold text-foreground mb-3 text-sm">
                      {feature.category}
                    </h4>
                    <ul className="space-y-2">
                      {feature.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/70 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3 font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    : 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-background rounded-lg p-8 border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Customizable Packages Available
          </h3>
          <p className="text-foreground/70 mb-4">
            Every family is unique. We offer fully customizable packages tailored to your specific needs and budget. Contact our team to discuss a bespoke solution that works perfectly for your situation.
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
