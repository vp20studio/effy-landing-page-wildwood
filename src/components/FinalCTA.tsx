'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Truck, RotateCcw, Shield, Check } from 'lucide-react';
import { getCartUrl, PROMO_CODE } from '@/lib/shopify';

const benefits = [
  'Solid hardwood desktop, not veneer',
  'Whisper-quiet dual motor system',
  'Programmable height memory',
  'Anti-collision safety technology',
  'Cable management included',
  'Ships fully assembled frame',
];

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--forest)] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://cdn.shopify.com/s/files/1/0078/8715/9367/files/WalnutBlackWildwoodDesk2.jpg?v=1766187900"
                alt="Wildwood Standing Desk in home office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-white rounded-xl p-4 shadow-xl">
              <p className="text-sm text-[var(--forest)]/60">Starting at</p>
              <p className="text-3xl font-bold text-[var(--forest)]">$740</p>
              <p className="text-xs text-[var(--orange)] font-medium">Save 20% with code REFRESH20</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
              Ready to Transform<br />
              <span className="text-[var(--gold)]">Your Workspace?</span>
            </h2>

            <p className="text-lg text-white/70 mb-8">
              Join thousands of Canadians who have upgraded to the Wildwood.
              Try it risk-free for 30 days.
            </p>

            {/* Benefits checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[var(--gold)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[var(--forest)]" />
                  </div>
                  <span className="text-sm text-white/80">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#product-picker"
                className="inline-flex items-center justify-center gap-2 bg-[var(--orange)] hover:bg-[#a84216] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all"
              >
                Configure Your Desk
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={getCartUrl('Acacia', 'Black', 'S', PROMO_CODE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                Quick Buy - $740
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Truck, text: 'Free shipping' },
                { icon: RotateCcw, text: '30-day trial' },
                { icon: Shield, text: '20-year warranty' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/60">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
