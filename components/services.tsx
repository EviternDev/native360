import { Card } from "@/components/ui/card";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const Services = () => {
    const services = [
        {
            image: "/service-property.jpg",
            title: "Property Management",
            description:
                "Regular home maintenance, repairs coordination, and seasonal property care by trusted local professionals.",
        },
        {
            image: "/service-safe-passage.jpg",
            title: "Safe Passage",
            description:
                "Security-focused support ensuring peace of mind for your family and safety for your parents.",
        },
        {
            image: "/service-events.jpg",
            title: "Celebrations & Events",
            description:
                "Making birthdays, anniversaries, and special moments memorable with personalized care and attention.",
        },
        {
            image: "/service-companionship.jpg",
            title: "Elder Companionship",
            description:
                "Meaningful conversations, activities, and emotional support to reduce loneliness and promote well-being.",
        },

        {
            image: "/service-chauffeur.jpg",
            title: "Chauffeur Service",
            description:
                "Airport pick & drops and safe coordination of all transport requirements.",
        },

        {
            image: "/service-maintenance.jpg",
            title: "Home Coming",
            description:
                "We believe your vacation in Kerala should be a vacation, not a series of chores. Our mission is to handle the dusty rooms, rental house or the grocery runs before you land, so your only job is to spend quality time with your family.",
        },
    ];

    return (
        <section
            id="services"
            className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 to-background"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateOnScroll>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Services
                        </h2>
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            {/* Comprehensive care solutions designed specifically for NRI families */}
                            A Heritage Concierge is more than a service
                            provider; it is your professional representative in
                            your homeland. Unlike traditional agencies that
                            focus on a single task, a Hertiage Concierge manages
                            the entire ecosystem of your 'Native' life.
                        </p>
                        <br />
                        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                            This includes:
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <AnimateOnScroll
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <Card className="overflow-hidden bg-card border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group h-full">
                                {/* Service Image */}
                                <div className="relative h-48 overflow-hidden bg-muted">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Service Content */}
                                <div className="p-4 md:p-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </Card>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
