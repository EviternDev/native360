import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        {/* Compact Hero Banner */}
        <section className="relative pb-32 md:pb-40 pt-16 md:pt-20 px-4 md:px-8 bg-gradient-to-br from-secondary via-secondary/90 to-primary/80 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
              Native360 Heritage Concierge
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]">
              Care That Fits{" "}
              <span className="text-primary">Your Family</span>
            </h1>
            <div className="w-12 h-0.5 bg-white/30 mx-auto mb-5 rounded-full" />
            <p className="text-base md:text-lg text-white/75 max-w-xl mx-auto text-balance leading-relaxed">
              Whether it&apos;s weekly visits to Amma or keeping your ancestral home guest-ready,
              pick the package that fits &mdash; or let us build one just for you.
            </p>
          </div>
          {/* Bottom fade into page background */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        </section>

        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
