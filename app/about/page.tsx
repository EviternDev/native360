import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Users, Star } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Briefcase,
      title: "20 Years of Leadership",
      description:
        "Backed by two decades of executive corporate leadership, we bring unparalleled professionalism to every engagement.",
    },
    {
      icon: Award,
      title: "IIM Kozhikode Credentials",
      description:
        "Our founder's IIM Kozhikode background ensures world-class management practices are applied to your family's needs.",
    },
    {
      icon: Users,
      title: "Family-First Approach",
      description:
        "We operate with the trust of a family member while maintaining the accountability of a corporate entity.",
    },
    {
      icon: Star,
      title: "Cultural Integrity",
      description:
        "As fellow Malayalis, we bring deep cultural sensitivity and genuine understanding to every service we provide.",
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="pt-16">
        {/* Hero Banner */}
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
              About <span className="text-primary">Native360</span>
            </h1>
            <div className="w-12 h-0.5 bg-white/30 mx-auto mb-5 rounded-full" />
            <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto text-balance leading-relaxed">
              Built on trust, accountability, and two decades of executive excellence.
            </p>
          </div>
          {/* Bottom fade into page background */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                &ldquo;You&apos;ve likely realized by now that you don&apos;t
                need more &lsquo;vendors&rsquo;&mdash;you need a reliable
                partner. Someone you can trust as much as a family member, but
                hold accountable like a corporate entity. Native 360 was built
                precisely for this reason. Backed by 20 years of executive
                corporate leadership and IIM Kozhikode credentials, we bring
                absolute professional rigor directly to your family&apos;s
                doorstep.&rdquo;
              </p>
              <div className="mt-8 w-16 h-0.5 bg-primary mx-auto rounded-full" />
            </div>

            {/* Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                  Native360 was born from a deeply personal understanding of
                  the challenges NRI families face. Managing property, caring
                  for ageing parents, and preserving family traditions from
                  thousands of miles away is an immense responsibility.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  We are the only Heritage Concierge in Kerala that manages
                  your entire domestic ecosystem&mdash;a single, sophisticated
                  point of contact for everything you hold dear in the
                  homeland.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl ring-1 ring-primary/10">
                <img
                  src="/about-family.jpg"
                  alt="Native360 team serving families"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Founder Section */}
            <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16 md:mb-24 border border-border">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                  Our Founder
                </h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6 text-center">
                  Native360 is led by a founder with over 20 years of executive
                  corporate leadership experience and a postgraduate degree from
                  IIM Kozhikode&mdash;one of India&apos;s premier management
                  institutions.
                </p>
                <p className="text-foreground/80 text-lg leading-relaxed text-center">
                  This rare combination of corporate rigour and deep-rooted
                  Malayali heritage drives every decision at Native360, ensuring
                  that your family receives nothing short of the highest
                  standard of care and service.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
                Why Families Trust Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-2 border-t-primary/30"
                    >
                      <div className="bg-primary/10 rounded-xl p-3 w-fit mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
