'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Zap, MapPin } from 'lucide-react';
import { certifications, awards } from '@/lib/constants';

// Icon mapping for certifications
const iconMap: Record<string, React.ElementType> = {
  'BIFMA': Award,
  'UL': Shield,
  'FCC': Zap,
  'Designed in Canada': MapPin,
};

export default function AwardsCertifications() {
  return (
    <section className="bg-[#FDF5EF] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21]">
            Recognized <span className="text-[#BA4B1A]">Excellence</span>
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-14">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.name] || Award;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow"
                >
                  <Icon className="w-8 h-8 text-[#2C2F21]" />
                </motion.div>

                {/* Name */}
                <h3 className="font-bold text-[#2C2F21] mb-1">
                  {cert.name}
                </h3>

                {/* Label */}
                {cert.label && (
                  <span className="text-sm text-[#BA4B1A] font-medium">
                    {cert.label}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Awards Quotes */}
        <div className="space-y-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-center gap-3 text-center"
            >
              <div className="hidden md:block w-12 h-px bg-[#BA4B1A]" />
              <p className="text-[#2C2F21]">
                <span className="font-semibold">"{award.title}"</span>
                <span className="text-[#5C5F52]"> — {award.source}</span>
              </p>
              <div className="hidden md:block w-12 h-px bg-[#BA4B1A]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
