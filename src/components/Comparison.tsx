'use client';

import { motion } from 'framer-motion';
import { Check, X, Award, ArrowRight } from 'lucide-react';

const competitors = [
  {
    name: 'Wildwood',
    isHighlighted: true,
    features: {
      material: 'Solid Hardwood',
      motors: 'Dual Motors',
      warranty: '20 Years',
      maxWeight: '310 lbs',
      wirelessCharging: true,
      noiseLevel: '<45dB',
      price: '$1,050+',
    },
  },
  {
    name: 'Autonomous',
    isHighlighted: false,
    features: {
      material: 'Laminate',
      motors: 'Single Motor',
      warranty: '7 Years',
      maxWeight: '300 lbs',
      wirelessCharging: false,
      noiseLevel: '~50dB',
      price: '$600',
    },
  },
  {
    name: 'IKEA Bekant',
    isHighlighted: false,
    features: {
      material: 'Particleboard',
      motors: 'Single Motor',
      warranty: '10 Years',
      maxWeight: '154 lbs',
      wirelessCharging: false,
      noiseLevel: '~50dB',
      price: '$550',
    },
  },
  {
    name: 'FlexiSpot',
    isHighlighted: false,
    features: {
      material: 'MDF',
      motors: 'Dual Motors',
      warranty: '5 Years',
      maxWeight: '275 lbs',
      wirelessCharging: false,
      noiseLevel: '~50dB',
      price: '$450',
    },
  },
];

const featureLabels = [
  { key: 'material', label: 'Desktop Material' },
  { key: 'motors', label: 'Motor Type' },
  { key: 'warranty', label: 'Warranty' },
  { key: 'maxWeight', label: 'Weight Capacity' },
  { key: 'wirelessCharging', label: 'Wireless Charging' },
  { key: 'noiseLevel', label: 'Noise Level' },
  { key: 'price', label: 'Starting Price' },
];

export default function Comparison() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[var(--cream)] to-transparent rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[var(--gold)]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--forest)] rounded-full text-white text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4 text-[var(--gold)]" />
            See the Difference
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--forest)] mb-6">
            Premium for a{' '}
            <span className="text-[var(--orange)]">Reason</span>
          </h2>
          <p className="text-xl text-[var(--forest)]/60 max-w-2xl mx-auto">
            See how the Wildwood compares to other popular standing desks
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block overflow-hidden rounded-2xl border border-[var(--cream-dark)] shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="bg-[var(--cream)]">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-[var(--forest)] w-[200px]">
                    Feature
                  </th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.name}
                      className={`px-6 py-5 text-center text-sm font-semibold w-[180px] ${
                        comp.isHighlighted
                          ? 'bg-gradient-to-b from-[var(--gold)]/20 to-[var(--gold)]/5 text-[var(--forest)] border-x-2 border-t-2 border-[var(--gold)]'
                          : 'text-[var(--forest)]/70'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {comp.isHighlighted && (
                          <span className="text-[10px] uppercase tracking-wider text-[var(--orange)] font-bold">
                            Best Value
                          </span>
                        )}
                        <span className={comp.isHighlighted ? 'text-lg' : ''}>{comp.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-[var(--cream-dark)]">
                {featureLabels.map((feature) => (
                  <tr key={feature.key} className="hover:bg-[var(--cream)]/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-[var(--forest)]">
                      {feature.label}
                    </td>
                    {competitors.map((comp) => {
                      const value = comp.features[feature.key as keyof typeof comp.features];
                      return (
                        <td
                          key={`${comp.name}-${feature.key}`}
                          className={`px-6 py-4 text-center text-sm ${
                            comp.isHighlighted
                              ? 'bg-[var(--gold)]/5 border-x-2 border-[var(--gold)] font-semibold text-[var(--forest)]'
                              : 'text-[var(--forest)]/60'
                          }`}
                        >
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className={`w-5 h-5 mx-auto ${comp.isHighlighted ? 'text-green-600' : 'text-green-500'}`} />
                            ) : (
                              <X className="w-5 h-5 mx-auto text-gray-300" />
                            )
                          ) : (
                            <span className={comp.isHighlighted && feature.key === 'warranty' ? 'text-[var(--orange)] font-bold' : ''}>
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>

              {/* Footer with CTA */}
              <tfoot>
                <tr className="bg-[var(--cream)]/50">
                  <td className="px-6 py-5" />
                  {competitors.map((comp) => (
                    <td
                      key={`${comp.name}-cta`}
                      className={`px-6 py-5 text-center ${
                        comp.isHighlighted ? 'bg-[var(--gold)]/10 border-x-2 border-b-2 border-[var(--gold)] rounded-b-lg' : ''
                      }`}
                    >
                      {comp.isHighlighted && (
                        <a
                          href="#product-picker"
                          className="inline-flex items-center gap-2 bg-[var(--orange)] hover:bg-[#a84216] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                        >
                          <span>Configure Yours</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {/* Wildwood Card - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] rounded-2xl" />
            <div className="relative bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--orange)] font-bold">
                    Best Value
                  </span>
                  <h3 className="text-xl font-bold text-[var(--forest)]">Wildwood</h3>
                </div>
                <span className="text-2xl font-bold text-[var(--forest)]">$1,050+</span>
              </div>
              <div className="space-y-3">
                {featureLabels.slice(0, -1).map((feature) => {
                  const value = competitors[0].features[feature.key as keyof typeof competitors[0]['features']];
                  return (
                    <div key={feature.key} className="flex justify-between items-center text-sm">
                      <span className="text-[var(--forest)]/60">{feature.label}</span>
                      <span className="font-semibold text-[var(--forest)]">
                        {typeof value === 'boolean' ? (
                          value ? <Check className="w-5 h-5 text-green-600" /> : <X className="w-5 h-5 text-gray-300" />
                        ) : value}
                      </span>
                    </div>
                  );
                })}
              </div>
              <a
                href="#product-picker"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[var(--orange)] hover:bg-[#a84216] text-white font-semibold py-3 rounded-lg transition-colors"
              >
                <span>Configure Yours</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Other Desks - Collapsed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--cream)] rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold text-[var(--forest)]/60 mb-4 uppercase tracking-wider">
              Other Popular Desks
            </h3>
            <div className="space-y-4">
              {competitors.slice(1).map((comp) => (
                <div key={comp.name} className="flex justify-between items-center py-2 border-b border-[var(--cream-dark)] last:border-0">
                  <span className="font-medium text-[var(--forest)]">{comp.name}</span>
                  <div className="text-right text-sm">
                    <span className="text-[var(--forest)]/60">{comp.features.price}</span>
                    <span className="text-xs text-[var(--forest)]/40 ml-2">
                      {comp.features.warranty} warranty
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[var(--forest)]/40 text-sm mt-8"
        >
          Comparison based on publicly available specifications as of January 2025
        </motion.p>
      </div>
    </section>
  );
}
