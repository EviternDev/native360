'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    pinCode: '',
    landmark: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.pinCode
    ) {
      setErrorMessage('Please fill in all required fields');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit phone number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Prepare WhatsApp message with form data
    setTimeout(() => {
      const message = `Hello Native360,\n\nI'm interested in your services. Here are my details:\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nPin Code: ${formData.pinCode}${formData.landmark ? `\nLandmark: ${formData.landmark}` : ''}\n\nPlease contact me soon.`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);

      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/919061492118?text=${encodedMessage}`;
      window.location.href = whatsappUrl;

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        pinCode: '',
        landmark: '',
      });

      // Reset status after redirect
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started Today
          </h2>
          <p className="text-foreground/70 text-lg">
            Share your details and we'll connect with you soon to discuss your needs
          </p>
        </div>

        <Card className="p-8 md:p-10 bg-card border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full"
                disabled={status === 'loading'}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full"
                disabled={status === 'loading'}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full"
                disabled={status === 'loading'}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Address *
              </label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                className="w-full"
                disabled={status === 'loading'}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Pin Code */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pin Code *
                </label>
                <Input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="680001"
                  className="w-full"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Landmark */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nearby Landmark
                </label>
                <Input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="e.g., Near City Hospital"
                  className="w-full"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && errorMessage && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Success Message */}
            {status === 'success' && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-green-600 text-sm">
                  Redirecting to WhatsApp. Please wait...
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
            </Button>

            <p className="text-center text-sm text-foreground/60">
              For immediate assistance, please call{' '}
              <a href="tel:+919876543210" className="text-primary font-semibold hover:underline">
                +91-9876-543-210
              </a>
              {' '}or email{' '}
              <a
                href="mailto:hello@native360.com"
                className="text-primary font-semibold hover:underline"
              >
                hello@native360.com
              </a>
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
