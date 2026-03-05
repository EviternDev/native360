import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
