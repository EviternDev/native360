'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const imageDescriptions = {
  'Elder Companionship': [
    'Meaningful conversations and emotional support that creates genuine human connections and reduces loneliness for your loved ones.',
    'Engaging activities and hobbies tailored to personal interests, promoting cognitive stimulation and mental well-being.',
    'Creating peaceful moments together, whether relaxing at home or enjoying Kerala\'s beautiful natural surroundings.',
  ],
  'Property Management': [
    'Professional property inspections and comprehensive assessments ensuring your Kerala home is well-maintained and secure.',
    'Expert landscaping and garden maintenance keeping your property looking beautiful and well-preserved.',
    'Collaborative planning with homeowners to discuss improvements and coordinate all necessary property maintenance.',
  ],
  'Chauffeur Service': [
    'Professional drivers trained in elderly passenger care, ensuring safe and dignified transportation for every journey.',
    'Comfortable and reliable transportation through Kerala\'s scenic routes, maintaining your parents\' independence.',
    'Compassionate assistance at medical facilities, ensuring your parents reach important health appointments safely.',
  ],
  'Safe Passage': [
    'Protective supervision during neighborhood walks, ensuring safety while maintaining independence and dignity.',
    'Careful guidance during community activities, enabling your parents to enjoy local experiences securely.',
    'Support for shopping and market visits with watchful care and immediate assistance when needed.',
  ],
  'Celebrations & Events': [
    'Memorable birthday celebrations filled with joy, care, and family moments that create lasting memories.',
    'Anniversary celebrations honoring milestones with warmth, tradition, and personal touches that matter.',
    'Festival celebrations connecting your parents to cultural heritage and spiritual traditions they cherish.',
  ],
  'Home Maintenance': [
    'Expert plumbing and utility maintenance keeping essential home systems functional and safe.',
    'Professional electrical inspections and maintenance ensuring your home meets all safety standards.',
    'Comprehensive seasonal maintenance protecting your property\'s structure and extending its lifespan.',
  ],
};

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    title: string;
    description: string;
    images: string[];
    details: {
      fullDescription: string;
      benefits: string[];
      features: string[];
    };
  };
}

const ServiceDetailsModal = ({
  isOpen,
  onClose,
  service,
}: ServiceDetailsModalProps) => {
  if (!isOpen) return null;
  
  const descriptions = imageDescriptions[service.title as keyof typeof imageDescriptions] || [];

  const handleBookNow = () => {
    onClose();
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {service.title}
            </h2>

            {/* Full Description */}
            <p className="text-foreground/80 text-lg leading-relaxed mb-12">
              {service.details.fullDescription}
            </p>

            {/* Alternating Image-Text Sections */}
            <div className="mb-12 space-y-12">
              {service.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={image}
                      alt={`${service.title} - Detail ${index + 2}`}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Text */}
                  <div className="w-full md:w-1/2">
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {descriptions[index] ||
                        `Discover the details of ${service.title} and how it benefits you.`}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Key Benefits
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features Section */}
            {service.details.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
              <Button
                onClick={handleBookNow}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
              >
                Book Now
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1 py-6 text-lg"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsModal;
