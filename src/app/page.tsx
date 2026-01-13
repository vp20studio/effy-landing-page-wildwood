'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProofStats from '@/components/SocialProofStats';
import ProductPicker from '@/components/ProductPicker';
import Benefits from '@/components/Benefits';
import Reviews from '@/components/Reviews';
import Comparison from '@/components/Comparison';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import Specifications from '@/components/Specifications';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Mobile Sticky Conversion Bar */}
      <StickyBar />

      <main className="min-h-screen">
        {/* Section 1: Hero - Interactive desk visualizer */}
        <Hero />

        {/* Section 2: Social Proof Stats - Trust strip */}
        <SocialProofStats />

        {/* Section 3: Product Picker - Configure your desk */}
        <ProductPicker />

        {/* Section 4: Benefits - Transformation focus */}
        <Benefits />

        {/* Section 5: Specifications - Technical details */}
        <Specifications />

        {/* Section 6: Reviews - Testimonials */}
        <section id="reviews">
          <Reviews />
        </section>

        {/* Section 6: Comparison - vs competitors */}
        <Comparison />

        {/* Section 7: How It Works - Order process */}
        <HowItWorks />

        {/* Section 8: FAQ - Objection handling */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Section 9: Final CTA - Risk reversal */}
        <FinalCTA />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
