import { MapPin } from 'lucide-react';

const Districts = () => {
  const districts = [
    {
      name: 'Kottayam',
      description: 'Central Kerala hub with strong community support',
      image: '/district-kottayam.jpg',
    },
    {
      name: 'Ernakulam',
      description: 'Coastal district with excellent healthcare facilities',
      image: '/district-ernakulam.jpg',
    },
    {
      name: 'Pathanamthitta',
      description: 'Scenic mountain district with lush plantations and spiritual heritage',
      image: '/district-pathanamthitta.jpg',
    },
  ];

  return (
    <section id="districts" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serving Kerala
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We have a strong presence across multiple districts in Kerala, ensuring local expertise 
            and personalized care wherever your parents are
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {districts.map((district, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden mb-4 shadow-md">
                <img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              </div>

              {/* Content */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {district.name}
                  </h3>
                  <p className="text-foreground/70">
                    {district.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Districts;
