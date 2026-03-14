import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Native360",
  description:
    "Learn how Native360 handles inquiry data, abandoned booking forms, and follow-up communications.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
            Native360
          </p>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg">
            This page explains how Native360 uses inquiry details submitted or
            partially entered through the booking form on this website.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              1. Information we collect
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              When you use the booking form, Native360 may collect the details
              you enter, including your full name, email address, phone number,
              address, pin code, selected country code, and page activity
              metadata such as timestamps, referrer, and browser user agent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              2. Abandoned booking forms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              If you enter contact information into the booking form and leave
              the website before submitting, Native360 may retain the details
              entered at that point as an abandoned inquiry. This helps us
              understand missed inquiries and follow up with prospective
              customers who showed clear interest in our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              3. How abandoned inquiries are stored
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Abandoned inquiry records are sent from this website to a secure
              Native360 server endpoint and then written into a Google Sheet
              managed by Native360 through Google Apps Script. The stored record
              may include the most recent values entered into the booking form,
              the lead status, timestamps, and the fields that were completed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              4. Why we use this information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Native360 uses booking and abandoned inquiry data to respond to
              service requests, follow up on incomplete inquiries, improve the
              booking experience, and maintain internal records of prospective
              clients who requested or appeared ready to request support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              5. Third-party communication services
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Submitted inquiries currently redirect to WhatsApp for direct
              communication with Native360. If you continue through that flow,
              your inquiry details may also be processed by WhatsApp according
              to its own terms and privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              6. Contact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              For privacy-related questions or requests, contact Native360 at{" "}
              <a
                href="mailto:hello@native360.com"
                className="font-medium text-primary underline underline-offset-4"
              >
                hello@native360.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
