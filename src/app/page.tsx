'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProofStats from '@/components/SocialProofStats';
import ValueProps from '@/components/ValueProps';
import PricingComparison from '@/components/PricingComparison';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Mobile Sticky Conversion Bar */}
      <StickyBar />

      <main className="min-h-screen">
        {/* Hero: Full-screen with gradient effects */}
        <Hero />

        {/* Social Proof Stats: Horizontal strip */}
        <SocialProofStats />

        {/* Value Props: 4 benefit cards */}
        <section id="features">
          <ValueProps />
        </section>

        {/* Pricing Comparison: Treantly-style side-by-side */}
        <PricingComparison />

        {/* How It Works: 3-step numbered process */}
        <HowItWorks />

        {/* Customer Reviews */}
        <section id="reviews">
          <Reviews />
        </section>

        {/* FAQ Accordion */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Final CTA: Conversion section */}
        <FinalCTA />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
