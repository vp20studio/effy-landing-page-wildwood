'use client';

import { motion } from 'framer-motion';
import { Truck, Calendar, Shield } from 'lucide-react';

const trustItems = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Arrives in 3-5 business days',
  },
  {
    icon: Calendar,
    title: '30-Day Trial',
    description: 'Full refund, no questions asked',
  },
  {
    icon: Shield,
    title: '10-Year Warranty',
    description: 'Frame & motors covered',
  },
];

export default function TrustBanner() {
  return (
    <section className="bg-[#BA4B1A] py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 15,
                  delay: 0.2 + index * 0.1
                }}
                className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4"
              >
                <item.icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/80 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
