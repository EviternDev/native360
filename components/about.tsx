import { Card } from '@/components/ui/card';
import { Heart, Home, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Elder Companionship',
      description:
        'Dedicated, trained companions who provide genuine care and emotional support for your elderly loved ones.',
    },
    {
      icon: Home,
      title: 'Property Management',
      description:
        'Professional maintenance and care of your Kerala home. From daily upkeep to seasonal preparations.',
    },
    {
      icon: Users,
      title: 'Local Support',
      description:
        'Your trusted local presence. Healthcare coordination, errands, and family connections all handled with care.',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Native360?
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              For NRI families, distance shouldn't mean disconnect. We understand the unique challenges 
              of managing aging parent care and home maintenance from abroad.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Our dedicated team becomes your extended family in Kerala, ensuring your parents receive 
              compassionate care while your home is maintained with integrity and professionalism.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/about-family.jpg"
              alt="Caregiver helping elderly person with meals"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
