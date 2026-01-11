'use client';

import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import StickyConversionBar from '@/components/StickyConversionBar';
import HeroSection from '@/components/HeroSection';
import ProductGallery from '@/components/ProductGallery';
import ProductTitleRating from '@/components/ProductTitleRating';
import WhatsIncluded from '@/components/WhatsIncluded';
import TrustBanner from '@/components/TrustBanner';
import ScrollytellingSection from '@/components/ScrollytellingSection';
import HowItWorks from '@/components/HowItWorks';
import KeypadShowcase from '@/components/KeypadShowcase';
import ComparisonSection from '@/components/ComparisonSection';
import CustomerReviews from '@/components/CustomerReviews';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

// Optimized for cold Meta ad traffic - removed low-conversion sections:
// - ExplodedView (AI images)
// - MaterialsDeepDive (too detailed)
// - SpecsAccordion (moved to FAQ)
// - AwardsCertifications (not compelling for cold traffic)
// - PressLogos (placeholder text)
// - AssemblyInfo (not conversion-focused)

export default function Home() {
  return (
    <SmoothScroll>
      {/* Fixed Navigation Header */}
      <Navigation />

      {/* Sticky Conversion Bar (appears after scrolling past hero) */}
      <StickyConversionBar />

      <main className="min-h-screen">
        {/* Hero: First impression - must convert in 3-7 seconds */}
        <HeroSection />

        {/* Product Gallery: Show the real product */}
        <ProductGallery />

        {/* Product Title & Rating: Social proof + pricing anchor */}
        <ProductTitleRating />

        {/* What's Included: Bundle value visualization */}
        <WhatsIncluded />

        {/* Trust Banner: Shipping/trial/warranty */}
        <TrustBanner />

        {/* Features: Simplified tech highlights */}
        <section id="features">
          <ScrollytellingSection />
        </section>

        {/* How It Works: 3-step setup flow */}
        <HowItWorks />

        {/* Keypad Showcase: Smart Memory Controller */}
        <KeypadShowcase />

        {/* Comparison: Standard Desk vs Wildwood */}
        <section id="compare">
          <ComparisonSection />
        </section>

        {/* Customer Reviews: Social proof */}
        <section id="reviews">
          <CustomerReviews />
        </section>

        {/* FAQ: Objection handling */}
        <section id="faq">
          <FAQAccordion />
        </section>

        {/* Final CTA: Pricing recap + urgency */}
        <FinalCTA />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
