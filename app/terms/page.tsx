import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg font-semibold text-foreground/70 mb-10">Native 360</p>

            <p className="text-base text-foreground/80 leading-relaxed mb-10">
              These Terms &amp; Conditions govern the services provided by Native 360 and apply to all
              clients who engage with our services. By onboarding or subscribing to our services, the
              client agrees to the terms outlined below.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  1. On-Site Audit Requirement
                </h2>
                <div className="h-px bg-border mb-4" />
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>
                    All packages or services offered by Native 360 require a prior on-site audit of the
                    client&apos;s property and operational requirements.
                  </li>
                  <li>
                    An initial token fee will be charged for conducting the audit. This token fee will
                    be adjusted against the client&apos;s first month&apos;s subscription fee upon successful
                    onboarding.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  2. Custom Pricing
                </h2>
                <div className="h-px bg-border mb-4" />
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>
                    Following the completion of the on-site audit, Native 360 will evaluate the
                    property, operational scope, and service requirements.
                  </li>
                  <li>
                    The final pricing structure and service scope will be communicated to the client
                    after the audit and assessment process is completed.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  3. Payment Terms
                </h2>
                <div className="h-px bg-border mb-4" />
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>
                    All subscription payments must be paid in advance in accordance with the agreed
                    billing cycle (monthly, quarterly, or as otherwise agreed).
                  </li>
                  <li>
                    Native 360 reserves the right to pause or suspend services if payments are not
                    received within the agreed grace period.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  4. Subscription Cancellation
                </h2>
                <div className="h-px bg-border mb-4" />
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>
                    Clients may cancel their subscription by providing a written notice at least 30
                    days in advance.
                  </li>
                  <li>
                    Services will continue during the notice period unless otherwise agreed upon by
                    both parties.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  5. Termination of Services
                </h2>
                <div className="h-px bg-border mb-4" />
                <p className="text-foreground/80 text-base leading-relaxed mb-3">
                  Native 360 reserves the right to terminate a service agreement immediately under
                  the following circumstances:
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>Non-payment of dues beyond the permitted grace period</li>
                  <li>Breach of trust or misconduct</li>
                  <li>
                    Requests or expectations that fall outside the mutually agreed scope of work
                  </li>
                  <li>
                    Any unreasonable or unrealistic service demands that cannot be accommodated
                    within the defined service framework
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  6. Governing Law and Jurisdiction
                </h2>
                <div className="h-px bg-border mb-4" />
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>
                    These Terms &amp; Conditions shall be governed by and interpreted in accordance with
                    the laws of India.
                  </li>
                  <li>
                    Any disputes arising from these terms or from services provided by Native 360
                    shall be subject to the exclusive jurisdiction of the courts located in Kochi,
                    Kerala, India.
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  7. Changes to Terms
                </h2>
                <div className="h-px bg-border mb-4" />
                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/80 text-base leading-relaxed">
                  <li>
                    Native 360 reserves the right to modify or update these Terms &amp; Conditions at
                    any time.
                  </li>
                  <li>
                    Any updates will be published on the official platform or communicated to clients.
                    Continued use of our services after such updates shall constitute acceptance of the
                    revised terms.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
