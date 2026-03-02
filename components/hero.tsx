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
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % heroImages.length,
            );
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
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out animate-kenburns ${
                            index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                        style={{
                            backgroundImage: `url(${image.url})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                    />
                ))}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-amber-900/40" />
            </div>

<<<<<<< HEAD
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.8),0_1px_4px_rgba(0,0,0,0.6)]">
            Care for Your Parents,{" "}
            <span className="text-amber-300">From Anywhere</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 text-balance leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.9),0_1px_3px_rgba(0,0,0,0.7)]">
            Professional elder companionship and property management for NRI
            families. Peace of mind for you. Dignity and care for your parents.
          </p>
=======
            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    {/* Ambient glow blob */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/15 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />
                    {/* Text scrim */}
                    <div className="relative mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-balance [text-shadow:0_2px_20px_rgba(0,0,0,0.8),0_1px_4px_rgba(0,0,0,0.6)]">
                            Care for Your Parents,{" "}
                            <span className="text-amber-300">
                                From Anywhere
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 text-balance leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.9),0_1px_3px_rgba(0,0,0,0.7)]">
                            Professional elder companionship and property
                            management for NRI families. Peace of mind for you.
                            Dignity and care for your parents.
                        </p>
                    </div>
>>>>>>> 79b5933e1cdbf1eb4e3081c869c63d1ebed1b367

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                        <a href="#booking">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold w-full sm:w-auto shadow-lg transition-all duration-300 hover:scale-105">
                                Book Now
                            </Button>
                        </a>
                        <a href="#about">
                            <Button
                                variant="outline"
                                className="relative overflow-hidden border-white/70 text-white px-8 py-6 text-lg font-semibold w-full sm:w-auto
  bg-white/10 backdrop-blur-sm
  transition-all duration-300 ease-out
  hover:scale-105 hover:text-black hover:border-white group"
                            >
                                <span className="relative z-10">
                                    Learn More
                                </span>

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
