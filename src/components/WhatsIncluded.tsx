'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Frame, Keyboard, Cable, Check } from 'lucide-react';
import { bundleItems } from '@/lib/constants';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  'desk': LayoutGrid,
  'frame': Frame,
  'keyboard': Keyboard,
  'cable': Cable,
};

export default function WhatsIncluded() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-[#D3841E] text-2xl mb-4 block">✦</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2F21] mb-4">
            Everything You <span className="text-[#BA4B1A]">Need</span>
          </h2>
          <p className="text-lg text-[#5C5F52] max-w-2xl mx-auto">
            Complete setup delivered to your door. No hidden costs.
          </p>
        </motion.div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bundleItems.map((item, index) => {
            const Icon = iconMap[item.icon] || LayoutGrid;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-[#FDF5EF] rounded-xl p-6 md:p-8 text-center group cursor-pointer"
              >
                {/* Included Badge */}
                <div className="absolute top-3 right-3">
                  <div className="w-5 h-5 rounded-full bg-[#BA4B1A]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#BA4B1A]" />
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow"
                >
                  <Icon className="w-7 h-7 text-[#2C2F21]" />
                </motion.div>

                {/* Item Name */}
                <h3 className="font-bold text-[#2C2F21] mb-1">
                  {item.name}
                </h3>

                {/* Detail */}
                <p className="text-sm text-[#5C5F52]">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#5C5F52] text-sm mt-8"
        >
          All items ship together. Free delivery across Canada.
        </motion.p>
      </div>
    </section>
  );
}
