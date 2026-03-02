import { Card } from "@/components/ui/card";
import { Heart, Home, Users } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const About = () => {
    const features = [
        {
            icon: Heart,
            title: "Estate Management",
            description:
                "Maintenance, Deepcleaning, Rental Liason, Buying/Selling Assets.",
        },
        {
            icon: Home,
            title: "Parental Wellness",
            description:
                "Compainonship, Temple/Church visits, Shopping, Celebration coordination.",
        },
        {
            icon: Users,
            title: "Travel & Lifestyle",
            description:
                "Airport Pick-up/Drop, Vacation Stay Prep, Parents International Travel assistance.",
        },
    ];

    return (
        <section id="about" className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-16">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Why Native360?
                            </h2>
                            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                                We are the only Heritage Concierge in Kerala
                                that manages your entire domestic ecosystem. Why
                                deal with four different vendors for property,
                                elders, travel, and logistics. We provide a
                                single, sophisticated point of contact for
                                everything you hold dear in the homeland.
                            </p>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                We aren't just "staff"; we are fellow Malayalis
                                who understand the nuances of our culture.
                                Whether it’s coordinating a specific offerings
                                to temple/church, sourcing authentic local
                                goods, or celebrating a 70th birthday with
                                traditional warmth, we act with the cultural
                                sensitivity that only a "Native" can provide.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10">
                            <img
                                src="/about-family.jpg"
                                alt="Caregiver helping elderly person with meals"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <AnimateOnScroll
                                key={index}
                                animation="fade-up"
                                delay={index * 150}
                            >
                                <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-2 border-t-primary/30">
                                    <div className="bg-primary/10 rounded-xl p-3 w-fit mb-4">
                                        <Icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card>
                            </AnimateOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
