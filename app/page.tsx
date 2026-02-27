import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Districts from '@/components/districts';
import Testimonials from '@/components/testimonials';
import BookingForm from '@/components/booking-form';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Add padding to account for fixed navbar */}
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Districts />
        <Testimonials />
        <BookingForm />
      </div>
      <Footer />
    </main>
  );
}
