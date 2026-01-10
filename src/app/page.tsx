'use client';

import SmoothScroll from '@/components/SmoothScroll';
import Navigation from '@/components/Navigation';
import StickyConversionBar from '@/components/StickyConversionBar';
import HeroSection from '@/components/HeroSection';
import ProductTitleRating from '@/components/ProductTitleRating';
import WhatsIncluded from '@/components/WhatsIncluded';
import TrustBanner from '@/components/TrustBanner';
import ScrollytellingSection from '@/components/ScrollytellingSection';
import MaterialsDeepDive from '@/components/MaterialsDeepDive';
import ExplodedView from '@/components/ExplodedView';
import HowItWorks from '@/components/HowItWorks';
import KeypadShowcase from '@/components/KeypadShowcase';
import SpecsAccordion from '@/components/SpecsAccordion';
import ComparisonSection from '@/components/ComparisonSection';
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
        {/* 3. Hero: Immersive full-screen with tagline */}
        <HeroSection />

        {/* 4. Product Title & Rating: Social proof + pricing anchor */}
        <ProductTitleRating />

        {/* 5. What's Included: Bundle value visualization */}
        <WhatsIncluded />

        {/* 6. Trust Banner: Shipping/trial/warranty prominence */}
        <TrustBanner />

        {/* 7. Scrollytelling: Technical deep-dive with fixed image */}
        <section id="features">
          <ScrollytellingSection />
        </section>

        {/* 8. Materials Deep-Dive: Wood grain showcase */}
        <MaterialsDeepDive />

        {/* 9. Exploded View: Anatomy of Perfection */}
        <section id="specs">
          <ExplodedView />
        </section>

        {/* 10. How It Works: 3-step setup flow */}
        <HowItWorks />

        {/* 11. Keypad Showcase: Smart Memory Controller */}
        <KeypadShowcase />

        {/* 12. Specifications Accordion: Expandable tech specs */}
        <SpecsAccordion />

        {/* 13. Comparison: Standard Desk vs Wildwood */}
        <section id="compare">
          <ComparisonSection />
        </section>

        {/* 14. Awards & Certifications: Credibility badges */}
        <AwardsCertifications />

        {/* 15. Customer Reviews: Testimonial carousel */}
        <section id="reviews">
          <CustomerReviews />
        </section>

        {/* 16. Press & Media: Logo strip */}
        <PressLogos />

        {/* 17. Assembly Information: Installation confidence */}
        <AssemblyInfo />

        {/* 18. FAQ Accordion: Common questions */}
        <section id="faq">
          <FAQAccordion />
        </section>

        {/* 19. Final CTA: Pricing recap + urgency */}
        <FinalCTA />

        {/* 20. Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
