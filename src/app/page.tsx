'use client';

import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import StickyConversionBar from '@/components/StickyConversionBar';
import ProductHero from '@/components/ProductHero';
import TrustBanner from '@/components/TrustBanner';
import WhatsIncluded from '@/components/WhatsIncluded';
import SocialProof from '@/components/SocialProof';
import ProductFeatures from '@/components/ProductFeatures';
import HowItWorks from '@/components/HowItWorks';
import MaterialsDeepDive from '@/components/MaterialsDeepDive';
import ExplodedView from '@/components/ExplodedView';
import SpecsAccordion from '@/components/SpecsAccordion';
import AwardsCertifications from '@/components/AwardsCertifications';
import CustomerReviews from '@/components/CustomerReviews';
import PressLogos from '@/components/PressLogos';
import AssemblyInfo from '@/components/AssemblyInfo';
import FAQAccordion from '@/components/FAQAccordion';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      {/* 1. Fixed Navigation Header */}
      <Navigation />

      {/* 2. Sticky Conversion Bar (appears after scrolling past hero) */}
      <StickyConversionBar />

      <main className="min-h-screen">
        {/* 3. Product Hero: Gallery + Pricing + CTAs (Conversion Focus) */}
        <ProductHero />

        {/* 4. Trust Banner: Shipping/Trial/Warranty (Early Trust Signals) */}
        <TrustBanner />

        {/* 5. What's Included: Bundle Value Visualization */}
        <WhatsIncluded />

        {/* 6. Social Proof: Featured Testimonial Highlight */}
        <SocialProof />

        {/* 7. Product Features: Interactive Animated Showcase */}
        <section id="features">
          <ProductFeatures />
        </section>

        {/* 8. How It Works: 3-Step Simplicity */}
        <HowItWorks />

        {/* 9. Materials Deep-Dive: Quality Showcase */}
        <MaterialsDeepDive />

        {/* 10. Exploded View: Anatomy of Perfection */}
        <section id="specs">
          <ExplodedView />
        </section>

        {/* 11. Specifications Accordion: Technical Details */}
        <SpecsAccordion />

        {/* 12. Awards & Certifications: Credibility Badges */}
        <AwardsCertifications />

        {/* 13. Customer Reviews: Enhanced with Histogram */}
        <section id="reviews">
          <CustomerReviews />
        </section>

        {/* 14. Press & Media: Logo Strip */}
        <PressLogos />

        {/* 15. Assembly Information: Confidence Building */}
        <AssemblyInfo />

        {/* 16. FAQ Accordion: Objection Handling */}
        <section id="faq">
          <FAQAccordion />
        </section>

        {/* 17. Final CTA: Conversion Push */}
        <FinalCTA />

        {/* 18. Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
