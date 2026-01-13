'use client';

import { motion } from 'framer-motion';
import { Ruler, Zap, Volume2, Shield, Weight, Gauge } from 'lucide-react';

const keySpecs = [
  {
    icon: Ruler,
    label: 'Height Range',
    value: '23" - 50"',
    description: 'Fits users 4\'10" to 6\'8"',
  },
  {
    icon: Zap,
    label: 'Lift Capacity',
    value: '310 lbs',
    description: 'Dual motor system',
  },
  {
    icon: Volume2,
    label: 'Noise Level',
    value: '< 45dB',
    description: 'Whisper quiet',
  },
  {
    icon: Gauge,
    label: 'Lift Speed',
    value: '35mm/s',
    description: '1.4 inches per second',
  },
  {
    icon: Weight,
    label: 'Frame Weight',
    value: '78 lbs',
    description: 'Premium steel construction',
  },
  {
    icon: Shield,
    label: 'Warranty',
    value: '20 Years',
    description: 'Industry-leading coverage',
  },
];

const sizeSpecs = [
  {
    name: 'Small',
    dimensions: '47" × 29"',
    weight: '40 lbs',
    ideal: 'Single monitor setup',
  },
  {
    name: 'Medium',
    dimensions: '59" × 29"',
    weight: '50 lbs',
    ideal: 'Dual monitor setup',
    popular: true,
  },
  {
    name: 'Large',
    dimensions: '71" × 29"',
    weight: '60 lbs',
    ideal: 'Triple monitor or L-desk',
  },
];

const detailedSpecs = [
  { label: 'Motor Type', value: 'Dual Motor' },
  { label: 'Columns', value: 'Reinforced 3-segment' },
  { label: 'Frame Finish', value: 'Matte powder coat' },
  { label: 'Feet', value: 'Reinforced tapered (3" wide)' },
  { label: 'Desktop Thickness', value: '1" solid wood' },
  { label: 'Memory Presets', value: '4 programmable heights' },
  { label: 'Anti-Collision', value: 'Yes, with sensitivity control' },
  { label: 'Child Lock', value: 'Yes' },
];

export default function Specifications() {
  return (
    <section id="specifications" className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--cream)] to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[var(--gold)]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[var(--forest)] text-white text-xs font-semibold tracking-wider uppercase rounded-full mb-4">
            Technical Specs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--forest)] mb-4">
            Built to <span className="text-[var(--orange)]">Last</span>
          </h2>
          <p className="text-base md:text-lg text-[var(--forest)]/60 max-w-2xl mx-auto">
            Premium materials and engineering for decades of reliable performance
          </p>
        </motion.div>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
          {keySpecs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[var(--cream)] rounded-2xl p-4 md:p-5 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--forest)] flex items-center justify-center mx-auto mb-3">
                <spec.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--gold)]" />
              </div>
              <p className="text-xl md:text-2xl font-bold text-[var(--forest)] mb-1">
                {spec.value}
              </p>
              <p className="text-xs md:text-sm font-semibold text-[var(--forest)] mb-1">
                {spec.label}
              </p>
              <p className="text-xs text-[var(--forest)]/50 hidden md:block">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Size Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-serif text-[var(--forest)] text-center mb-6 md:mb-8">
            Available Sizes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {sizeSpecs.map((size) => (
              <div
                key={size.name}
                className={`relative rounded-2xl p-5 md:p-6 border-2 transition-all ${
                  size.popular
                    ? 'border-[var(--orange)] bg-gradient-to-br from-[var(--orange)]/5 to-white shadow-lg'
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                {size.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--orange)] text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-bold text-[var(--forest)] mb-2">
                    {size.name}
                  </h4>
                  <p className="text-2xl md:text-3xl font-bold text-[var(--orange)] mb-1">
                    {size.dimensions}
                  </p>
                  <p className="text-sm text-[var(--forest)]/60 mb-3">
                    Desktop weight: {size.weight}
                  </p>
                  <p className="text-xs md:text-sm text-[var(--forest)]/50 bg-[var(--cream)] rounded-lg px-3 py-2">
                    {size.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Detailed Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--forest)] rounded-2xl md:rounded-3xl p-6 md:p-10"
        >
          <h3 className="text-xl md:text-2xl font-serif text-white text-center mb-6 md:mb-8">
            Full Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4">
            {detailedSpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-center py-2 md:py-3 border-b border-white/10"
              >
                <span className="text-sm text-white/60">{spec.label}</span>
                <span className="text-sm font-semibold text-white">{spec.value}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 md:mt-8">
            <a
              href="/wildwood-assembly-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-white transition-colors text-sm font-medium"
            >
              Download Full Spec Sheet (PDF)
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
