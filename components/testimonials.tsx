import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Don't spend your vacation cleaning. Land in Kerala, drop your bags, and start living. They prep your home before you arrive.",
            author: "Jacob Thomas",
            role: "NRI, Dubai",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        },
        {
            quote: "My mother feels cared for and engaged. The regular companionship has made a real difference in her daily happiness and peace of mind.",
            author: "Susan Cherian",
            role: "NRI, Singapore",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        },
        {
            quote: "The team is professional, reliable, and treats my parents like family. Finally, I can focus on work knowing everything is in good hands.",
            author: "Anand Pillai",
            role: "NRI, USA",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        },
    ];

    return (
        <section
            id="testimonials"
            className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What Families Say
                        </h2>
                        <p className="text-foreground/70 text-lg">
                            Real stories from NRI families who trust us with
                            what matters most
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <AnimateOnScroll
                            key={index}
                            animation="fade-up"
                            delay={index * 150}
                        >
                            <Card className="p-5 md:p-8 bg-gradient-to-br from-card to-primary/5 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                                {/* Quote */}
                                <Quote className="w-8 h-8 text-primary opacity-60 mb-4" />
                                <p className="text-foreground/80 text-base md:text-lg italic mb-4 flex-grow leading-relaxed">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-4 border-t border-primary/15">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-foreground/60">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
