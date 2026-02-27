"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const heroImages = [
    { url: "/hero-kerala.jpg", title: "Premium Elder Care" },
    { url: "/hero-companionship.jpg", title: "Meaningful Companionship" },
    { url: "/hero-property.jpg", title: "Property Management" },
    { url: "/hero-chauffeur.jpg", title: "Safe Transportation" },
    { url: "/hero-family-care.jpg", title: "Connected Family Care" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Care for Your Parents,{" "}
            <span className="text-amber-100">From Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 text-balance leading-relaxed">
            Professional elder companionship and property management for NRI
            families. Peace of mind for you. Dignity and care for your parents.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#booking">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold w-full sm:w-auto">
                Book Now
              </Button>
            </a>
            <a href="#about">
              <Button
                variant="outline"
                className="relative overflow-hidden border-white text-white px-8 py-6 text-lg font-semibold w-full sm:w-auto
  bg-white/10 backdrop-blur-sm
  transition-all duration-300 ease-out
  hover:scale-105 hover:text-black group"
              >
                <span className="relative z-10">Learn More</span>

                {/* Sliding white fill on hover */}
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
