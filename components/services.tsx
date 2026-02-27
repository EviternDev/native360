import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      image: '/service-companionship.jpg',
      title: 'Elder Companionship',
      description:
        'Meaningful conversations, activities, and emotional support to reduce loneliness and promote well-being.',
    },
    {
      image: '/service-property.jpg',
      title: 'Property Management',
      description:
        'Regular home maintenance, repairs coordination, and seasonal property care by trusted local professionals.',
    },
    {
      image: '/service-chauffeur.jpg',
      title: 'Chauffeur Service',
      description:
        'Airport pickups, local errands, doctor appointments, and safe transportation coordination.',
    },
    {
      image: '/service-safe-passage.jpg',
      title: 'Safe Passage',
      description:
        'Security-focused support ensuring peace of mind for your family and safety for your parents.',
    },
    {
      image: '/service-events.jpg',
      title: 'Celebrations & Events',
      description:
        'Making birthdays, anniversaries, and special moments memorable with personalized care and attention.',
    },
    {
      image: '/service-maintenance.jpg',
      title: 'Home Maintenance',
      description:
        'Professional upkeep, repairs coordination, and seasonal maintenance by trusted local professionals.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive care solutions designed specifically for NRI families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
